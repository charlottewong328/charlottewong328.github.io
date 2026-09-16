import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import './CaseStudy.css';

export default function CaseStudy() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <div className="case-study">
      <motion.div
        className="case-back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/work" className="case-back-link">← Back to Work</Link>
      </motion.div>

      <motion.header
        className="case-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="case-meta">
          <span className="case-category">{project.category}</span>
          <span className="case-year">{project.year}</span>
        </div>
        <h1 className="case-title">{project.title}</h1>
        <p className="case-overview">{project.overview}</p>

        {project.links.length > 0 && (
          <div className="case-links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="case-link-btn"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        <ul className="case-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </motion.header>

      <motion.div
        className="case-gallery"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {project.images.map((src, i) => (
          <figure key={src} className={`case-figure ${i === 0 ? 'hero' : ''}`}>
            <img src={src} alt={`${project.title} — screenshot ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
          </figure>
        ))}
      </motion.div>

      <motion.footer
        className="case-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/work" className="case-next">← All Projects</Link>
      </motion.footer>
    </div>
  );
}
