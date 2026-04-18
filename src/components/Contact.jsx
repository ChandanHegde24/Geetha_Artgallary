import React from "react";
import { SITE } from "../config/site";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const requirement = data.get("requirement");
    const message = `Hi Geeta, I am ${name}. My phone number is ${phone}. Requirement: ${requirement}`;
    const link = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact">
      <p className="section-tag">Quick Enquiry</p>
      <h2>Get Quote In Minutes</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <textarea
          name="requirement"
          placeholder="Tell us what you want to order"
          required
        />
        <button type="submit">Send to WhatsApp</button>
      </form>
    </section>
  );
}