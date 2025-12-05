import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'How to Choose the Perfect Glasses for Your Face Shape',
    excerpt: 'Discover the best eyewear styles that complement your unique facial features...',
    image: 'https://images.pexels.com/photos/1549193/pexels-photo-1549193.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Jessica Miller',
    date: 'Nov 25, 2024',
  },
  {
    id: 2,
    title: 'Top 10 Sunglasses Trends for Summer 2024',
    excerpt: 'Stay ahead of the fashion curve with these hot sunglasses trends this season...',
    image: 'https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'David Lee',
    date: 'Nov 22, 2024',
  },
  {
    id: 3,
    title: 'Eye Care Tips: Protecting Your Vision Daily',
    excerpt: 'Essential tips and practices to maintain healthy eyesight and prevent strain...',
    image: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=600',
    author: 'Dr. Sarah Brown',
    date: 'Nov 20, 2024',
  },
];

export default function Blog() {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Latest from Our Blog</h2>
          <p className="text-muted">Tips, trends, and insights about eyewear and eye care</p>
        </div>
        <Row className="g-4">
          {posts.map((post) => (
            <Col key={post.id} md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <div className="overflow-hidden" style={{ height: '220px' }}>
                  <Card.Img
                    variant="top"
                    src={post.image}
                    style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    className="hover-zoom"
                  />
                </div>
                <Card.Body>
                  <div className="d-flex gap-3 mb-3 text-muted small">
                    <span className="d-flex align-items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                    <span className="d-flex align-items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  <Card.Title className="fw-bold h5 mb-3">{post.title}</Card.Title>
                  <Card.Text className="text-muted">{post.excerpt}</Card.Text>
                  <Button variant="link" className="p-0 text-decoration-none">
                    Read More <ArrowRight size={16} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
