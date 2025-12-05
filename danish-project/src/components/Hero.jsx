import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6} className="text-white">
            <h1 className="display-3 fw-bold mb-4">
              See the World Differently
            </h1>
            <p className="lead mb-4">
              Discover our exclusive collection of premium eyewear designed for style and comfort. Find your perfect pair today.
            </p>
            <div className="d-flex gap-3">
              <Button variant="light" size="lg" className="px-4">
                Shop Now <ArrowRight className="ms-2" size={20} />
              </Button>
              <Button variant="outline-light" size="lg" className="px-4">
                View Collection
              </Button>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="position-relative">
              <img
                src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Glasses Collection"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
