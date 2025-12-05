import React from "react";

const reviews = [
  { id: 1, name: "Rohit", text: "Very good quality and fast delivery." },
  { id: 2, name: "Meera", text: "Great fit and looks premium." },
  { id: 3, name: "Sahil", text: "Customer support was very helpful." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-dark">
      <div className="container">
        <h3 className="mb-3">What customers say</h3>
        <div className="row">
          {reviews.map(r => (
            <div key={r.id} className="col-md-4">
              <div className="testimonial">
                <p style={{marginBottom:8}}>"{r.text}"</p>
                <small style={{color:"#9fb0c8"}}>- {r.name}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
