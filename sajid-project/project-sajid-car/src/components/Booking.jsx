import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Calendar, Clock, Car, User, Mail, Phone } from 'lucide-react';
import withScrollAnimation from '../hoc/withScrollAnimation';

const BookingContent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    vehicle: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-5 bg-dark text-white">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">BOOK NOW</span>
          <h2 className="display-5 fw-bold mb-3">Schedule Your Service</h2>
          <p className="text-white-50">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            {submitted && (
              <Alert variant="success" className="mb-4">
                Thank you! Your booking request has been received. We'll contact you soon.
              </Alert>
            )}
            <Form onSubmit={handleSubmit} className="booking-form">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      <User size={18} className="me-2" />
                      Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      <Mail size={18} className="me-2" />
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      <Phone size={18} className="me-2" />
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 123-4567"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      <Car size={18} className="me-2" />
                      Vehicle Type
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Toyota Camry 2020"
                    />
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>Select Service</Form.Label>
                    <Form.Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a service...</option>
                      <option value="basic">Basic Package - $79</option>
                      <option value="premium">Premium Package - $149</option>
                      <option value="ultimate">Ultimate Package - $299</option>
                      <option value="exterior">Exterior Wash - $49</option>
                      <option value="interior">Interior Detailing - $89</option>
                      <option value="ceramic">Ceramic Coating - $599</option>
                      <option value="correction">Paint Correction - $399</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      <Calendar size={18} className="me-2" />
                      Preferred Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group>
                    <Form.Label>
                      <Clock size={18} className="me-2" />
                      Preferred Time
                    </Form.Label>
                    <Form.Select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a time...</option>
                      <option value="8:00">8:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12} className="mb-3">
                  <Form.Group>
                    <Form.Label>Additional Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or concerns?"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="warning" size="lg" type="submit" className="w-100 mt-3">
                Submit Booking Request
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Booking = withScrollAnimation(BookingContent);
export default Booking;
