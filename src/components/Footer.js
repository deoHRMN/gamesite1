import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="gradient-background-footer text-dark py-3"> {/* Apply gradient background here */}
      <Container>
        <Row className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Game.io. All rights reserved.</p>
        </Row>
        <Row>
          <Nav className="me-auto d-flex justify-content-center">
            <Nav.Link href="#home" className="text-dark">Privacy Policy</Nav.Link>  {/* Black text */}
            <Nav.Link href="#link" className="text-dark">Terms of Service</Nav.Link> {/* Black text */}
            <Nav.Link href="#link" className="text-dark">Contact Us</Nav.Link>      {/* Black text */}
          </Nav>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
