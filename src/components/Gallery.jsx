import React from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1523419409543-9f915f75de16?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
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