import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '../data/about';
import CDPlayer from '../components/CDPlayer';
import './About.css';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      <FadeIn className="about-hero">
        <div className="about-hero-top">
          <img
            src={about.lab.photo}
            alt={about.name}
            className="about-photo"
            loading="eager"
          />
          <div className="about-hero-text">
            <span className="about-eyebrow">About Me</span>
            <h1 className="about-name">{about.name}</h1>
            <p className="about-role">
              {about.role} · {about.major} {about.classYear}
            </p>
          </div>
        </div>
        <p className="about-bio">{about.bio}</p>
        <p className="about-bio-extended">{about.bioExtended}</p>
        <div className="about-links">
          <a href={`mailto:${about.email}`}>{about.email}</a>
          <a href={about.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={about.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </FadeIn>

      <div className="about-grid">
        <FadeIn delay={0.1} className="about-card matcha-card">
          <div className="matcha-image-wrap">
            <img
              src="/matcha.png"
              alt="Iced matcha design — Matcha, Milk, Mint leaves, Vanilla"
              className="matcha-image"
              loading="lazy"
            />
          </div>
          <p className="matcha-caption">Currently powered by matcha</p>
        </FadeIn>

        <FadeIn delay={0.2} className="about-card info-card">
          <h2 className="card-title">Details</h2>
          <dl className="info-list">
            <div className="info-row">
              <dt>College</dt>
              <dd>{about.college}</dd>
            </div>
            <div className="info-row">
              <dt>Major</dt>
              <dd>{about.major} ({about.classYear})</dd>
            </div>
            <div className="info-row">
              <dt>Research</dt>
              <dd>
                {about.lab.research} @{' '}
                <a href={about.lab.url} target="_blank" rel="noopener noreferrer" className="inline-link">
                  {about.lab.name}
                </a>
              </dd>
            </div>
            <div className="info-row">
              <dt>Interests</dt>
              <dd>
                <ul className="interest-tags">
                  {about.interests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </FadeIn>

        <FadeIn delay={0.3} className="about-card cd-card">
          <h2 className="card-title">On Repeat</h2>
          <CDPlayer />
        </FadeIn>
      </div>

      <FadeIn delay={0.1} className="about-section">
        <h2 className="section-title">Coursework</h2>
        <div className="classes-grid">
          {Object.entries(about.classes).map(([semester, courses]) => (
            <div key={semester} className="semester-block">
              <h3 className="semester-name">{semester}</h3>
              <ul className="course-list">
                {courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="about-section">
        <h2 className="section-title">Honors & Awards</h2>
        <ul className="awards-list">
          {about.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </FadeIn>
    </div>
  );
}
