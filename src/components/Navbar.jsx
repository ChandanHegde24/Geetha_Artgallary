import React from "react";
import { NavLink } from "react-router-dom";
import { SITE } from "../config/site";
import logo from "/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo logo-link" title={SITE.brandName}>
        <img 
          src={logo}
          alt={SITE.brandName} 
          className="logo-image"
        />
      </NavLink>

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
    </nav>
  );
}