import { Container, Row, Col } from 'react-bootstrap';
import { Calendar, Car, Sparkles, CheckCircle } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const ProcessContent = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Book Online',
      description: 'Choose your service and schedule a convenient time through our easy booking system.',
      step: '01',
    },
    {
      icon: Car,
      title: 'Drop Off / Pick Up',
      description: 'Bring your car to our facility or we can pick it up from your location.',
      step: '02',
    },
    {
      icon: Sparkles,
      title: 'Professional Service',
      description: 'Our expert team performs detailed work using premium products and techniques.',
      step: '03',
    },
    {
      icon: CheckCircle,
      title: 'Quality Check',
      description: 'Thorough inspection to ensure perfect results before delivery.',
      step: '04',
    },
  ];

  return (
    <section id="process" className="py-5 bg-dark text-white">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">HOW IT WORKS</span>
          <h2 className="display-5 fw-bold mb-3">Our Simple Process</h2>
          <p className="text-white-50">
            Four easy steps to a perfectly detailed vehicle
          </p>
        </div>
        <Row>
          {steps.map((step, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <div className="process-step text-center position-relative">
                <div className="step-number text-warning opacity-25 fw-bold" style={{ fontSize: '80px' }}>
                  {step.step}
                </div>
                <div className="mt-n5 position-relative">
                  <div className="bg-warning rounded-circle d-inline-flex p-3 mb-3">
                    <step.icon size={32} className="text-dark" />
                  </div>
                  <h4 className="fw-bold mb-3">{step.title}</h4>
                  <p className="text-white-50">{step.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Process = withScrollAnimation(ProcessContent);
export default Process;
