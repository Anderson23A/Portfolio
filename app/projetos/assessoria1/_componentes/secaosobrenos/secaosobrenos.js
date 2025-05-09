import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaosobrenos.scss";

export default function SecaoSobreNos() {
  return (
    <section className="secao-sobrenos">
      <Container>
        <div className="titulo">
          <p>sobre nós</p>
          <h2>texto texto texto</h2>
        </div>
        <div className="sobrenos-container">
          <Row>
            {/* imagem e cta col */}
            <Col className="d-flex justify-content-center">
              <div className="imagemcta-container">
                {/* imagem */}
                <div className="imagem-placeholder"></div>
              </div>
            </Col>
            {/*  */}
          </Row>
        </div>
      </Container>
    </section>
  );
}
