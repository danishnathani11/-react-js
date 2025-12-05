import React from "react";

const pics = Array.from({length:8}).map((_,i) => `https://picsum.photos/seed/gallery${i}/400/400`);

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h3 className="mb-3">Gallery</h3>
        <div className="gallery-grid">
          {pics.map((u,idx) => (
            <div key={idx} className="card">
              <img src={u} style={{width: "100%", height: 140, objectFit: "cover"}} alt={`gallery-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
