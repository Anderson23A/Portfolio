"use client";
import { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Image from "next/image";
import logoIMG from "../../../../../public/imagens/assessoria2/logo.png";
import Link from "next/link";
import "./mainnavbar.scss";

export default function MainNavbar() {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 992px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    const handleResize = () => setIsDesktop(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isDesktop ? (
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
            <Image
              src={logoIMG}
              alt="Logo Alvo Estratégico"
              className="logo"
              width={100}
              height={100}
            />
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
  ) : (
    <Navbar expand="lg" sticky="top" className="navbar-custom">
      <Container className="">
        <Navbar.Brand className="logo-container" href="#home">
          <Image
            src={logoIMG}
            alt="Logo Alvo Estratégico"
            className="logo"
            width={100}
            height={100}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} href="#" className="nav-link">
              Início
            </Nav.Link>
            <Nav.Link as={Link} href="#about" className="nav-link">
              Sobre Nós
            </Nav.Link>
            <Nav.Link as={Link} href="#services" className="nav-link">
              Serviços
            </Nav.Link>
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
