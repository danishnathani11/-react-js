import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Designer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Best quality glasses I have ever purchased. The fit is perfect and the design is stunning!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Photographer',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Amazing customer service and fast delivery. The sunglasses are exactly what I was looking for.',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Business Owner',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Highly recommend! The collection is diverse and prices are very reasonable for the quality.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
          <p className="text-muted">Read reviews from our satisfied customers</p>
        </div>
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-warning fill-warning" />
                    ))}
                  </div>
                  <Card.Text className="mb-4 fst-italic">"{testimonial.text}"</Card.Text>
                  <Card.Title className="fw-bold h6 mb-1">{testimonial.name}</Card.Title>
                  <Card.Text className="text-muted small">{testimonial.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
