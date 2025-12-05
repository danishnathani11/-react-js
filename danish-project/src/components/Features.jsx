import { Container, Row, Col } from 'react-bootstrap';
import { Shield, RefreshCw, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '100% authentic products with warranty',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy for all products',
  },
  {
    icon: Award,
    title: 'Premium Brands',
    description: 'Curated collection from top designers',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help you',
  },
];

export default function Features() {
  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Col key={index} sm={6} lg={3}>
                <div className="text-center">
                  <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3" style={{ width: '70px', height: '70px' }}>
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted small">{feature.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
