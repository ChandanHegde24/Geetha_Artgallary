import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="public/about.jpg"
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

          <h4 className="about-subtitle">ಕನ್ನಡ ಭಾಷಾಂತರ</h4>
          <p className="about-text-kannada">
            ಗೀತಾ ಭಟ್ಟ, ಆತ್ಮನಿರ್ಭರ ಗೃಹಿಣಿ, ಎಂಟು ವರ್ಷಗಳ ಹಿಂದೆ ಮಂಡಲ ಕಲೆಯ ಮೆಚ್ಚುಗೆಯನ್ನು ಸೃಜನಶೀಲ ಹವ್ಯಾಸವಾಗಿ ಕಂಡುಹಿಡಿದಳು. ಕಾಲಕ್ರಮೇ ಣ, ಸಂಕೀರ್ಣ ಪ್ರತಿರೂಪಗಳು ಮತ್ತು ಪವಿತ್ರ ಜ್ಯಾಮಿತಿಯ ಹೊಂದಿದ ಆಗ ಪ್ರಸರಣವು ಅವಳನ್ನು ವೃತ್ತಿಪರ ಮಂಡಲ ಕಲಾವಿದನಾಗಿ ರೂಪಾಂತರಿಸಿತು.
          </p>
          <p className="about-text-kannada">
            ವರ್ಷಗಳ ನಿಷ್ಠೆ ಮತ್ತು ಅಭ್ಯಾಸದ ಮೂಲಕ, ಗೀತಾ ವಿವಿಧ ಮಂಡಲ ರೇಖಾಚಿತ್ರಗಳನ್ನು ಕೈಗೊಂಡಿದ್ದಾರೆ, ಪರಂಪರಾಗತ ತಂತ್ರಗಳನ್ನು ಆಧುನಿಕ ಸೌಂದರ್ಯದೊಂದಿಗೆ ಕೂಡಿಸಿಕೊಂಡಿದ್ದಾರೆ. ಅವರ ಪ್ರಾಣವಂತ, ಕೈಯಿಂದ ಚಿತ್ರಿತ ಮಂಡಲಗಳು ಕೇವಲ ಕಲೆಯಲ್ಲ—ಅವು ಧ್ಯಾನದ ರೂಪವಾಗಿ, ಸಕಾರಾತ್ಮಕತೆ, ಶಾಂತಿ ಮತ್ತು ಸಮತೋಲನವನ್ನು ಹರಡುತ್ತವೆ.
          </p>
          <p className="about-text-kannada">
            ಜಾಗತಿಕ ಕಲೆ ಸಮುದಾಯದಲ್ಲಿ ಬಲವಾದ ನೆರೆದಾರಿಮೆಯೊಂದಿಗೆ, ಗೀತಾದ ವರ್ಣಶೀಲ ಮತ್ತು ಸಂಕೀರ್ಣ ಮಂಡಲಗಳು ಯುಕೆ, ಯುಎಸ್, ಆಸ್ಟ್ರೇಲಿಯಾ ಮತ್ತು ಅದರ ಹೊರತಿಗೆ ಕಲೆ ನೆಚ್ಚೆಯವರನ್ನು ತಲುಪಿದೆ.
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
