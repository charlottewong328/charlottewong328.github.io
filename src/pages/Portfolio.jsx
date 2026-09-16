import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/projects';
import './Portfolio.css';

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/work/${project.id}`} className="project-link">
        <div className="project-image-wrap">
          <motion.img
            src={project.image}
            alt={project.title}
            className="project-image"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
          />
          <div className="project-overlay">
            <span className="project-view">View Case Study →</span>
          </div>
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-desc">{project.description}</p>
          <ul className="project-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}

export default function Portfolio() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="portfolio-page">
      <motion.header
        ref={headerRef}
        className="portfolio-header"
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="portfolio-eyebrow">Selected Work</span>
        <h1 className="portfolio-heading">UI / UX Projects</h1>
        <p className="portfolio-sub">
          Product design, mobile interfaces, and web experiences.
        </p>
      </motion.header>

      <div className="project-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
