import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import "./secaofooter.scss";

export default function SecaoFooter() {
  return (
    <footer className="secao-footer">
      <Container>
        <Row>
          <Col md>
            <div className="footer-col-identidade">
              <div className="logo"></div>
              <div className="texto">
                <p>texto texto texto texto</p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="footer-col-navegacao">
              <h4>Links rápidos</h4>
              <ul>
                <li>
                  <Link href="#">link1</Link>
                </li>
                <li>
                  <Link href="#">link2</Link>
                </li>
                <li>
                  <Link href="#">link3</Link>
                </li>
                <li>
                  <Link href="#">link4</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md>
            <div className="footer-col-contato">
              <h4>contato</h4>
              <ul>
                <li>
                  <p>texto texto</p>
                </li>
                <li>
                  <p>texto texto</p>
                </li>
                <li>
                  <p>texto texto</p>
                </li>
                <li>
                  <p>texto texto</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md>
            <div className="footer-col-sociais">
              <h4>Redes sociais</h4>
              <div className="redes">
                <div className="rede-social">
                  <div className="icone"></div>
                </div>
                <div className="rede-social">
                  <div className="icone"></div>
                </div>
                <div className="rede-social">
                  <div className="icone"></div>
                </div>
                <div className="rede-social">
                  <div className="icone"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
