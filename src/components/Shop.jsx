import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { useCart } from "../context/CartContext";

const products = [
  {
    name: "Budhha Mandala",
    price: "₹ 7,000.00",
    eta: "Ready to order",
    category: "Wall Painting",
    image: "/img/buddha.jpg",
    sizes: ["30 inch"],
  },
  {
    name: "Wall Painting With House Name",
    price: "₹ 2,500.00",
    eta: "Customizable",
    category: ["Customize", "Decor Items","Wall Painting"],
    image: "/img/house name.jpg",
  },
  {
    name: "Custom Name Board",
    price: "₹ 2,500.00",
    eta: "Customizable",
    category: ["Customize", "Decor Items","Wall Painting"],
    image: "/img/custom name Board.jpg",
  },
  {
    name: "Dairy Mandala Design",
    price: "₹ 500.00",
    eta: "Customizable",
    category: ["Customize", "Decor Items","Gifting and Personal use"],
    image: "/img/diary.jpg",
  },
  {
    name: "Book Mandala Design",
    price: "₹ 500.00",
    eta: "Customizable",
    category: ["Customize", "Decor Items","Gifting and Personal use"],
    image: "/img/book.jpg",
  },
  {
    name: "Chocolate Photo Frame",
    price: "₹ 1,800.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/chocolate.jpg",
  },
  {
    name: "Mandala Photo Frame",
    price: "₹ 1,800.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame.jpg",
  },
   {
    name: "Mandala Photo Frame",
    price: "₹ 1,800.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame9.jpg",
  },
  {
    name: "Mandala Photo Frame",
    price: "₹ 2,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame1.jpg",
  },
   {
    name: "Mandala Photo Frame",
    price: "₹ 2,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame7.jpg",
  },
   {
    name: "Mandala Photo Frame",
    price: "₹ 2,500.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame8.jpg",
    sizes: ["20 inch"],
  },
  {
    name: "Mandala Photo Frame",
    price: "₹ 2,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame3.jpg",
  },
  {
    name: "Mandala Photo Frame",
    price: "₹ 1,800.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame 4.jpg",
  },
  {
    name: "Mandala Photo Frame",
    price: "₹ 2,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame2.jpg",
  },
  {
    name: "Mandala Photo Frame",
    price: "₹ 1,800.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/photo frame 6.jpg",
  },
  {
    name: "Om Mandala",
    price: "₹ 2,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/om.jpg",
  },
  {
    name: "Pink Flower",
    price: "₹ 4,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/pink flower.jpg",
  },
  {
    name: "Purple Flower",
    price: "₹ 1,300.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/purple flower.jpg",
  },
  {
    name: "Mirror Mandala",
    price: "₹ 4,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/mirror.jpg",
  },
  {
    name: "Rainbow Mirror",
    price: "₹ 4,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/rainbow mirror.jpg",
  },
  {
    name: "Sunset Mandala",
    price: "₹ 2,000.00",
    eta: "Customizable",
    category: ["Customize", "Wall Painting"],
    image: "/img/sunset mandala.jpg",
  },
 
  {
    name: "Customised Work for Upanayana",
    price: "₹ 2000.00",
    eta: "Customizable",
    category: [ "Decor Items","Wall Decor"],
    image: "/img/upanayana.jpg",
  },
  {
    name: "Customised Work for Upanayana Board",
    price: "₹ 2000.00",
    eta: "Customizable",
    category: [ "Decor Items","Wall Decor"],
    image: "/img/upanayana board.jpg",
  },
  
  {
    name: "Ganesh Mandala",
    price: "₹ 1,000.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/Ganesha madala.jpg",
  },
  {
    name: "Pen Stand",
    price: "₹ 350.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items"],
    image: "/img/pen stand.jpg",
  },
   {
    name: "Bookmarks",
    price: "₹ 200.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/bookmarks.jpg",
  },
  {
    name: "Bookmark",
    price: "₹ 200.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/bookmark.jpg",
  },
   {
    name: "Door Side Hangings",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/door side hangings.jpg",
  },
   {
    name: "Earrings (Per Pair)",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Fashion"],
    image: "/img/earrings.jpg",
  },
   {
    name: "Elephant Mandala",
    price: "₹ 2,000.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Wall Decor"],
    image: "/img/Elephant.jpg",
  },
   {
    name: "Evil Eye Fridge Magnets",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/evil eye fridge magnets.jpg",
  },
  {
    name: "Fridge Magnet",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/fridge magnet.jpg",
  },
  {
    name: "Fridge Magnet",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/fridge magnet1.jpg",
  },
  {
    name: "Fridge Magnet",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/fridge magnet 2.jpg",
  },
  {
    name: "Rainbow Fridge Magnet",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/rainbow fridge magnet.jpg",
  },

   {
    name: "Key Holder",
    price: "₹ 800.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/key holder.jpg",
   
  },
   {
    name: "Key Holder",
    price: "₹ 800.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
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
    name: "Keychains",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 1.jpg",
  },
  {
    name: "Keychains",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 2.jpg",
  },
  {
    name: "Keychains",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 3.jpg",
  },
  {
    name: "Keychain",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 4.jpg",
  },
  {
    name: "Keychain",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 5.jpg",
  },
  {
    name: "Keychain",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 6.jpg",
  },
  {
    name: "Keychain",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: "Gifting and Personal use",
    image: "/img/keychain 7.jpg",
  },
   {
    name: "Magnets Photo Frames (per pc)",
    price: "₹ 250.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Tray and Coaster"],
    image: "/img/magnet photo frame.jpg",
  },
  {
    name: "Magnets Photo Frames (per pc)",
    price: "₹ 250.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Tray and Coaster"],
    image: "/img/photo frame magnet.jpg",
  },
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use","Wall Painting", "Decor Items","Wall Decor"],
    image: "/img/mandala painting.jpg",
  },
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use","Wall Painting", "Decor Items","Wall Decor"],
    image: "/img/mandala 2.jpg",
  },
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use","Wall Painting", "Decor Items","Wall Decor"],
    image: "/img/mandala 4.jpg",
  },
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use","Wall Painting", "Decor Items","Wall Decor"],
    image: "/img/mandala 6.jpg",
  },
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use","Wall Painting", "Decor Items","Wall Decor"],
    image: "/img/mandala 7.jpg",
  },
  {
    name: "Pop Socket (per pc)",
    price: "₹ 150.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items"],
    image: "/img/Pop Socket.jpg",
  },
  {
    name: "Resin Coated Earrings (Pair)",
    price: "₹ 125.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Fashion"],
    image: "/img/Resin Coated Earrings.jpg",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Table Top Photo Frame With Mirror",
    price: "₹ 850.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Wall Decor"],
    image: "/img/tabletopphotoframemirror.jpg",
  },
  {
    name: "Tealight Candle Holders (per pc)",
    price: "₹ 175.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Tray and Coaster"],
    image: "/img/tealight candle holders.jpg",
  },
  {
    name: "Tealight Holder (per pair)",
    price: "₹ 350.00",
    eta: "Ready to order",
    category: ["Gifting and Personal use", "Decor Items","Tray and Coaster"],
    image: "/img/tealight holder.jpg",
  },
 
];

