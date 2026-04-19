import React, { useEffect, useState } from "react";
import { SITE } from "../config/site";

const products = [
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: "Wall Painting",
    description: "Handmade mandala work that elevates your wall with mindful symmetry.",
    image: "images/mandala painting.jpg.jpeg",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    description: "Decorative photo frame with artistic hand-painted detailing.",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Wall Painting With House Name",
    price: "₹ 2,500.00",
    eta: "Customizable",
    category: "Wall Painting",
    description: "Personalized mandala painting featuring your home name and style.",
    image: "images/wall painting with house name.jpg.jpeg",
  },
  {
    name: "Tealight Holder (per pair)",
    price: "₹ 350.00",
    eta: "Ready to order",
    category: "Decor Items",
    description: "Pair of festive tealight holders crafted for warm ambient lighting.",
    image: "",
  },
  {
    name: "Table Top Photo Frame With Mirror",
    price: "₹ 850.00",
    eta: "Ready to order",
    category: "Decor Items",
    description: "Photo frame with mirror accents to brighten compact spaces.",
    image: "images\table top photo frames.jpg.jpeg",
  },
  {
    name: "Resin Coated Earrings (Pair)",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Fashion",
    description: "Lightweight wearable art earrings finished with glossy resin coating.",
    image: "",
  },
  {
    name: "Elephant Mandala",
    price: "₹ 2,000.00",
    eta: "Size: 10*10 inch",
    category: "Wall Decor",
    description: "Elegant elephant-themed mandala composition with symbolic motifs.",
    image: "images/elephant mandala.jpg.jpeg",
  },
  {
    name: "Evil Eye Mandala",
    price: "₹ 2,500.00",
    eta: "Ready to order",
    category: "Wall Decor",
    description: "Protective evil-eye mandala artwork designed with vibrant contrasts.",
    image: "images/evil eye mandala.jpg.jpeg",
  },
  {
    name: "Om Mandala",
    price: "₹ 1,500.00",
    eta: "Size: 12*12 inch",
    category: "Wall Decor",
    description: "Sacred Om mandala piece ideal for meditation corners and pooja spaces.",
    image: "images/om mandala.jpg.jpeg",
  },
  {
    name: "Ganesh Mandala",
    price: "₹ 1,000.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    description: "Auspicious Ganesh artwork suitable for gifting and home blessings.",
    image: "",
  },
  {
    name: "Keychains",
    price: "₹ 125.00",
    eta: "Size: 2inch*2inch*3mm",
    category: "Gifting and Personal use",
    description: "Compact custom keychains with mandala flair for everyday use.",
    image: "",
  },
  {
    name: "Handpainted Tray Set",
    price: "₹ 1,250.00",
    eta: "Ready to order",
    category: "Tray and Coaster",
    description: "Functional tray set with hand-painted patterns for stylish serving.",
    image: "",
  },
  {
    name: "Mandala Coaster Set",
    price: "₹ 550.00",
    eta: "Ready to order",
    category: "Tray and Coaster",
    description: "Durable coaster set with vibrant mandala detailing for tabletops.",
    image: "",
  },
];

const shopCategories = [
  "All",
  "Decor Items",
  "Fashion",
  "Gifting and Personal use",
  "Tray and Coaster",
  "Wall Decor",
  "Wall Painting",
];

export default function Shop({
  title = "Our Signature Collection",
  showFeaturedBadge = true,
  showCategories = false,
  initialCategory = "All"
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomImageAlt, setZoomImageAlt] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const openZoomViewer = (image, alt) => {
    setZoomImage(image);
    setZoomImageAlt(alt);
    setZoomLevel(1);
  };

  const closeZoomViewer = () => {
    setZoomImage(null);
    setZoomImageAlt("");
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeZoomViewer();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {showCategories && (
        <section className="shop-categories">
          <p className="section-tag">Mandala Art Category</p>
          <h2>Browse by Category</h2>
          <div className="shop-category-grid">
            {shopCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`shop-category-chip ${selectedCategory === category ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      )}
      <section id="shop" className="shop">
        <p className="section-tag">Mandala Magic</p>
        <h2>{title}</h2>
        {selectedCategory !== "All" && showCategories && (
          <p className="shop-selected-category">Showing: {selectedCategory}</p>
        )}
        <div className="products">
          {filteredProducts.map((p, i) => (
            <article key={i} className="card product-card">
              {showFeaturedBadge && <span className="product-badge">Featured</span>}
              {p.image ? (
                <button
                  type="button"
                  className="product-image-trigger"
                  onClick={() => openZoomViewer(p.image, p.name)}
                  aria-label={`Zoom image of ${p.name}`}
                >
                  <img className="product-image" src={p.image} alt={p.name} loading="lazy" />
                </button>
              ) : (
                <div className="product-image-placeholder" aria-hidden="true">
                  Add product image
                </div>
              )}
              <h3>{p.name}</h3>
              <div className="product-meta">
                <p>{p.price}</p>
                <span className="eta">{p.eta}</span>
              </div>
              <a
                className="buy-btn"
                href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20I%20want%20to%20buy%20${encodeURIComponent(p.name)}%20for%20${encodeURIComponent(p.price)}.`}
                target="_blank"
                rel="noreferrer"
              >
                Buy on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </section>
      {zoomImage && (
        <div className="image-viewer-overlay" role="dialog" aria-modal="true" aria-label="Product image zoom viewer" onClick={closeZoomViewer}>
          <div className="image-viewer-content" onClick={(event) => event.stopPropagation()}>
            <div className="image-viewer-toolbar">
              <button type="button" onClick={zoomOut} aria-label="Zoom out">-</button>
              <span>{Math.round(zoomLevel * 100)}%</span>
              <button type="button" onClick={zoomIn} aria-label="Zoom in">+</button>
              <button type="button" onClick={resetZoom}>Reset</button>
              <button type="button" onClick={closeZoomViewer}>Close</button>
            </div>
            <div className="image-viewer-stage">
              <img
                src={zoomImage}
                alt={zoomImageAlt}
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}