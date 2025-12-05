import React, { useState } from "react";

const sample = [
  { id: 101, name: "Aviator Classic", price: 2499, img: "https://picsum.photos/seed/p1/600/400" },
  { id: 102, name: "Round Vintage", price: 1999, img: "https://picsum.photos/seed/p2/600/400" },
  { id: 103, name: "Square Pro", price: 2899, img: "https://picsum.photos/seed/p3/600/400" },
  { id: 104, name: "Metal Edge", price: 1799, img: "https://picsum.photos/seed/p4/600/400" }
];

export default function Products() {
  const [query, setQuery] = useState("");
  const filtered = sample.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="products" className="section bg-dark">
      <div className="container">
        <h3 className="mb-3">Featured Products</h3>
        <div className="mb-3">
          <input className="form-control" placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>

        <div className="row">
          {filtered.map(p => (
            <div className="col-md-3 mb-3" key={p.id}>
              <div className="card p-2 h-100">
                <div className="product-image" style={{ backgroundImage: `url('${p.img}')` }} />
                <h6 style={{ marginTop: 10 }}>{p.name}</h6>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <strong>₹{p.price}</strong>
                  <a className="btn btn-sm btn-outline-light" href="#contact">Buy</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
