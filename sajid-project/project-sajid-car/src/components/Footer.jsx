import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <Container>
        <Row className="pb-4">
          <Col lg={4} md={6} className="mb-4">
            <h3 className="text-warning fw-bold mb-3">ELUXEN</h3>
            <p className="text-white-50 mb-4">
              Premium car detailing services that bring showroom shine to your vehicle.
              Excellence in every detail since 2008.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="#" className="text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white-50 text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white-50 text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-white-50 text-decoration-none">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50 text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Exterior Detailing
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Interior Cleaning
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Ceramic Coating
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Paint Correction
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Full Detailing
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <MapPin size={20} className="text-warning me-2 mt-1" />
                <span className="text-white-50">
                  123 Detailing Street<br />Los Angeles, CA 90001
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Phone size={20} className="text-warning me-2" />
                <span className="text-white-50">+1 (555) 123-4567</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Mail size={20} className="text-warning me-2" />
                <span className="text-white-50">info@eluxen.com</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="border-top border-secondary py-4">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
              <p className="text-white-50 mb-0">
                &copy; 2024 ELUXEN. All rights reserved.
              </p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <a href="#" className="text-white-50 text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                Terms of Service
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
