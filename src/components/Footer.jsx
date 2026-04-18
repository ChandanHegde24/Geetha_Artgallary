import React from "react";
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
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6.5" width="18" height="11" rx="4" fill="currentColor" />
          <path d="M10 9.5 15 12 10 14.5V9.5z" fill="#fff" />
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
          <p>+91 82174 16352</p>
          <p>info@geetasartgallery.com</p>
          <p>Mon - Fri / 9:00 AM - 6:00 PM</p>
        </div>
        <div>
          <h3>Store Locations</h3>
          <p>Isiri Ladies Center, Kumbeshwar Temple Rd, Kumta, Karnataka 581343</p>
          <p>Manipal Syndicate Stores, Madhav Nagar, Manipal Karnataka 576104</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>About</p>
          <p>Gallery</p>
          <p>Shop</p>
          <p>Contact</p>
        </div>
        <div>
          <h3>Policy Info</h3>
          <p>Privacy Policy</p>
          <p>Terms of Sale</p>
          <p>Customer Service</p>
          <p>Delivery Information</p>
          <p>Payments</p>
          <p>FAQ</p>
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
      <p className="footer-copy">© 2026 {SITE.brandName}. All Rights Reserved.</p>
    </footer>
  );
}