import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BotaoCTA from "./botaocta";
import "./secaohero.scss";

export default function SecaoHero() {
  return (
    <section className="secao-hero">
      <Container className="h-100">
        <Row className="h-100">
          <Col
            md
            className="coluna-texto d-flex justify-content-center align-items-center h-100"
          >
            <div className="conteudo-texto">
              <h1>
                Texto texto texto Texto texto texto{" "}
                <span className="bold-texto">Texto texto texto</span>
              </h1>
              <p>
                Texto texto texto Texto texto texto Texto texto texto Texto
                texto texto Texto texto texto Texto texto texto
              </p>
              <BotaoCTA />
            </div>
          </Col>
          <Col
            md
            className="coluna-imagem d-flex justify-content-center align-items-center"
          >
            <div className="imagem-placeholder"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
