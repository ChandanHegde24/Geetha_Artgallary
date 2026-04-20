import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=1200&q=80"
            alt="Handcrafted mandala artwork"
          />
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">Geeta Bhat</h4>
          <p className="about-text">
            Geeta Bhat is a passionate Mandala artist whose journey into this intricate art form began as a hobby. Over the years, her fascination with patterns, symmetry, and mindfulness transformed into a deep artistic pursuit. With patience and dedication, she honed her skills, blending traditional techniques with modern creativity.
          </p>
          <p className="about-text">
            Her Mandalas are more than just visual art—they represent balance, harmony, and inner peace. Each creation tells a unique story, crafted with precision and vibrant colors to evoke positivity and serenity.
          </p>
          <p className="about-text">
            Geeta's work has gained admiration from art lovers across the globe, including the UK, the US, and Australia. Whether displayed as home décor, used in meditation, or admired for its aesthetic beauty, her Mandalas continue to inspire and uplift.
          </p>
          <p className="about-text">
            <b>Step into a world of creativity, mindfulness, and artistic expression with Geeta's Mandala art.</b>
          </p>
          <div className="about-points">
            <span>Traditional + Modern Design</span>
            <span>Custom-designed Mandalas</span>
            <span>Personalized creations</span>
          </div>
          <Link className="about-btn" to="/shop">Explore Mandalas</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
