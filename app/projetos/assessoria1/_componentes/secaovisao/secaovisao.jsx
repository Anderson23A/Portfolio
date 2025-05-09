import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaovisao.scss";

export default function SecaoVisao() {
  return (
    <section className="secao-visao">
      <Container>
        <div className="titulo">
          <p>Nossa visão</p>
          <h2>texto texto texto</h2>
        </div>
        <div className="items">
          <Row>
            <Col md={4} className="d-flex justify-content-center">
              <div className="item">
                <div className="icone-titulo">
                  <div className="icone"></div>
                  <div className="titulo-item">
                    <p>texto texto</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <div className="item">
                <div className="icone-titulo">
                  <div className="icone"></div>
                  <div className="titulo-item">
                    <p>texto texto</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <div className="item">
                <div className="icone-titulo">
                  <div className="icone"></div>
                  <div className="titulo-item">
                    <p>texto texto</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
