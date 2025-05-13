"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import navitems from "./items";
import logoIMG from "../../../../../public/imagens/assessoria3/logo.png";
import "./mainnavbar.scss";
import Image from "next/image";

export default function MainNavbar() {
  const [navFixa, setNavFixa] = useState(false);

  useEffect(() => {
    const alterarNavbar = () => {
      if (window.scrollY > 50) {
        setNavFixa(true);
      } else {
        setNavFixa(false);
      }
    };

    window.addEventListener("scroll", alterarNavbar);
    return () => window.removeEventListener("scroll", alterarNavbar);
  }, []);

  return (
    <Navbar
      expand="lg"
      // fixed="top"
      sticky="top"
      className={`navbar-principal ${navFixa ? "navbar-fixa" : ""}`}
    >
      <Container>
        <div className="logo">
          <div className="imagem-logo">
            <Image src={logoIMG} alt="" width={100} height={100} />
          </div>
        </div>

        <Navbar.Toggle
          aria-controls="menu-principal"
          className="botao-toggle"
        />
        <Navbar.Collapse id="menu-principal" className="menu-principal">
          <Nav className="ms-auto">
            {navitems.map((item, index) => (
              <Nav.Link key={index} href={item["link"]} className="link-menu">
                {item["nome"]}
              </Nav.Link>
            ))}

            <Button className="botao-cta">Fale Conosco</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
