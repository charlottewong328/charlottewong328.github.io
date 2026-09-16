import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Landing.css';

const FULL_TEXT = 'PORTFOLIO';
const TYPING_SPEED = 120;

function useTypewriter(text, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let timeout;
    let interval;
    let i = 0;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, TYPING_SPEED);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, startDelay]);

  return { displayed, done };
}

export default function Landing() {
  const [showGrid, setShowGrid] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const { displayed, done } = useTypewriter(FULL_TEXT, 1800);

  useEffect(() => {
    const gridTimer = setTimeout(() => setShowGrid(true), 400);
    const labelTimer = setTimeout(() => setShowLabels(true), 3200);
    return () => {
      clearTimeout(gridTimer);
      clearTimeout(labelTimer);
    };
  }, []);

  const portText = displayed.slice(0, 4);
  const folioText = displayed.length > 4 ? displayed.slice(4) : '';
  const showCursor = !done;

  return (
    <div className="landing">
      <svg className="blueprint-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: showGrid ? 1 : 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Floor plan walls */}
          <rect x="60" y="60" width="1080" height="680" fill="none" stroke="var(--brown-300)" strokeWidth="1" />
          <rect x="120" y="120" width="480" height="360" fill="none" stroke="var(--brown-300)" strokeWidth="0.75" strokeDasharray="4 4" />
          <rect x="680" y="120" width="400" height="200" fill="none" stroke="var(--brown-300)" strokeWidth="0.75" />
          <rect x="680" y="380" width="400" height="300" fill="none" stroke="var(--brown-300)" strokeWidth="0.75" />

          {/* Door arcs */}
          <path d="M 60 400 A 60 60 0 0 1 120 460" fill="none" stroke="var(--brown-300)" strokeWidth="0.75" />
          <path d="M 1140 500 A 60 60 0 0 0 1080 560" fill="none" stroke="var(--brown-300)" strokeWidth="0.75" />
          <path d="M 400 740 A 60 60 0 0 1 460 680" fill="none" stroke="var(--brown-300)" strokeWidth="0.75" />

          {/* Crosshair markers */}
          <g stroke="var(--brown-400)" strokeWidth="0.5">
            <line x1="590" y1="55" x2="610" y2="55" />
            <line x1="600" y1="45" x2="600" y2="65" />
            <rect x="575" y="40" width="50" height="20" fill="none" stroke="var(--brown-300)" strokeWidth="0.5" />
          </g>

          {/* Vector anchor points */}
          <g opacity="0.6">
            <rect x="980" y="100" width="60" height="60" fill="none" stroke="var(--brown-400)" strokeWidth="0.5" />
            <circle cx="980" cy="100" r="3" fill="var(--brown-400)" />
            <circle cx="1040" cy="100" r="3" fill="var(--brown-400)" />
            <circle cx="1040" cy="160" r="3" fill="var(--brown-400)" />
            <circle cx="980" cy="160" r="3" fill="var(--brown-400)" />
          </g>

          <g opacity="0.6">
            <rect x="140" y="620" width="50" height="50" fill="none" stroke="var(--brown-400)" strokeWidth="0.5" />
            <circle cx="140" cy="620" r="3" fill="var(--brown-400)" />
            <circle cx="190" cy="620" r="3" fill="var(--brown-400)" />
            <circle cx="190" cy="670" r="3" fill="var(--brown-400)" />
            <circle cx="140" cy="670" r="3" fill="var(--brown-400)" />
          </g>

          {/* Construction arrows */}
          <path d="M 850 300 Q 780 280 720 320" fill="none" stroke="var(--brown-400)" strokeWidth="0.75" markerEnd="url(#arrowhead)" />
          <path d="M 350 500 Q 420 480 480 440" fill="none" stroke="var(--brown-400)" strokeWidth="0.75" />

          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6" fill="var(--brown-400)" />
            </marker>
          </defs>
        </motion.g>
      </svg>

      <div className="landing-content">
        <motion.div
          className="landing-labels top"
          initial={{ opacity: 0 }}
          animate={{ opacity: showLabels ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-mono">cw</span>
          <span className="label-mono">ui</span>
        </motion.div>

        <div className="portfolio-text-wrap">
          {/* Construction grid lines over text */}
          <div className="construction-lines">
            <div className="hline h1" />
            <div className="hline h2" />
            <div className="hline h3" />
            <div className="vline v1" />
            <div className="vline v2" />
            <div className="vline v3" />
          </div>

          <div className="portfolio-text">
            <div className="port-line-wrap">
              <motion.span
                className="label-name-tilted"
                initial={{ opacity: 0 }}
                animate={{ opacity: showLabels ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                charlotte wong&apos;s
              </motion.span>
              <div className="port-line">
                <span className="port">{portText}</span>
              {portText.length === 4 && folioText.length === 0 && showCursor && (
                <span className="cursor">|</span>
              )}
              </div>
            </div>
            <div className="folio-line">
              <span className="folio">{folioText}</span>
              {folioText.length > 0 && showCursor && (
                <span className="cursor">|</span>
              )}
            </div>
          </div>
        </div>

        <motion.div
          className="landing-cta"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/work" className="cta-link">
            View Work
            <span className="cta-arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
