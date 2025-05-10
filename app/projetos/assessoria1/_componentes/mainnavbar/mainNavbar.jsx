"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navitems from "./items";
import logoIMG from "../../../../../public/imagens/assessoria1/logo.png";
import Image from "next/image";
import "./mainNavbar.scss";

export default function MainNavbar() {
  const render_items = () => {
    const links = [];
    for (let i = 0; i < navitems.length; i += 1) {
      const cItem = navitems[i];
      links.push(
        <Nav.Link key={links.length} href={cItem["link"]}>
          <span>{cItem["nome"]}</span>
        </Nav.Link>
      );
    }
    return links;
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo-placeholder">
            <Image src={logoIMG} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className="icon-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{render_items()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
