import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star, Quote } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const TestimonialsContent = () => {
  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Business Owner',
      rating: 5,
      text: 'Absolutely amazing service! My car looks brand new. The attention to detail is incredible and the team is professional.',
      avatar: 'MJ',
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Manager',
      rating: 5,
      text: 'Best car detailing experience ever. The ceramic coating has kept my car looking pristine for months. Highly recommend!',
      avatar: 'SW',
    },
    {
      name: 'David Chen',
      role: 'Entrepreneur',
      rating: 5,
      text: 'The paint correction service exceeded my expectations. They removed all the swirl marks and my car shines like never before.',
      avatar: 'DC',
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">TESTIMONIALS</span>
          <h2 className="display-5 fw-bold mb-3">What Our Clients Say</h2>
          <p className="text-muted">
            Real feedback from satisfied customers
          </p>
        </div>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <Quote size={40} className="text-warning mb-3" />
                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#ffc107" color="#ffc107" />
                    ))}
                  </div>
                  <p className="text-muted mb-4">{testimonial.text}</p>
                  <div className="d-flex align-items-center">
                    <div
                      className="avatar bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                      style={{ width: '50px', height: '50px' }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Testimonials = withScrollAnimation(TestimonialsContent);
export default Testimonials;
