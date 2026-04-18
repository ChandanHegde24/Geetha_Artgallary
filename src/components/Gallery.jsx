import React from "react";

const images = [
  "images/IMG_20250213_113513.jpg.jpeg",
  "images/IMG_20250213_113513.jpg.jpeg",
  "images/IMG_20250213_113513.jpg.jpeg",
  "images/IMG_20250213_113513.jpg.jpeg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt="art" />
        ))}
      </div>
    </section>
  );
}