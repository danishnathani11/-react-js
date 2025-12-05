import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="#home">Chasmish Shop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMain">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
            <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
