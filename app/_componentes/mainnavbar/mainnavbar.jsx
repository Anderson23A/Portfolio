"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logoIMG from "../../../public/imagens/logo.png";
import Image from "next/image";
import "./mainnavbar.scss";
import items from "./items";

export default function MainNavbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/Portfolio">
            <div className="logo-placeholder">
              <Image src={logoIMG} alt="logo" width={100} height={100} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="icon-menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {items.map((item, index) => (
                <Nav.Link key={index} href={item["link"]}>
                  {item["nome"]}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
