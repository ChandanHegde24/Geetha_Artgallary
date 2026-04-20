import React, { useState } from "react";
import { SITE } from "../config/site";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
  const [selectedStore, setSelectedStore] = useState(SITE.storeLocations[0]);

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

  const openGoogleMaps = (store) => {
    const query = encodeURIComponent(store.address);
    window.open(`https://www.google.com/maps/search/${query}`, "_blank");
  };

  return (
    <>
      {/* Store Locations Section */}
      <section className="store-locations">
        <p className="section-tag">Visit Us</p>
        <h2>Our Store Locations</h2>
        
        <div className="stores-container">
          {/* Map Display */}
          <div className="stores-map-wrapper">
            <div className="map-frame-container">
              {selectedStore && (
                <iframe
                  className="google-map-embed"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(selectedStore.address)}&z=15&output=embed`}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={selectedStore.name}
                />
              )}
            </div>
          </div>

          {/* Stores List */}
          <div className="stores-list">
            {SITE.storeLocations.map((store, index) => (
              <div
                key={store.id}
                className={`store-card ${selectedStore?.id === store.id ? "is-active" : ""}`}
                onClick={() => setSelectedStore(store)}
              >
                <div className="store-header">
                  <div className="store-badge">{index + 1}</div>
                  <div className="store-header-content">
                    <h3>{store.name}</h3>
                    <p className="store-type">{store.type}</p>
                  </div>
                </div>

                <div className="store-details">
                  <div className="store-detail-item">
                    <MapPin size={18} className="icon" />
                    <div>
                      <p className="detail-label">Address</p>
                      <p className="detail-value">{store.address}</p>
                    </div>
                  </div>

                  <div className="store-detail-item">
                    <Phone size={18} className="icon" />
                    <div>
                      <p className="detail-label">Phone</p>
                      <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="detail-value detail-link">
                        {store.phone}
                      </a>
                    </div>
                  </div>

                  <div className="store-detail-item">
                    <Clock size={18} className="icon" />
                    <div>
                      <p className="detail-label">Hours</p>
                      <p className="detail-value">{store.hours}</p>
                    </div>
                  </div>
                </div>

                <button
                  className="btn-store-map"
                  onClick={(e) => {
                    e.stopPropagation();
                    openGoogleMaps(store);
                  }}
                >
                  <ExternalLink size={16} />
                  View on Google Maps
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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
    </>
  );
}