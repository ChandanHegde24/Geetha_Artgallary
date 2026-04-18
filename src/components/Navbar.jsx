import React from "react";
import { NavLink } from "react-router-dom";
import { SITE } from "../config/site";

export default function Navbar() {
  const socialItems = [
    {
      label: "Instagram",
      href: SITE.socialLinks.instagram,
      brandClass: "social-instagram",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: SITE.socialLinks.facebook,
      brandClass: "social-facebook",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 9H16V6h-2.5C11 6 10 7.5 10 9.8V12H8v3h2v6h3v-6h2.6l.4-3H13v-2c0-.7.3-1 1-1z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: SITE.socialLinks.youtube,
      brandClass: "social-youtube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6.5" width="18" height="11" rx="4" fill="currentColor" />
          <path d="M10 9.5 15 12 10 14.5V9.5z" fill="#fff" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">{SITE.brandName}</NavLink>

      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <a
        className="whatsapp-chip"
        href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20I%20want%20to%20order%20mandala%20art.`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Orders
      </a>
      <div className="social-links navbar-social-links" aria-label="Social links">
        {socialItems.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className={item.brandClass}>
            <span className="social-icon" aria-hidden="true">{item.icon}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}