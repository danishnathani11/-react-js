import { Container, Row, Col, Card } from 'react-bootstrap';
import { Droplets, Sparkles, Shield, Paintbrush, Wind, Car } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const ServicesContent = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Exterior Wash',
      description: 'Premium hand wash with high-quality products for a spotless finish.',
      price: 'From $49',
    },
    {
      icon: Sparkles,
      title: 'Interior Detailing',
      description: 'Deep cleaning of interior surfaces, upholstery, and carpets.',
      price: 'From $89',
    },
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description: 'Long-lasting protection with premium ceramic coating technology.',
      price: 'From $599',
    },
    {
      icon: Paintbrush,
      title: 'Paint Correction',
      description: 'Professional paint restoration to remove scratches and swirls.',
      price: 'From $399',
    },
    {
      icon: Wind,
      title: 'Engine Bay Cleaning',
      description: 'Thorough cleaning and detailing of your engine compartment.',
      price: 'From $79',
    },
    {
      icon: Car,
      title: 'Full Detailing',
      description: 'Complete interior and exterior detailing package.',
      price: 'From $249',
    },
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">OUR SERVICES</span>
          <h2 className="display-5 fw-bold mb-3">What We Offer</h2>
          <p className="text-muted">
            Professional car detailing services tailored to your needs
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="service-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="service-icon bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <service.icon size={32} className="text-warning" />
                  </div>
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-muted mb-3">{service.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-warning fw-bold">{service.price}</span>
                    <a href="#booking" className="text-dark text-decoration-none fw-bold">
                      Book Now →
                    </a>
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

const Services = withScrollAnimation(ServicesContent);
export default Services;
