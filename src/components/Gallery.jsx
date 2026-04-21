import React, { useState } from "react";

const galleryImages = [
  "gallery/Kageri with Geeta 2.jpg.jpeg",
  "gallery/Pandith with Geeta.jpg.jpeg",
  "gallery/Raghu with Geeta 1.jpg.jpeg",
  "gallery/B Jayashree with Geeta 1.jpg.jpeg",
  "gallery/exhibition.jpg",
  "gallery/warli and mandala fusion.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const previousIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[previousIndex]);
  };

  const goToNext = () => {
    const currentIndex = galleryImages.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <>
      <section id="gallery" className="gallery">
        <p className="section-tag">Visual Preview</p>
        <h2>Customer Favorite Styles</h2>
        <div className="grid">
          {galleryImages.map((img, i) => (
            <div
              className="gallery-card"
              key={i}
              onClick={() => openLightbox(img)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(img)}
              aria-label={`Open gallery image ${i + 1}`}
            >
              <img src={img} alt={`Gallery artwork ${i + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <button className="gallery-zoom-btn" aria-label="Zoom image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              ❮
            </button>

            <img src={selectedImage} alt="Gallery full view" />

            <button
              className="lightbox-nav lightbox-next"
              onClick={goToNext}
              aria-label="Next image"
            >
              ❯
            </button>

            <div className="lightbox-counter">
              {galleryImages.indexOf(selectedImage) + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}