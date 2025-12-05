import React from "react";

const list = [
  "Free shipping over ₹999",
  "Try-at-home available",
  "1-year warranty on frames",
  "Easy returns"
];

export default function Services() {
  return (
    <section id="services" className="section bg-dark">
      <div className="container">
        <h3 className="mb-3">Services</h3>
        <div className="row">
          {list.map((l, idx) => (
            <div key={idx} className="col-md-3 mb-2">
              <div className="card p-3">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
