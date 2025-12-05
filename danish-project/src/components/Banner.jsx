import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Banner() {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Summer Collection"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6} className="text-white mt-4 mt-lg-0">
            <h2 className="display-4 fw-bold mb-4">Summer Collection 2024</h2>
            <p className="lead mb-4">
              Discover our latest summer eyewear collection featuring vibrant colors and trendy designs. Limited time offer - up to 40% off!
            </p>
            <div className="d-flex gap-3">
              <Button variant="light" size="lg">
                Explore Collection
              </Button>
              <Button variant="outline-light" size="lg">
                View Details
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
