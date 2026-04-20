import React from "react";

const galleryImages = [
  "gallery/Kageri with Geeta 2.jpg.jpeg",
  "gallery/Pandith with Geeta.jpg.jpeg",
  "gallery/Raghu with Geeta 1.jpg.jpeg",
  "gallery/B Jayashree with Geeta 1.jpg.jpeg",
  "gallery/exhibition.jpg",
  "gallery/warli and mandala fusion.jpg",
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