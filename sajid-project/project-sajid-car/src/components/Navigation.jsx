import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Phone, Clock } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="top-bar bg-dark text-white py-2 d-none d-lg-block">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-4">
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Clock size={16} />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="text-white me-3">Facebook</a>
              <a href="#" className="text-white me-3">Instagram</a>
              <a href="#" className="text-white">Twitter</a>
            </div>
          </div>
        </Container>
      </div>

      <Navbar
        expand="lg"
        className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
        fixed="top"
        style={{ top: scrolled ? '0' : '42px' }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-warning fs-3">
            ELUXEN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#process">Process</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="warning" className="ms-lg-3" href="#booking">
                Book Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
