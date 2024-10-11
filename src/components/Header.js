import React from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

function Header({ setCurrentPage }) {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          Game.io
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('store')} style={{ cursor: 'pointer' }}>
              Store
            </Nav.Link>
            <NavDropdown title="Community" id="community-nav-dropdown">
              <NavDropdown.Item onClick={() => setCurrentPage('forums')}>
                Forums
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCurrentPage('modshop')}>
                ModShop
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" id="account-nav-dropdown">
              <NavDropdown.Item onClick={() => setCurrentPage('settings')}>
                Account Settings
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCurrentPage('signout')}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
