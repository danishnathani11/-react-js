import React from "react";

// Hero section with CTA
export default function Hero() {
  return (
    <section id="home" className="section section-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="hero-title">Premium Glasses — Crafted for You</h1>
            <p className="hero-sub">Elegant frames, lightweight materials and modern design. Explore our curated collection.</p>
            <div>
              <a className="btn btn-primary mr-2" href="#products">Shop Now</a>
              <a className="btn btn-outline-light" href="#features">Learn More</a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div style={{ display: "flex", gap: 12 }}>
              <div className="card p-2" style={{ flex: 1 }}>
                <div className="product-image" style={{ backgroundImage: "url('https://picsum.photos/seed/214/600/400')" }} />
                <h5 style={{ marginTop: 10 }}>Aviator Classic</h5>
                <p style={{ color: "#9fb0c8", marginBottom: 8 }}>₹2,499</p>
              </div>
              <div className="card p-2" style={{ flex: 1 }}>
                <div className="product-image" style={{ backgroundImage: "url('https://picsum.photos/seed/215/600/400')" }} />
                <h5 style={{ marginTop: 10 }}>Slim Square</h5>
                <p style={{ color: "#9fb0c8", marginBottom: 8 }}>₹1,899</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
