import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🎥 Hackflix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-pelis" />
        <Navbar.Collapse id="navbar-pelis">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/populares">
              Populares
            </Nav.Link>
            <Nav.Link as={Link} to="/favoritas">
              Favoritas
            </Nav.Link>
            <Nav.Link as={Link} to="/buscar">
              Buscar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MovieNavbar;
