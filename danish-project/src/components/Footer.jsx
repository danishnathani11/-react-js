import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="g-4">
          <Col md={3}>
            <h5 className="fw-bold mb-3">Chasmish</h5>
            <p className="text-white-50">
              Your trusted destination for premium eyewear. Quality, style, and comfort in every pair.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#facebook" className="text-white-50 hover-text-white">
                <Facebook size={20} />
              </a>
              <a href="#twitter" className="text-white-50 hover-text-white">
                <Twitter size={20} />
              </a>
              <a href="#instagram" className="text-white-50 hover-text-white">
                <Instagram size={20} />
              </a>
              <a href="#youtube" className="text-white-50 hover-text-white">
                <Youtube size={20} />
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-white-50 text-decoration-none hover-text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#shop" className="text-white-50 text-decoration-none hover-text-white">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#collections" className="text-white-50 text-decoration-none hover-text-white">Collections</a>
              </li>
              <li className="mb-2">
                <a href="#blog" className="text-white-50 text-decoration-none hover-text-white">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50 text-decoration-none hover-text-white">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold mb-3">Customer Service</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#faq" className="text-white-50 text-decoration-none hover-text-white">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#shipping" className="text-white-50 text-decoration-none hover-text-white">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#returns" className="text-white-50 text-decoration-none hover-text-white">Returns</a>
              </li>
              <li className="mb-2">
                <a href="#warranty" className="text-white-50 text-decoration-none hover-text-white">Warranty</a>
              </li>
              <li className="mb-2">
                <a href="#privacy" className="text-white-50 text-decoration-none hover-text-white">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex gap-2 text-white-50">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Fashion Street, NY 10001, USA</span>
              </li>
              <li className="mb-3 d-flex gap-2 text-white-50">
                <Phone size={18} className="flex-shrink-0" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="mb-3 d-flex gap-2 text-white-50">
                <Mail size={18} className="flex-shrink-0" />
                <span>info@chasmish.com</span>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <Row>
          <Col className="text-center text-white-50">
            <p className="mb-0">2024 Chasmish. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
