import React from 'react';
import { Nav, NavDropdown, Navbar, Container, Form, Button } from 'react-bootstrap';
import './Header.css';  // Ensure you include the updated CSS file

function Header({ setCurrentPage }) {
  return (
    <Navbar expand="lg" className="navbar-gradient">
      <Container>
        <Navbar.Brand 
          onClick={() => setCurrentPage('home')} 
          style={{ cursor: 'pointer', fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}  // Black brand text
        >
          Game.io
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              onClick={() => setCurrentPage('home')} 
              style={{ cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}  // Black text
              className="nav-link-custom"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => setCurrentPage('store')} 
              style={{ cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}  // Black text
              className="nav-link-custom"
            >
              Store
            </Nav.Link>
            <NavDropdown 
              title="Community" 
              id="community-nav-dropdown" 
              className="dropdown-custom"
              style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}  // Black text for dropdown
            >
              <NavDropdown.Item onClick={() => setCurrentPage('forums')} className="dropdown-item-custom">
                Forums
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCurrentPage('modshop')} className="dropdown-item-custom">
                ModShop
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown 
              title="Account" 
              id="account-nav-dropdown" 
              className="dropdown-custom"
              style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}  // Black text for dropdown
            >
              <NavDropdown.Item onClick={() => setCurrentPage('settings')} className="dropdown-item-custom">
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCurrentPage('signout')} className="dropdown-item-custom">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
