import React from "react";
import Shop from "./Shop";

const reasons = [
  {
    icon: "🧠",
    title: "Meditation & Mindfulness",
    text: "Mandalas help calm the mind and improve focus. The repetitive patterns and balanced symmetry guide thoughts into a meditative state.",
  },
  {
    icon: "💆",
    title: "Stress Relief & Relaxation",
    text: "Creating or coloring mandalas can be a soothing activity, helping to reduce stress and anxiety while encouraging mindfulness.",
  },
  {
    icon: "🎯",
    title: "Skill Development",
    text: "Drawing mandalas enhances artistic skills such as symmetry, balance, and composition while improving patience and attention to detail.",
  },
  {
    icon: "🕉️",
    title: "Spiritual Growth & Healing",
    text: "In Buddhism, mandalas represent a sacred palace, symbolizing wisdom and enlightenment and supporting inner healing.",
  },
  {
    icon: "🎨",
    title: "Self-Expression & Creativity",
    text: "Mandalas offer endless possibilities for creative expression. Each mandala reflects the artist's emotions and personal journey.",
  },
  {
    icon: "🌿",
    title: "Cultural & Symbolic Meaning",
    text: "Colors and patterns carry meaning: Red - strength, Blue - calmness, Yellow - learning, Green - growth.",
  },
];

const testimonials = [
  {
    quote: "Geeta's Mandala art is mesmerizing! The intricate designs and vibrant colors bring a sense of calm and mindfulness into my space.",
    name: "Sophia M.",
  },
  {
    quote: "Every piece reflects deep creativity and positivity. The attention to detail and spiritual essence in her Mandalas make them truly special.",
    name: "Sandhya",
  },
  {
    quote: "Geeta beautifully blends tradition with modern aesthetics. Her Mandalas are not just art but a spiritual experience.",
    name: "Maheshwari",
  },
];

const popularPicksProducts = [
  {
    name: "Mandala Painting",
    price: "₹ 1,500.00",
    eta: "Ready to order",
    category: "Wall Painting",
    image: "",
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
    image: "",
  },
];

export default function Home() {
  return (
    <>
      <section className="mandala-info mandala-intro-layout">
        <div className="mandala-intro-content">
          <p className="section-tag">What is Mandala Art?</p>
          <p className="about-text">
            Mandala is a Sanskrit word that means “circle.” It is a spiritual and ritual symbol representing the universe in Hinduism and Buddhism. Mandalas often feature intricate, symmetrical patterns radiating from a central point, symbolizing unity, harmony, and balance.
          </p>
          <p className="about-text">
            Mandala art is a geometric design that embodies the interconnectedness of life, balance, and meditation. Deeply rooted in various cultures, particularly in Hindu and Buddhist traditions, mandalas are used for spiritual guidance, self-discovery, and meditation. The repetitive and detailed patterns encourage mindfulness and relaxation, making them a powerful tool for focus and inner peace.
          </p>
          <p className="about-text">
            Beyond its religious and spiritual significance, mandala art has gained recognition in modern practices such as art therapy and mindfulness exercises. It is widely used to reduce stress, enhance creativity, and bring tranquility. Additionally, mandalas are now a popular element in contemporary home décor, digital illustrations, and therapeutic coloring books.
          </p>
          <p className="about-text">
            Whether created as hand-drawn sketches, painted masterpieces, or digital art, mandalas continue to inspire and spread positivity, serving as a bridge between ancient traditions and modern artistic expression.
          </p>
        </div>
        <div className="mandala-intro-image-wrap">
          <img src="/mandala.jpg" alt="Mandala Art" className="mandala-intro-image" />
        </div>
      </section>

      <section className="mandala-info why-mandala-section">
        <p className="section-tag">Why Mandala Art?</p>
        <div className="why-benefits-grid">
          {reasons.map((item, index) => (
            <article key={item.title} className="benefit-card">
              <div className="benefit-topline">
                <span className="benefit-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="benefit-index">0{index + 1}</span>
              </div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mandala-info">
        <p className="section-tag">Words of Encouragement from the Stars</p>
        <h2>Voices of Appreciation</h2>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <Shop
        title="Popular Picks"
        maxProducts={3}
        productsData={popularPicksProducts}
      />
    </>
  );
}
