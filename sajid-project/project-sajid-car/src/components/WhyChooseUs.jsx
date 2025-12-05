import { Container, Row, Col } from 'react-bootstrap';
import { Shield, Users, Award, DollarSign, Clock, ThumbsUp } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const WhyChooseUsContent = () => {
  const features = [
    {
      icon: Shield,
      title: 'Premium Products',
      description: 'We use only the highest quality detailing products from trusted brands.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in car detailing.',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guaranteed or your money back.',
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Competitive rates with transparent pricing and no hidden fees.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast service without compromising on quality.',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: '4.9/5 rating from over 500 happy customers.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">WHY CHOOSE US</span>
          <h2 className="display-5 fw-bold mb-3">What Makes Us Different</h2>
          <p className="text-muted">
            Reasons to trust us with your vehicle
          </p>
        </div>
        <Row>
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <div className="feature-box text-center p-4">
                <div className="feature-icon bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                  <feature.icon size={40} className="text-warning" />
                </div>
                <h4 className="fw-bold mb-3">{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const WhyChooseUs = withScrollAnimation(WhyChooseUsContent);
export default WhyChooseUs;
