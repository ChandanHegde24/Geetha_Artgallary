import Shop from "./Shop";

const reasons = [
  {
    title: "Meditation & Mindfulness",
    text: "Mandalas help calm the mind and improve focus. The repetitive patterns and balanced symmetry guide thoughts into a meditative state.",
    backgroundImage: "/meditation.png",
  },
  {
    title: "Stress Relief & Relaxation",
    text: "Creating or coloring mandalas can be a soothing activity, helping to reduce stress and anxiety while encouraging mindfulness.",
    backgroundImage: "/Relaxation.png",    
  },
  {
    title: "Skill Development",
    text: "Drawing mandalas enhances artistic skills such as symmetry, balance, and composition while improving patience and attention to detail.",
    backgroundImage: "/Skill.jpg",
  },
  {
    title: "Spiritual Growth & Healing",
    text: "In Buddhism, mandalas represent a sacred palace, symbolizing wisdom and enlightenment and supporting inner healing.",
    backgroundImage: "/Healing.png",
  },
  {
    title: "Self-Expression & Creativity",
    text: "Mandalas offer endless possibilities for creative expression. Each mandala reflects the artist's emotions and personal journey.",
    backgroundImage: "/Creativity.png",
  },
  {
    title: "Cultural & Symbolic Meaning",
    text: "Colors and patterns carry meaning: Red - strength, Blue - calmness, Yellow - learning, Green - growth.",
    backgroundImage: "/Cultural.png",
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
    image: "/img/mandala painting.jpg",
  },
  {
    name: "Table Top Photo Frame",
    price: "₹ 600.00",
    eta: "Ready to order",
    image: "/img/tabletopphotoframe.png",
  },
  {
    name: "Wall Painting With House Name",
    price: "₹ 2,500.00",
    eta: "Customizable",
    image: "/img/house name.jpg",
  },
];

