import { Container, Row, Col, Card } from 'react-bootstrap';

const categories = [
  {
    id: 1,
    title: "Men's Eyewear",
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Bold and sophisticated designs',
  },
  {
    id: 2,
    title: "Women's Eyewear",
    image: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elegant and fashionable styles',
  },
  {
    id: 3,
    title: 'Sunglasses',
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'UV protection meets style',
  },
  {
    id: 4,
    title: "Kids' Eyewear",
    image: 'https://images.pexels.com/photos/5765828/pexels-photo-5765828.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Durable and fun designs',
  },
];

export default function Categories() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Shop by Category</h2>
          <p className="text-muted">Find the perfect eyewear for every style and occasion</p>
        </div>
        <Row className="g-4">
          {categories.map((category) => (
            <Col key={category.id} md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm hover-lift" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
                <div className="overflow-hidden" style={{ height: '250px' }}>
                  <Card.Img
                    variant="top"
                    src={category.image}
                    style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    className="hover-zoom"
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{category.title}</Card.Title>
                  <Card.Text className="text-muted">{category.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
