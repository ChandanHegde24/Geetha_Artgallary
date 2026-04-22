import { useState } from "react";

const FAQData = [
  {
    question: "What is Mandala Art?",
    answer: "Mandala art is a geometric design that represents the universe in Hindu and Buddhist cultures. It typically features patterns radiating from a central point, promoting mindfulness, meditation, and spiritual growth. Geeta's mandalas blend traditional techniques with modern aesthetics.",
  },
  {
    question: "Can I customize a mandala design?",
    answer: "Yes! We offer custom mandala designs tailored to your preferences. You can specify colors, size, style, and any special elements you'd like incorporated. Please reach out to us on WhatsApp to discuss your requirements.",
  },
  {
    question: "What's the typical delivery time?",
    answer: "Ready-to-order items ship within 3-5 business days. Customizable items take 7-14 days depending on complexity. Large or intricate custom orders may require 2-3 weeks. Exact timelines are discussed when you place your order.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to UK, US, Australia, and other countries. Shipping costs and delivery times vary by location. Contact us via WhatsApp for international shipping quotes and details.",
  },
  {
    question: "What materials are used?",
    answer: "Our mandalas are hand-drawn using high-quality materials including acrylic paints, watercolors, and archival-quality papers. For items like frames and decorative pieces, we use premium materials to ensure durability and aesthetic appeal.",
  },
  {
    question: "How do I care for my mandala art?",
    answer: "Keep your mandala artwork away from direct sunlight to prevent fading. Dust gently with a soft cloth. For framed pieces, avoid moisture and extreme temperature changes. If it's a wall painting, ensure the wall is clean and dry before installation.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We primarily accept orders through WhatsApp and handle payments via bank transfer or digital payment methods. Chat with us on WhatsApp to discuss payment options that work best for you.",
  },
  {
    question: "Can I return or exchange items?",
    answer: "Custom orders are typically non-returnable as they are made specifically for you. Ready-to-order items can be returned within 7 days if they arrive damaged. Please contact us immediately if there's an issue with your order.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="section-tag">Questions & Answers</p>
      <h2>Frequently Asked Questions</h2>
      
      <div className="faq-container">
        {FAQData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "is-active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
