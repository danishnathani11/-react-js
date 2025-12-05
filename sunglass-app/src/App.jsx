import React from "react";
import NavBar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Features from "./components/features.jsx";
import Products from "./components/products.jsx";
import Gallery from "./components/gallery.jsx";
import Testimonials from "./components/testimonials.jsx";
import About from "./components/about.jsx";
import Services from "./components/service.jsx";
import FAQ from "./components/faq.jsx";
import Blog from "./components/blog.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

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
