import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SITE } from "../config/site";
import { useTheme } from "../context/ThemeContext";
import logo from "/logo.png";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo logo-link" title={SITE.brandName}>
          <img 
            src={logo}
            alt={SITE.brandName} 
            className="logo-image"
          />
        </NavLink>


        <ul className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
          <li><NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
        </ul>

        {/* Search Bar */}
        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>

        <div className="navbar-actions">
          {/* Account Link */}
          <NavLink to="/account" className="navbar-icon-link" title="My Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </NavLink>

          {/* Cart Link */}
          <NavLink to="/cart" className="navbar-icon-link cart-icon" title="Shopping Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">0</span>
          </NavLink>

          {/* Theme Toggle */}
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

          {/* Hamburger Menu */}
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

          {/* WhatsApp */}
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