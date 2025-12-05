import { Container, Row, Col } from 'react-bootstrap';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const AboutContent = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: ThumbsUp, value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <div className="about-image-bg rounded shadow-lg"></div>
            </div>
          </Col>
          <Col lg={6}>
            <span className="text-warning fw-bold mb-2 d-block">ABOUT US</span>
            <h2 className="display-5 fw-bold mb-4">
              Premium Car Detailing <br />
              Since 2008
            </h2>
            <p className="text-muted mb-4">
              ELUXEN is a premier car detailing service dedicated to providing exceptional
              care for your vehicle. Our team of certified professionals uses the latest
              techniques and premium products to ensure your car looks its absolute best.
            </p>
            <p className="text-muted mb-4">
              From exterior detailing and paint correction to interior deep cleaning and
              ceramic coating, we offer comprehensive solutions tailored to your needs.
            </p>
            <Row className="mt-5">
              {stats.map((stat, index) => (
                <Col xs={6} md={3} key={index} className="mb-4">
                  <div className="text-center">
                    <stat.icon size={40} className="text-warning mb-3" />
                    <h3 className="fw-bold mb-1">{stat.value}</h3>
                    <p className="text-muted small mb-0">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const About = withScrollAnimation(AboutContent);
export default About;
