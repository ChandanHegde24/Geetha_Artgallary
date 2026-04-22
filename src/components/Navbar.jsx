import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SITE } from "../config/site";
import { useTheme } from "../context/ThemeContext";
import logo from "/logo.png";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo logo-link" title={SITE.brandName}>
        <img 
          src={logo}
          alt={SITE.brandName} 
          className="logo-image"
        />
      </NavLink>

      <button 
        className={`hamburger-menu ${isMenuOpen ? "is-open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
        <li><NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
        <li><NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
      </ul>

      <div className="navbar-actions">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <a
          className="whatsapp-chip"
          href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20I%20want%20to%20order%20mandala%20art.`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}