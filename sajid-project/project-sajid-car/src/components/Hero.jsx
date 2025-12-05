import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="mb-3">
              <span className="badge bg-warning text-dark px-3 py-2">
                Premium Car Detailing
              </span>
            </div>
            <h1 className="display-3 fw-bold mb-4 text-white">
              Luxury Car Care <br />
              <span className="text-warning">That Shines</span>
            </h1>
            <p className="lead text-white-50 mb-4">
              Experience the ultimate car detailing service with our expert team.
              We bring showroom shine to your vehicle with meticulous attention to detail.
            </p>
            <div className="d-flex gap-3 mb-4">
              <Button variant="warning" size="lg" href="#booking">
                Book Service <ArrowRight className="ms-2" size={20} />
              </Button>
              <Button variant="outline-light" size="lg" href="#services">
                Our Services
              </Button>
            </div>
            <div className="d-flex align-items-center gap-4 mt-5">
              <div className="d-flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} fill="#ffc107" color="#ffc107" />
                ))}
              </div>
              <div className="text-white">
                <strong>4.9/5</strong> from 500+ reviews
              </div>
            </div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