const shopCategories = [
  "All",
  "Customize",
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
  showFilters = true,
  initialCategory = "All",
  maxProducts,
  productsData
}) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSort, setSelectedSort] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomImageAlt, setZoomImageAlt] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const [addedToCart, setAddedToCart] = useState(null);
  const allProducts = Array.isArray(productsData) && productsData.length > 0 ? productsData : products;
  
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === "All"
      ? true
      : (() => {
          const categories = Array.isArray(product.category) ? product.category : [product.category];
          return categories.includes(selectedCategory);
        })();
    
    const price = parseFloat(product.price.replace(/[₹,\s]/g, ""));
    const priceMatch = price >= priceRange[0] && price <= priceRange[1];
    
    return categoryMatch && priceMatch;
  });

  const getSortedProducts = (productsToSort) => {
    const sorted = [...productsToSort];
    
    switch (selectedSort) {
      case "price-low-to-high":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\s]/g, ""));
          const priceB = parseFloat(b.price.replace(/[₹,\s]/g, ""));
          return priceA - priceB;
        });
      case "price-high-to-low":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\s]/g, ""));
          const priceB = parseFloat(b.price.replace(/[₹,\s]/g, ""));
          return priceB - priceA;
        });
      case "name-a-to-z":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-z-to-a":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  };

  const sortedFilteredProducts = getSortedProducts(filteredProducts);
  const displayedProducts = typeof maxProducts === "number"
    ? sortedFilteredProducts.slice(0, maxProducts)
    : sortedFilteredProducts;

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

  const getCategoryCount = (category) => {
    if (category === "All") {
      return allProducts.length;
    }
    return allProducts.filter((product) => {
      const categories = Array.isArray(product.category) ? product.category : [product.category];
      return categories.includes(category);
    }).length;
  };

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
                {category} <span className="category-count">({getCategoryCount(category)})</span>
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
        {showFilters && (
          <div className="shop-filters">
            <div className="shop-sort-container">
              <label htmlFor="sort-select" className="shop-sort-label">Sort by:</label>
              <select
                id="sort-select"
                className="shop-sort-select"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="name-a-to-z">Name: A to Z</option>
                <option value="name-z-to-a">Name: Z to A</option>
              </select>
            </div>
            
            <div className="shop-price-filter">
              <label htmlFor="price-range" className="shop-sort-label">Price Range:</label>
              <div className="price-inputs">
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  placeholder="Min"
                />
                <span className="price-separator">-</span>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  placeholder="Max"
                />
              </div>
              <input
                id="price-range"
                type="range"
                min="0"
                max="10000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="price-slider"
              />
              <p className="price-display">₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}</p>
            </div>
          </div>
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
              {p.sizes && p.sizes.length > 0 && (
                <div className="product-sizes">
                  <div className="sizes-list">
                    {p.sizes.map((size, idx) => (
                      <span key={idx} className="size-tag">Size: {size}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="product-meta">
                <p>{p.price}</p>
                <span className="eta">{p.eta}</span>
              </div>
              <div className="product-actions">
                <button
                  className={`add-to-cart-btn ${addedToCart === i ? 'added' : ''}`}
                  onClick={() => {
                    addToCart(p);
                    setAddedToCart(i);
                    setTimeout(() => setAddedToCart(null), 2000);
                  }}
                  aria-label={`Add ${p.name} to cart`}
                >
                  {addedToCart === i ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <a
                  className="buy-btn"
                  href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20I%20want%20to%20buy%20${encodeURIComponent(p.name)}%20for%20${encodeURIComponent(p.price)}.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
        {typeof maxProducts === "number" && (
          <div className="shop-view-all-container">
            <Link className="btn btn-primary" to="/shop">View All</Link>
          </div>
        )}
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