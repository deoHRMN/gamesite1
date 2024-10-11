import React from 'react';
import { Container, Row, Nav} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Game.io. All rights reserved.</p>
        </Row>
        <Row>
        <Nav className="me-auto d-flex justify-content-center">
                <Nav.Link href="#home" className="text-white">Privacy Policy</Nav.Link>
                <Nav.Link href="#link" className="text-white">Terms of Service</Nav.Link>
                <Nav.Link href="#link" className="text-white">Contact Us</Nav.Link>
        </Nav>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
