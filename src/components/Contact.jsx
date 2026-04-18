import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}