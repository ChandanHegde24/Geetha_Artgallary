import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        
        {/* Left Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1617957743098-1c8c6c1f8e56"
            alt="Mandala Art"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h4 className="about-subtitle">About Us</h4>
          <h2 className="about-title">
            Creating Peace Through <span>Mandala Art</span>
          </h2>

          <p className="about-text">
            We specialize in handcrafted dot mandala designs that bring balance,
            harmony, and creativity into everyday life. Each piece is created
            with precision, patience, and passion, reflecting the beauty of
            symmetry and mindful artistry.
          </p>

          <p className="about-text">
            Our mission is to inspire calmness and creativity through art,
            transforming simple dots into mesmerizing patterns that tell a story
            of dedication and inner peace.
          </p>

          <button className="about-btn">Explore More</button>
        </div>

      </div>
    </section>
  );
};

export default About;
