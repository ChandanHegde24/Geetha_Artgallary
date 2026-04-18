import React from "react";

const images = [
  "https://images.unsplash.com/photo-1",
  "https://images.unsplash.com/photo-2",
  "https://images.unsplash.com/photo-3",
  "https://images.unsplash.com/photo-4",
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