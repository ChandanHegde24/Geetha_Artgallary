import { Link } from "react-router-dom";
import { SITE } from "../config/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      aria-roledescription="carousel"
      aria-label="Featured artwork"
    >
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
            className="whatsapp-chip"
            href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20please%20share%20your%20latest%20catalog.`}
            target="_blank"
            rel="noreferrer"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}