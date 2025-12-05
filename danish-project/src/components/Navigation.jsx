import { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../hoc/withCart';

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          <span className="text-primary">Chasmish</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
          <Menu size={24} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={expanded}>
          <Nav className="me-auto ms-lg-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Shop" id="shop-dropdown">
              <NavDropdown.Item href="#men">Men's Glasses</NavDropdown.Item>
              <NavDropdown.Item href="#women">Women's Glasses</NavDropdown.Item>
              <NavDropdown.Item href="#sunglasses">Sunglasses</NavDropdown.Item>
              <NavDropdown.Item href="#kids">Kids' Glasses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#search">
              <Search size={20} />
            </Nav.Link>
            <Nav.Link href="#account">
              <User size={20} />
            </Nav.Link>
            <Nav.Link href="#cart" className="position-relative">
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-circle">
                  {getTotalItems()}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
