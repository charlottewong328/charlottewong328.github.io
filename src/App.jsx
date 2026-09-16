import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import Photography from './pages/Photography';
import About from './pages/About';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
