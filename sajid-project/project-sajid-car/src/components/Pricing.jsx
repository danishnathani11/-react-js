import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Check } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const PricingContent = () => {
  const plans = [
    {
      name: 'Basic',
      price: '79',
      period: 'per service',
      popular: false,
      features: [
        'Exterior Hand Wash',
        'Tire & Wheel Cleaning',
        'Window Cleaning',
        'Basic Interior Vacuum',
        'Dashboard Wipe Down',
      ],
    },
    {
      name: 'Premium',
      price: '149',
      period: 'per service',
      popular: true,
      features: [
        'Everything in Basic',
        'Interior Deep Cleaning',
        'Leather Treatment',
        'Paint Sealant',
        'Engine Bay Cleaning',
        'Headlight Restoration',
      ],
    },
    {
      name: 'Ultimate',
      price: '299',
      period: 'per service',
      popular: false,
      features: [
        'Everything in Premium',
        'Paint Correction (1-Step)',
        'Ceramic Coating Application',
        'Undercarriage Wash',
        'Odor Elimination',
        'Free Pick-up & Delivery',
        '6-Month Protection',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">PRICING PLANS</span>
          <h2 className="display-5 fw-bold mb-3">Choose Your Package</h2>
          <p className="text-muted">
            Flexible pricing options to suit every need and budget
          </p>
        </div>
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className={`pricing-card h-100 border-0 shadow ${plan.popular ? 'border-warning border-3' : ''}`}>
                {plan.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-warning text-dark px-3 py-2">POPULAR</span>
                  </div>
                )}
                <Card.Body className="p-4 text-center">
                  <h3 className="fw-bold mb-3">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">${plan.price}</span>
                    <span className="text-muted">/{plan.period}</span>
                  </div>
                  <ListGroup variant="flush" className="mb-4">
                    {plan.features.map((feature, idx) => (
                      <ListGroup.Item key={idx} className="border-0 py-2">
                        <Check size={20} className="text-warning me-2" />
                        {feature}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <Button
                    variant={plan.popular ? 'warning' : 'outline-dark'}
                    size="lg"
                    className="w-100"
                    href="#booking"
                  >
                    Choose Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Pricing = withScrollAnimation(PricingContent);
export default Pricing;
