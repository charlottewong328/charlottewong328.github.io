import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playlist } from '../data/about';
import './CDPlayer.css';

const SPRAWL_ROTATIONS = [-6, 2, 8];
const SPRAWL_OFFSETS = [
  { x: -8, y: 0 },
  { x: 0, y: -4 },
  { x: 8, y: 2 },
];

export default function CDPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const track = playlist.tracks[currentTrack];
  const previewTracks = playlist.tracks.slice(0, 3);

  const togglePlay = () => setIsPlaying((p) => !p);

  const nextTrack = () => {
    setCurrentTrack((i) => (i + 1) % playlist.tracks.length);
  };

  const prevTrack = () => {
    setCurrentTrack((i) => (i - 1 + playlist.tracks.length) % playlist.tracks.length);
  };

  return (
    <div className="cd-player-wrap">
      <div className="cassette-area">
        <div className="sprawl-tracks">
          {previewTracks.map((t, i) => (
            <motion.button
              key={`${t.title}-${i}`}
              className={`sprawl-card ${i === currentTrack ? 'active' : ''}`}
              style={{
                transform: `rotate(${SPRAWL_ROTATIONS[i]}deg) translate(${SPRAWL_OFFSETS[i].x}px, ${SPRAWL_OFFSETS[i].y}px)`,
                zIndex: i === currentTrack ? 3 : 2 - i,
              }}
              onClick={() => setCurrentTrack(i)}
              whileHover={{ scale: 1.03, zIndex: 4 }}
            >
              <span className="sprawl-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sprawl-title">{t.title}</span>
              <span className="sprawl-artist">{t.artist}</span>
            </motion.button>
          ))}
        </div>

        <motion.button
          className="cassette-trigger"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Open cassette player"
        >
          <div className="cassette-body">
            <div className="cassette-window">
              <div className={`cassette-reel left ${isPlaying ? 'spinning' : ''}`} />
              <div className={`cassette-reel right ${isPlaying ? 'spinning' : ''}`} />
            </div>
            <div className="cassette-label">{playlist.title}</div>
          </div>
          <span className="cd-label">{isPlaying ? 'Playing' : 'Press to open'}</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="cd-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cd-panel-header">
              <span className="cd-panel-title">{playlist.title}</span>
              <button className="cd-close" onClick={() => setIsOpen(false)} aria-label="Close">
                ×
              </button>
            </div>

            <div className="cd-display">
              <div className="cassette-body small">
                <div className="cassette-window">
                  <div className={`cassette-reel left ${isPlaying ? 'spinning' : ''}`} />
                  <div className={`cassette-reel right ${isPlaying ? 'spinning' : ''}`} />
                </div>
              </div>
              <div className="cd-track-info">
                <span className="cd-track-title">{track.title}</span>
                <span className="cd-track-artist">{track.artist}</span>
              </div>
            </div>

            <div className="cd-controls">
              <button onClick={prevTrack} aria-label="Previous track">⏮</button>
              <button className="cd-play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button onClick={nextTrack} aria-label="Next track">⏭</button>
            </div>

            <ol className="cd-tracklist">
              {playlist.tracks.map((t, i) => (
                <li
                  key={`${t.title}-${i}`}
                  className={i === currentTrack ? 'active' : ''}
                  onClick={() => setCurrentTrack(i)}
                >
                  <span className="track-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="track-name">{t.title}</span>
                  <span className="track-artist-sm">{t.artist}</span>
                </li>
              ))}
            </ol>

            <iframe
              className="cd-spotify-embed"
              src={playlist.spotifyEmbed}
              title={playlist.title}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />

            <a
              href={playlist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cd-spotify-link"
            >
              Open in Spotify →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
