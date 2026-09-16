import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { photography } from '../data/photography';
import './Photography.css';

function PhotoItem({ src, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.figure
      ref={ref}
      className="photo-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <img src={src} alt={`Photography ${index + 1}`} loading="lazy" />
    </motion.figure>
  );
}

export default function Photography() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div className="photography-page">
      <motion.header
        ref={headerRef}
        className="photography-header"
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="photography-eyebrow">Gallery</span>
        <h1 className="photography-heading">{photography.title}</h1>
        <p className="photography-sub">{photography.description}</p>
      </motion.header>

      <div className="photo-grid">
        {photography.images.map((src, i) => (
          <PhotoItem key={src} src={src} index={i} />
        ))}
      </div>
    </div>
  );
}
