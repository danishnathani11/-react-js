import { Container, Row, Col, Card } from 'react-bootstrap';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const ContactContent = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Detailing Street', 'Los Angeles, CA 90001'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@eluxen.com', 'support@eluxen.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 8:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">CONTACT US</span>
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="text-muted">
            We're here to answer any questions you may have
          </p>
        </div>
        <Row>
          {contactInfo.map((info, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card className="contact-card h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="contact-icon bg-warning bg-opacity-10 rounded-circle d-inline-flex p-3 mb-3">
                    <info.icon size={32} className="text-warning" />
                  </div>
                  <h5 className="fw-bold mb-3">{info.title}</h5>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted mb-1">
                      {detail}
                    </p>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="map-container rounded overflow-hidden shadow">
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#e0e0e0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div className="text-center text-muted">
                  <MapPin size={48} className="mb-3" />
                  <p>Map Integration Available</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Contact = withScrollAnimation(ContactContent);
export default Contact;
