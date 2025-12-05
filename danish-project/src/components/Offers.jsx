import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Tag, Gift, Truck } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                  <Tag className="text-primary" size={32} />
                </div>
              </div>
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Special Discount</Card.Title>
                <Card.Text className="text-muted">
                  Get up to 30% off on selected eyewear collections
                </Card.Text>
                <Button variant="outline-primary" size="sm">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-success bg-opacity-10 rounded-circle p-3">
                  <Truck className="text-success" size={32} />
                </div>
              </div>
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Free Shipping</Card.Title>
                <Card.Text className="text-muted">
                  Free delivery on orders above $100
                </Card.Text>
                <Button variant="outline-success" size="sm">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <div className="d-flex justify-content-center mb-3">
                <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                  <Gift className="text-danger" size={32} />
                </div>
              </div>
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Gift Vouchers</Card.Title>
                <Card.Text className="text-muted">
                  Perfect gift for your loved ones
                </Card.Text>
                <Button variant="outline-danger" size="sm">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
