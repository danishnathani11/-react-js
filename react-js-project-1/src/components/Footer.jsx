import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div>© {new Date().getFullYear()} Chasmish-style Shop</div>
        <div>
          <a href="#privacy" className="mr-3">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