export default function Home() {
  return (
    <>      
      <section className="mandala-info artist-bio-section">
        <div className="artist-bio-content">
          <h2>Meet Geeta Bhat – A Passionate Mandala Artist</h2>
          <p className="about-text-kannada">
            ಮಂಡಲ ಆರ್ಟ್ ಎನ್ನುವ ಈ ಕಲಾಪ್ರಕಾರಕ್ಕೆ ಗೀತಾ ಭಟ್ ಇವರು ಕಾಲಿಟ್ಟಿದ್ದು ಹವ್ಯಾಸಿ ಕಲಾವಿದೆಯಾಗಿ. ಯಾರೊಬ್ಬರಿಂದಲೂ ಕಲಿಯದೆ ತಾವೇ ಸ್ವತಃ ಕಲಿತು ಈ ಮಟ್ಟಕ್ಕೆ ಬೆಳೆದಿದ್ದಾರೆಂದರೆ ಅದು ಕಲೆಯ ಬಗೆಗಿನ ಅವರ ಪ್ರೀತಿ ಹಾಗೂ ಸಮರ್ಪಣೆಯನ್ನು ತೋರಿಸುತ್ತದೆ. </p>
          <p className="about-text-kannada">  
            ಮಂಡಲ ಆರ್ಟ್ ಮಾನಸಿಕ ಸಮತೋಲನ, ಸಾಮರಸ್ಯ ಮತ್ತು ಆಂತರಿಕ ಶಾಂತಿಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ. ಪ್ರತಿಯೊಂದು ಬಣ್ಣಕ್ಕೂ ಒಂದೊಂದು ಕಥೆಯಿದೆ, ಹಾಗೆಯೇ ಪ್ರತಿಯೊಂದು ಚಿತ್ರವೂ ಒಂದು ವಿಶಿಷ್ಟ ಕಥೆಯನ್ನು ಹೇಳುತ್ತದೆ. </p> 
          <p className="about-text-kannada">
            ಗೀತಾ ಅವರ ಕೆಲಸವು ಯುಕೆ, ಯುಎಸ್ ಮತ್ತು ಆಸ್ಟ್ರೇಲಿಯಾ ಸೇರಿದಂತೆ ವಿಶ್ವದಾದ್ಯಂತದ ಕಲಾ ಪ್ರೇಮಿಗಳಿಂದ ಮೆಚ್ಚುಗೆಯನ್ನು ಗಳಿಸಿದೆ. ಮನೆಯಲ್ಲಿ ಅಲಂಕಾರಕ್ಕಾಗಿ ಜೊತೆಗೆ ಆಧ್ಯಾತ್ಮಿಕ ಟಚ್ ಇರಲಿ ಎಂದು ಬಯಸುವವರಿಗಂತೂ ಇದು ಖಂಡಿತವಾಗಿಯೂ ಇಷ್ಟವಾಗುತ್ತದೆ. ಸಕಾರಾತ್ಮಕತೆ ಮತ್ತು ಪ್ರಶಾಂತತೆಯನ್ನು ಹೆಚ್ಚಿಸುವ ಈ ಕೆಲಯಲ್ಲಿ ತೊಡಗಿಕೊಂಡಿರುವ ಗೀತಾ ಭಟ್ ಇವರ ಕಾರ್ಯವನ್ನು ನೀವೂ ಪ್ರೋತ್ಸಾಹಿಸಿ, ಅವರ ಉತ್ಸಾಹವನ್ನು ಇಮ್ಮಡಿಗೊಳಿಸಿ.
          </p>
          <p className="about-text">
            Geeta Bhat, a dedicated housewife, discovered her passion for mandala art eight years ago as a creative hobby. Over time, her deep connection with intricate patterns and sacred geometry transformed her into a professional mandala artist. Today, her mesmerizing artwork not only fosters mindfulness and creativity but also serves as a source of inspiration for art lovers worldwide.
          </p>
          <p className="about-text">
            Through years of dedication and practice, Geeta has mastered various mandala styles, blending traditional techniques with modern aesthetics. Her vibrant, hand-drawn mandalas are more than just art—they are a form of meditation, spreading positivity, tranquility, and balance. Her work resonates with individuals seeking therapeutic and meaningful artistic experiences.
          </p>
          <p className="about-text">
            With a strong presence in the global art community, Geeta's colorful and intricate mandalas have reached art enthusiasts in the UK, US, Australia, and beyond. Each of her creations reflects her passion, precision, and the transformative power of mandala art. Whether you are looking for custom-designed mandalas, art prints, or personalized creations, Geeta's work brings a touch of mindfulness and serenity to every space.
          </p>
        </div>
      </section>
      <section className="mandala-info mandala-intro-layout">
        <p className="section-tag">What is Mandala Art?</p>
        <div className="mandala-intro-content">
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
          {reasons.map((item) => (
            <article 
              key={item.title} 
              className="benefit-card"
              style={item.backgroundImage ? {
                backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.75), rgba(17, 24, 39, 0.75)), url('${item.backgroundImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : {}}
            >
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Shop
        title="Popular Picks"
        maxProducts={3}
        showFilters={false}
        productsData={popularPicksProducts}
      />

      <section className="mandala-info youtube-playlist-section">
        <p className="section-tag">Video Tutorials</p>
        <h2>Mandala Art Tutorials & Behind the Scenes</h2>
        <div className="youtube-videos-grid">
          <div className="youtube-video-item">
            <div className="youtube-playlist-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/videoseries?list=PLy2OfIXlOp2T3uqy6Lllcf2iaHwnDYQk7" 
                title="Mandala Art Playlist" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/47AGJbVlMEo" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/BKZvWQq42vg" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/UBC7vrH-6gw" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/hLcZ0vkPCq4" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/Dd83gVdKBOY" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/z48hGVkGKd8" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/UQ23XDH5ld4" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
                    <div className="youtube-video-item">
            <div className="youtube-video-container">
              <iframe 
                width="100%" 
                height="400" 
                src="https://www.youtube.com/embed/aGZsJTccCU8" 
                title="Featured Mandala Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
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
    </>
  );
}
