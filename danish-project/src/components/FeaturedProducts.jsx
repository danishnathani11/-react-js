import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useCart } from '../hoc/withCart';

const products = [
  {
    id: 1,
    name: 'Classic Aviator',
    price: 129.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Vintage Round',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Modern Square',
    price: 139.99,
    image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    badge: 'Sale',
  },
  {
    id: 4,
    name: 'Cat Eye Deluxe',
    price: 159.99,
    image: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    badge: 'Trending',
  },
  {
    id: 5,
    name: 'Sport Performance',
    price: 179.99,
    image: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    badge: 'New',
  },
  {
    id: 6,
    name: 'Designer Chic',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    badge: 'Premium',
  },
  {
    id: 7,
    name: 'Minimal Style',
    price: 119.99,
    image: 'https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    badge: 'Best Value',
  },
  {
    id: 8,
    name: 'Bold Statement',
    price: 169.99,
    image: 'https://images.pexels.com/photos/1627639/pexels-photo-1627639.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    badge: 'Hot',
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
          <p className="text-muted">Handpicked selection of our most popular eyewear</p>
        </div>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} sm={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm position-relative product-card">
                {product.badge && (
                  <Badge
                    bg={product.badge === 'Sale' ? 'danger' : 'primary'}
                    className="position-absolute top-0 start-0 m-3"
                  >
                    {product.badge}
                  </Badge>
                )}
                <div className="position-relative overflow-hidden" style={{ height: '250px' }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                  <div className="product-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-2">
                    <Button variant="light" size="sm" className="rounded-circle p-2">
                      <Heart size={18} />
                    </Button>
                    <Button variant="light" size="sm" className="rounded-circle p-2">
                      <Eye size={18} />
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">{product.name}</Card.Title>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-warning me-2">
                      {'★'.repeat(Math.floor(product.rating))}
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <small className="text-muted">({product.rating})</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary fs-5">${product.price}</span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={16} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
