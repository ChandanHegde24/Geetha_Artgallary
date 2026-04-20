import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1617957743098-1c8c6c1f8e56"
            alt="Mandala Art"
          />
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">Meet Geeta Bhat - A Passionate Mandala Artist</h4>
          <h2 className="about-title">Mandala Magic</h2>
          <p className="about-text">
            Geeta Bhat, a dedicated housewife, discovered her passion for mandala art
            eight years ago as a creative hobby. Over time, her deep connection with
            intricate patterns and sacred geometry transformed her into a professional
            mandala artist.
          </p>
          <p className="about-text">
            Through years of dedication and practice, Geeta has mastered various
            mandala styles, blending traditional techniques with modern aesthetics.
            Her vibrant, hand-drawn mandalas are more than just art—they are a form
            of meditation, spreading positivity, tranquility, and balance.
          </p>
          <p className="about-text">
            With a strong presence in the global art community, Geeta's colorful and
            intricate mandalas have reached art enthusiasts in the UK, US, Australia,
            and beyond.
          </p>
          <div className="about-points">
            <span>Traditional + Modern Design</span>
            <span>Custom-designed Mandalas</span>
            <span>Personalized creations</span>
          </div>
          <Link className="about-btn" to="/shop">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
