import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/photography', label: 'Photo' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <NavLink to="/" className="nav-logo">
        CW
      </NavLink>
      <ul className="nav-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
