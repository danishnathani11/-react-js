import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Products from "./components/Products.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import FAQ from "./components/FAQ.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Gallery />
        <Testimonials />
        <About />
        <Services />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
