import React, { useEffect, useState } from "react";
import { SITE } from "../config/site";

const products = [
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: "Wall Painting",
    image: "images/mandala painting.jpg.jpeg",
  },

  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Wall Painting With House Name",
    price: "₹ 2,500.00",
    eta: "Customizable",
    category: "Wall Painting",
    image: "images/wall painting with house name.jpg.jpeg",
  },
  {
    name: "Tealight Holder (per pair)",
    price: "₹ 350.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "",
  },
  {
    name: "Table Top Photo Frame With Mirror",
    price: "₹ 850.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "images\table top photo frames.jpg.jpeg",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Decor Items",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Resin Coated Earrings (Pair)",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Fashion",
    image: "",
  },
  {
    name: "Elephant Mandala",
    price: "₹ 2,000.00",
    eta: "Size: 10*10 inch",
    category: "Wall Decor",
    image: "images/elephant mandala.jpg.jpeg",
  },
  {
    name: "Evil Eye Mandala",
    price: "₹ 2,500.00",
    eta: "Ready to order",
    category: "Wall Decor",
    image: "images/evil eye mandala.jpg.jpeg",
  },
  {
    name: "Om Mandala",
    price: "₹ 1,500.00",
    eta: "Size: 12*12 inch",
    category: "Wall Decor",
    image: "images/om mandala.jpg.jpeg",
  },
  {
    name: "Ganesh Mandala",
    price: "₹ 1,000.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/Ganesha madala.jpg",
  },
   {
    name: "Bookmarks",
    price: "₹ 200.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/bookmarks.jpg",
  },
   {
    name: "Door Side Hangings",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/door side hangings.jpg",
  },
   {
    name: "Earrings (Per Pair)",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/earrings.jpg",
  },
   {
    name: "Elephant Mandala",
    price: "₹ 2,000.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/Elephant.jpg",
  },
   {
    name: "Evil Eye Fridge Magnets",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/evil eye fridge magnets.jpg",
  },
   {
    name: "Evil Eye Mandala",
    price: "₹ 2,500.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/evil eye mandala.jpg",
  },
   {
    name: "Key Holder",
    price: "₹ 800.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/key holder.jpg",
   
  },
   {
    name: "Key Holder",
    price: "₹ 800.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/key holder2.jpg",
  },
   {
    name: "Keychains",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/key chains.jpg",
  },
   {
    name: "Magnets Photo Frames (per pc)",
    price: "₹ 250.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/magnet photo frame.jpg",
  },
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/mandala painting.jpg",
  },
  {
    name: "Pop Socket (per pc)",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/Pop Socket.jpg",
  },
  {
    name: "Resin Coated Earrings (Pair)",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/Resin Coated Earrings.jpg",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame With Mirror",
    price: "₹ 850.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/tabletopphotoframemirror.jpg",
  },
  {
    name: "Tealight Candle Holders (per pc)",
    price: "₹ 175.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/tealight candle holders.jpg",
  },
  {
    name: "Tealight Holder (per pair)",
    price: "₹ 350.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/tealight holder.jpg",
  },
 

  {
    name: "Handpainted Tray Set",
    price: "₹ 1,250.00",
    eta: "Ready to order",
    category: "Tray and Coaster",
    image: "",
  },
  {
    name: "Mandala Coaster Set",
    price: "₹ 550.00",
    eta: "Ready to order",
    category: "Tray and Coaster",
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
  initialCategory = "All",
  maxProducts,
  productsData
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomImageAlt, setZoomImageAlt] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const allProducts = Array.isArray(productsData) && productsData.length > 0 ? productsData : products;
  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);
  const displayedProducts = typeof maxProducts === "number"
    ? filteredProducts.slice(0, maxProducts)
    : filteredProducts;

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
          {displayedProducts.map((p, i) => (
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