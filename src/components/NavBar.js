import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home">
        GAME OF<br />THRONES
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#characters">Characters</Nav.Link>
          <Nav.Link href="#dragons">Dragons</Nav.Link>
          <Nav.Link href="#kingdoms">Kingdoms</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
