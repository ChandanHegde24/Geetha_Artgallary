import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brush,
  Gift,
  Images,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { SITE } from "../config/site";

const featuredPieces = [
  {
    name: "Mandala Paintings",
    price: "From Rs. 1,500",
    note: "Original wall art",
    image: "/img/mandala painting.jpg",
  },
  {
    name: "Custom Name Boards",
    price: "From Rs. 2,500",
    note: "Made for homes and rituals",
    image: "/img/house name.jpg",
  },
  {
    name: "Gift Photo Frames",
    price: "From Rs. 600",
    note: "Personalized keepsakes",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Fridge Magnets",
    price: "From Rs. 150",
    note: "Small art for everyday spaces",
    image: "/img/rainbow fridge magnet.jpg",
  },
];

const services = [
  {
    title: "Original Art",
    text: "Hand-painted mandalas, spiritual pieces, and decorative wall art for homes, studios, and gifting.",
    icon: Brush,
  },
  {
    title: "Custom Orders",
    text: "Name boards, upanayana boards, frames, books, and personal pieces designed around your occasion.",
    icon: Sparkles,
  },
  {
    title: "Gift Collection",
    text: "Keychains, bookmarks, earrings, magnets, tealight holders, and compact handmade surprises.",
    icon: Gift,
  },
];

const galleryPreview = [
  "/img/Ganesha madala.jpg",
  "/img/Elephant.jpg",
  "/img/mirror.jpg",
  "/gallery/exhibition.jpg",
  "/img/tealight candle holders.jpg",
  "/img/keychain 7.jpeg",
];

const orderSteps = [
  "Share your idea",
  "Approve the design",
  "Receive handmade art",
];

const whatsappCatalogLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  "Hi Geeta, please share your latest artwork catalog."
)}`;

const whatsappCustomLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  "Hi Geeta, I want to place a custom mandala art order."
)}`;

export default function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero" aria-labelledby="landing-hero-title">
        <div className="landing-hero-content">
          <p className="landing-eyebrow">Hand-painted mandala art</p>
          <h1 id="landing-hero-title">{SITE.brandName}</h1>
          <p className="landing-hero-copy">
            Original mandala paintings, custom name boards, thoughtful gifts, and mindful art pieces
            created by Geeta Bhat for homes, celebrations, and everyday calm.
          </p>
          <div className="landing-actions" aria-label="Primary actions">
            <Link className="btn btn-primary landing-action" to="/shop">
              <span>Shop Collection</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a className="landing-whatsapp-action" href={whatsappCustomLink} target="_blank" rel="noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Custom Order</span>
            </a>
          </div>
          <dl className="landing-proof">
            <div>
              <dt>8+</dt>
              <dd>Years of practice</dd>
            </div>
            <div>
              <dt>60+</dt>
              <dd>Art pieces listed</dd>
            </div>
            <div>
              <dt>3+</dt>
              <dd>Global collector regions</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="landing-section landing-featured" aria-labelledby="featured-title">
        <div className="landing-section-heading">
          <p className="section-tag">Shop Highlights</p>
          <h2 id="featured-title">Popular handmade pieces</h2>
          <Link className="landing-text-link" to="/shop">
            <span>View all products</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="landing-product-grid">
          {featuredPieces.map((piece) => (
            <article className="landing-product-card" key={piece.name}>
              <Link to="/shop" aria-label={`View ${piece.name}`}>
                <img src={piece.image} alt={piece.name} loading="lazy" />
              </Link>
              <div className="landing-product-body">
                <div>
                  <p>{piece.note}</p>
                  <h3>{piece.name}</h3>
                </div>
                <span>{piece.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-section landing-services" aria-labelledby="services-title">
        <div className="landing-section-heading landing-section-heading-centered">
          <p className="section-tag">Made With Intention</p>
          <h2 id="services-title">Art for walls, rituals, and gifts</h2>
        </div>
        <div className="landing-service-grid">
          {services.map(({ title, text, icon: Icon }) => (
            <article className="landing-service-card" key={title}>
              <span className="landing-service-icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-story" aria-labelledby="story-title">
        <div className="landing-story-media">
          <img src="/about.jpg" alt="Geeta Bhat holding a blue mandala painting" loading="lazy" />
        </div>
        <div className="landing-story-content">
          <p className="section-tag">The Artist</p>
          <h2 id="story-title">Created by Geeta Bhat</h2>
          <p>
            Geeta Bhat began mandala art as a personal practice and shaped it into a collection
            known for color, patience, symmetry, and calm. Each work is drawn and painted by hand,
            with custom details added for the person or occasion it belongs to.
          </p>
          <div className="landing-story-actions">
            <Link className="btn btn-primary landing-action" to="/about">
              <span>Meet the Artist</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="landing-story-link" to="/gallery">
              <Images size={18} aria-hidden="true" />
              <span>See Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-section landing-order" aria-labelledby="order-title">
        <div className="landing-order-content">
          <p className="section-tag">Custom Work</p>
          <h2 id="order-title">A simple path from idea to finished piece</h2>
          <div className="landing-order-steps">
            {orderSteps.map((step, index) => (
              <div className="landing-order-step" key={step}>
                <span>Step {String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
        <a className="landing-order-cta" href={whatsappCustomLink} target="_blank" rel="noreferrer">
          <MessageCircle size={22} aria-hidden="true" />
          <span>Start on WhatsApp</span>
        </a>
      </section>

      <section className="landing-section landing-gallery-preview" aria-labelledby="gallery-preview-title">
        <div className="landing-section-heading">
          <div>
            <p className="section-tag">Visual Preview</p>
            <h2 id="gallery-preview-title">Color, detail, and texture up close</h2>
          </div>
          <Link className="landing-text-link" to="/gallery">
            <span>Open gallery</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="landing-mosaic">
          {galleryPreview.map((image, index) => (
            <img key={image} src={image} alt={`Mandala gallery preview ${index + 1}`} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="landing-final-cta" aria-labelledby="final-cta-title">
        <div>
          <p className="section-tag">Contact Us</p>
          <h2 id="final-cta-title">Choose a finished artwork or commission your own.</h2>
          <p>
            Browse the catalog, ask for the latest pieces, or share the colors, size, and occasion
            you have in mind.
          </p>
        </div>
        <div className="landing-final-actions">
          <a className="btn btn-primary landing-action" href={whatsappCatalogLink} target="_blank" rel="noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            <span>Ask for Catalog</span>
          </a>
          <Link className="landing-location-link" to="/contact">
            <MapPin size={18} aria-hidden="true" />
            <span>Store Details</span>
          </Link>
        </div>
      </section>
    </main>
  );
}