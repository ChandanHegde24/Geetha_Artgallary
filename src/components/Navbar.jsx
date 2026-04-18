import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Geeta's Art Gallary</h2>

      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}