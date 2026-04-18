import React from "react";

const products = [
  { name: "Mandala Plate", price: "₹999" },
  { name: "Wall Art", price: "₹1499" },
  { name: "Coaster Set", price: "₹599" },
];

export default function Shop() {
  return (
    <section id="shop" className="shop">
      <h2>Shop</h2>
      <div className="products">
        {products.map((p, i) => (
          <div key={i} className="card">
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}