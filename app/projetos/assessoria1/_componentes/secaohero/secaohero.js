import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CTAButton from "./ctabutton";
import "./secaohero.scss";

export default function SecaoHero() {
  return (
    <section className="secao-hero">
      <Container>
        <Row>
          <Col md>
            <div className="conteudo-wrapper">
              <div className="conteudo">
                <h1>texto texto texto texto texto</h1>
                <p>texto texto textotexto texto texto texto texto texto</p>
                <CTAButton />
              </div>
            </div>
          </Col>
          <Col md>
            <div className="imagem-placeholder"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
