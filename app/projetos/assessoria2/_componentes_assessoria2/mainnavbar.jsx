"use client";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Link from "next/link";
import "./mainnavbar.scss";

export default function MainNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="#" className="nav-link">
              Início
            </Nav.Link>
            <Nav.Link as={Link} href="#about" className="nav-link">
              Sobre Nós
            </Nav.Link>
            <Nav.Link as={Link} href="#services" className="nav-link">
              Serviços
            </Nav.Link>
          </Nav>
          <Navbar.Brand className="logo-container" href="#home">
            <img src="/logo.svg" alt="Logo Alvo Estratégico" className="logo" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} href="#portfolio" className="nav-link">
              Portfólio
            </Nav.Link>
            <Nav.Link as={Link} href="#contact" className="nav-link">
              Contato
            </Nav.Link>
            <Button variant="warning" className="cta-btn">
              Solicitar Proposta
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
