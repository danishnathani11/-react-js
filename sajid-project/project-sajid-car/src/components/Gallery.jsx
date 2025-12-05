import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import withScrollAnimation from '../hoc/withScrollAnimation';

const GalleryContent = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'exterior', 'interior', 'ceramic', 'correction'];

  const galleryItems = [
    { id: 1, category: 'exterior', color: '#1a1a1a' },
    { id: 2, category: 'interior', color: '#2d2d2d' },
    { id: 3, category: 'ceramic', color: '#404040' },
    { id: 4, category: 'correction', color: '#1a1a1a' },
    { id: 5, category: 'exterior', color: '#2d2d2d' },
    { id: 6, category: 'interior', color: '#404040' },
    { id: 7, category: 'ceramic', color: '#1a1a1a' },
    { id: 8, category: 'correction', color: '#2d2d2d' },
    { id: 9, category: 'exterior', color: '#404040' },
  ];

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <span className="text-warning fw-bold mb-2 d-block">GALLERY</span>
          <h2 className="display-5 fw-bold mb-3">Our Recent Work</h2>
          <p className="text-muted mb-4">
            See the transformation we bring to every vehicle
          </p>
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? 'warning' : 'outline-dark'}
                onClick={() => setFilter(cat)}
                className="text-capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
        <Row>
          {filteredItems.map((item) => (
            <Col lg={4} md={6} key={item.id} className="mb-4">
              <div
                className="gallery-item rounded overflow-hidden shadow"
                style={{
                  backgroundColor: item.color,
                  height: '300px',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div className="text-white text-center">
                    <h5 className="text-capitalize">{item.category} Detailing</h5>
                    <p className="small">View Details</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Gallery = withScrollAnimation(GalleryContent);
export default Gallery;
