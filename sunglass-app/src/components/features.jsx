import React from "react";

export default function Features() {
  const items = [
    { id: 1, title: "Lightweight", desc: "Featherweight frames for all day comfort" },
    { id: 2, title: "UV Protection", desc: "Complete UVA/UVB protection" },
    { id: 3, title: "Warranty", desc: "12 months manufacturer warranty" }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <h3 className="mb-4">Why choose our glasses</h3>
        <div className="row">
          {items.map(it => (
            <div key={it.id} className="col-md-4">
              <div className="card p-3 mb-3">
                <h5>{it.title}</h5>
                <p className="text-muted">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
