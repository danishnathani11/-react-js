import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container>
        <Row className="justify-content-center text-center text-white">
          <Col lg={8}>
            <div className="mb-4">
              <Mail size={48} className="mb-3" />
            </div>
            <h2 className="display-5 fw-bold mb-3">Subscribe to Our Newsletter</h2>
            <p className="lead mb-4">
              Get the latest updates on new products, exclusive offers, and eyewear trends delivered to your inbox.
            </p>
            <Form onSubmit={handleSubmit} className="d-flex gap-2 justify-content-center">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-auto flex-grow-1"
                style={{ maxWidth: '400px' }}
              />
              <Button variant="light" type="submit" className="px-4">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
