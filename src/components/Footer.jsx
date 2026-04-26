import { Link } from "react-router-dom";
import { SITE } from "../config/site";

export default function Footer() {
  const socialItems = [
    {
      label: "Instagram",
      href: SITE.socialLinks.instagram,
      brandClass: "social-instagram",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: SITE.socialLinks.facebook,
      brandClass: "social-facebook",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 9H16V6h-2.5C11 6 10 7.5 10 9.8V12H8v3h2v6h3v-6h2.6l.4-3H13v-2c0-.7.3-1 1-1z" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: SITE.socialLinks.youtube,
      brandClass: "social-youtube",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M21.7 7.2c-.2-.8-.8-1.4-1.6-1.6C18.7 5.2 12 5.2 12 5.2s-6.7 0-8.1.4c-.8.2-1.4.8-1.6 1.6C2 8.6 2 12 2 12s0 3.4.3 4.8c.2.8.8 1.4 1.6 1.6 1.4.4 8.1.4 8.1.4s6.7 0 8.1-.4c.8-.2 1.4-.8 1.6-1.6.3-1.4.3-4.8.3-4.8s0-3.4-.3-4.8Z" fill="currentColor" />
          <path d="M9.7 8.9V15.1L15.1 12L9.7 8.9Z" fill="#ffffff" opacity="0.98" />
          <path d="M9.3 9.3V14.7L14.2 12L9.3 9.3Z" fill="#dc0c0c" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{SITE.brandName}</h3>
          <p>Geeta's Art Gallery, Honnavara, Uttara Kannada</p>
          <p><a href="tel:+91 82174 16352">+91 82174 16352</a></p>
          <p><a href="mailto:info@geetasartgallery.com">info@geetasartgallery.com</a></p>
          <p>Mon - Fri / 9:00 AM - 6:00 PM</p>
        </div>
        <div>
          <h3>Store Locations</h3>
          <p>Isiri Ladies Center, Kumbeshwar Temple Rd, Kumta, Karnataka 581343</p>
          <p>Manipal Syndicate Stores, Madhav Nagar, Manipal Karnataka 576104</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/shop" className="footer-link">Shop</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className="social-links footer-social-links">
            {socialItems.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={item.brandClass} aria-label={item.label}>
                <span className="social-icon" aria-hidden="true">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="footer-copy"> &copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/code-stack" target="_blank" rel="noreferrer">CodeStack.</a> All Rights Reserved.</p>
    </footer>
  );
}