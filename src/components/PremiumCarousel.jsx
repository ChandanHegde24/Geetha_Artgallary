import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";

const featuredProducts = [
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    tag: "Best Seller",
    image: "/img/mandala painting.jpg",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    tag: "Gift Ready",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Wall Painting With House Name",
    price: "₹ 2,500.00",
    tag: "Custom",
    image: "/img/house name.jpg",
  },
  {
    name: "Evil Eye Mandala",
    price: "₹ 2,500.00",
    tag: "Protective Art",
    image: "/img/evil eye mandala.jpg",
  },
  {
    name: "Ganesh Mandala",
    price: "₹ 1,000.00",
    tag: "Festive",
    image: "/img/Ganesha madala.jpg",
  },
  {
    name: "Bookmarks",
    price: "₹ 200.00",
    tag: "Pocket Size",
    image: "/img/bookmarks.jpg",
  },
];

export default function PremiumCarousel() {
  const baseCount = featuredProducts.length;
  const loopedProducts = useMemo(
    () => [...featuredProducts, ...featuredProducts, ...featuredProducts],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(baseCount);
  const [animate, setAnimate] = useState(true);

  const goToNext = () => {
    setAnimate(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    setAnimate(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (slideIndex) => {
    setAnimate(true);
    setCurrentIndex(baseCount + slideIndex);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setAnimate(true);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentIndex >= baseCount * 2) {
      const frame = window.requestAnimationFrame(() => {
        setAnimate(false);
        setCurrentIndex(baseCount);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    if (currentIndex < baseCount) {
      const frame = window.requestAnimationFrame(() => {
        setAnimate(false);
        setCurrentIndex(baseCount * 2 - 1);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    if (!animate) {
      const frame = window.requestAnimationFrame(() => {
        setAnimate(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }

    return undefined;
  }, [animate, baseCount, currentIndex]);

  const activeSlide = (currentIndex - baseCount + baseCount) % baseCount;

  const handleImageMove = (event) => {
    const wrap = event.currentTarget;
    const bounds = wrap.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    wrap.style.setProperty("--pointer-x", String(Math.min(Math.max(x, 0), 1)));
    wrap.style.setProperty("--pointer-y", String(Math.min(Math.max(y, 0), 1)));
  };

  const resetImageMove = (event) => {
    const wrap = event.currentTarget;
    wrap.style.setProperty("--pointer-x", "0.5");
    wrap.style.setProperty("--pointer-y", "0.5");
  };

  return (
    <section className="premium-carousel-section" aria-labelledby="premium-carousel-title">
      <div className="premium-carousel-shell">
        <div className="premium-carousel-stage">
          <button
            type="button"
            className="premium-carousel-nav premium-carousel-nav-prev"
            onClick={goToPrev}
            aria-label="Previous products"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div className="premium-carousel-viewport">
            <div
              className={`premium-carousel-track ${animate ? "is-animated" : "is-snap"}`}
              style={{ transform: `translateX(calc(50% - (var(--premium-card-width) / 2) - (${currentIndex} * (var(--premium-card-width) + var(--premium-card-gap)))))` }}
              onTransitionEnd={() => {
                if (currentIndex >= baseCount * 2) {
                  setAnimate(false);
                  setCurrentIndex(baseCount);
                }

                if (currentIndex < baseCount) {
                  setAnimate(false);
                  setCurrentIndex(baseCount * 2 - 1);
                }
              }}
            >
              {loopedProducts.map((product, index) => {
                const isActive = index === currentIndex;

                return (
                  <article
                    key={`${product.name}-${index}`}
                    className={`premium-product-card ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <div
                      className="premium-product-image-wrap"
                      onMouseMove={handleImageMove}
                      onMouseLeave={resetImageMove}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="premium-product-image"
                      />
                      <span className="premium-product-tag">{product.tag}</span>
                    </div>
                    <div className="premium-product-content">
                      <div>
                        <h3>{product.name}</h3>
                        <p className="premium-product-price">{product.price}</p>
                      </div>
                      <a
                        className="premium-product-cta"
                        href={`https://wa.me/${SITE.whatsappNumber}?text=Hi%20Geeta%2C%20I%20want%20to%20buy%20${encodeURIComponent(product.name)}%20for%20${encodeURIComponent(product.price)}.`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buy on WhatsApp
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="premium-carousel-nav premium-carousel-nav-next"
            onClick={goToNext}
            aria-label="Next products"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className="premium-carousel-dots" role="tablist" aria-label="Featured products pagination">
          {featuredProducts.map((product, index) => (
            <button
              key={product.name}
              type="button"
              className={`premium-carousel-dot ${index === activeSlide ? "is-active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${product.name}`}
              aria-selected={index === activeSlide}
            />
          ))}
        </div>

        <div className="premium-carousel-bottom-action">
          <Link className="btn btn-primary premium-carousel-shop-btn" to="/shop">
            Explore Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
