import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Geeta Bhat",
    location:"Mandala Artist-Manipal",
  },
  {
    name: "Priya Bhat",
    location: "Isiri Ladies Center, Kumta",
  },
  {
    name: "Medha Pandith",
    location: "Bangalore",
  },
  {
    name: "Manyshree Pandith",

    location: "Bangalore",
  },
  {
    name: "Swayam Bhat",
    location: "Navilgoan",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">        <div className="about-image">
          <img
            src="/about.jpg"
            alt="Mandala Art"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">Geeta Bhat</h2>
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
            ಗೀತಾ ಭಟ್ ಎಂಟು ವರ್ಷಗಳ ಹಿಂದೆ ಮಂಡಲ ಆರ್ಟ್ ಮೆಚ್ಚಿ ಅದನ್ನು ಸೃಜನಶೀಲ ಹವ್ಯಾಸವಾಗಿಸಿಕೊಂಡರು. ಕಾಲಕ್ರಮೇಣ ಮಂಡಲ ಆರ್ಟ್ ನ ಕಲಾತ್ಮಕತೆ ಮತ್ತು ಸಂಕೀರ್ಣತೆ ಹೊಂದಿರುವ ಈ ಕಲೆ ಅವರನ್ನು ವೃತ್ತಿಪರ ಮಂಡಲ ಕಲಾವಿದೆಯಾಗಿ ರೂಪಾಂತರಿಸಿತು.
ವರ್ಷಗಳ ನಿಷ್ಠೆ, ಶೃದ್ಧೆ ಮತ್ತು ಅಭ್ಯಾಸದ ಮೂಲಕ ಗಿತಾ ಅವರು ವಿವಿಧ ರೀತಿಯ ಕಲಾಕೃತಿಗಳನ್ನು ರಚಿಸಿದ್ದಾರೆ. ಪಾರಂಪರಿಕ ತಂತ್ರಗಳನ್ನು ಆಧುನಿಕ ಸೌಂದರ್ಯದೊಂದಿಗೆ ಕೂಡಿಸಿಕೊಂಡು ದಿನನಿತ್ಯದ ಬದುಕಿನಲ್ಲಿ ಉಪಯೋಗಿಸುವ ಅನೇಕ ಬಗೆಯ ವಸ್ತುಗಳ ಮೇಲೆ ಮಂಡಲ ಆರ್ಟ್ ಅನ್ನು ರಚಿಸಿದ್ದಾರೆ. 
          </p>
          <p className="about-text-kannada">
ಮಂಡಲ ಕಲೆಯು ಕೇವಲ ಕಲೆಯಲ್ಲದೆ, ಅವು ಧ್ಯಾನದ ಪ್ರತಿರೂಪವಾಗಿ ಸಕಾರಾತ್ಮಕತೆ ಶಾಂತಿ ಮತ್ತು ಸಮತೋಲನವನ್ನು ಹರಡುತ್ತದೆ. 
ಗೀತಾ ಅವರ ವರ್ಣಾತ್ಮಕ ಮತ್ತು ಸಂಕೀರ್ಣ ಮಂಡಲ ಕಲಾಕೃತಿಗಳು ಭಾರತದ ಹೊರತಾಗಿ ಯುಕೆ, ಯು ಎಸ್, ಆಸ್ಟ್ರೇಲಿಯಾ ಇನ್ನಿತರ ದೇಶಗಳಿಗೆ ತಲುಪಿ ಮೆಚ್ಚುಗೆ ಗಳಿಸಿದೆ.
          </p>
          <div className="about-points">
            <span>Traditional + Modern Design</span>
            <span>Custom-designed Mandalas</span>
            <span>Personalized creations</span>
          </div>
          <Link className="about-btn" to="/shop">Explore Mandalas</Link>
        </div>
      </div>

      <section className="our-team">
        <p className="section-tag">Meet The Team</p>
        <h2>Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-location">{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
