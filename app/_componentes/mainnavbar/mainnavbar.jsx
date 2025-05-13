"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./mainnavbar.scss";
import items from "./items";

export default function MainNavbar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/Portfolio">
            <div className="logo-placeholder"></div>
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
