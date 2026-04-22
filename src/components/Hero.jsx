import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";

const heroSlides = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [activeSlide]);

  return (
    <section
      id="hero"
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured artwork"
    >
      <div className="hero-bg-slider" aria-hidden="true">
        {heroSlides.map((image, index) => (
          <div
            key={image}
            className={`hero-bg-slide ${index === activeSlide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero-bg-overlay" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="hero-content">
        <p className="hero-tag">{SITE.brandName}</p>
        <h1>Explore the world of Mandala Art with Geeta Bhat and experience the harmony of colors, patterns, and emotions.</h1>
        <p>
          Bringing harmony, creativity, and mindfulness through the art of Mandalas.
          Explore the beauty of intricate patterns that inspire and heal.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/shop">Shop Collection</Link>
          <a
            className="btn btn-secondary"
            href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20please%20share%20your%20latest%20catalog.`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-slider-nav" aria-hidden="false">
        <button
          type="button"
          className="hero-slider-nav-btn hero-slider-nav-prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          className="hero-slider-nav-btn hero-slider-nav-next"
          onClick={goNext}
          aria-label="Next slide"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="hero-slider-dots" role="tablist" aria-label="Slide selection">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeSlide}
            aria-label={`Go to slide ${index + 1} of ${heroSlides.length}`}
            className={`hero-slider-dot ${index === activeSlide ? "is-active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}