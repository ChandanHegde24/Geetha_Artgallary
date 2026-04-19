import React from "react";

const galleryImages = [
  "images/Kageri with Geeta 2.jpg.jpeg",
  "images/Pandith with Geeta.jpg.jpeg",
  "images/Raghu with Geeta 1.jpg.jpeg",
  "images/B Jayashree with Geeta 1.jpg.jpeg",
  "images/mandala painting.jpg.jpeg",
  "images/mandala painting.jpg.jpeg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <p className="section-tag">Visual Preview</p>
      <h2>Customer Favorite Styles</h2>
      <div className="grid">
        {galleryImages.map((img, i) => (
          <div className="gallery-card" key={i}>
            <img src={img} alt="mandala product" />
          </div>
        ))}
      </div>
    </section>
  );
}