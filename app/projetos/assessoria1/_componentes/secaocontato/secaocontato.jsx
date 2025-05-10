import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormContato from "./form";
import "./secaocontato.scss";

export default function SecaoContato() {
  return (
    <section className="secao-contato">
      <Container>
        <div className="titulo">
          <p>Fale conosco</p>
          <h2>texto texto texto</h2>
        </div>
        <div className="conteudo-contato">
          <Row>
            <Col md>
              <div className="form-container">
                <FormContato />
              </div>
            </Col>
            <Col md>
              <div className="cta-container">
                <div className="video-container"></div>
              </div>
              <div className="formas-contato">
                <Row>
                  <Col sm>
                    <div className="forma-contato">
                      <div className="icone"></div>
                      <div className="texto">
                        <p>texto texto texto texto</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm>
                    <div className="forma-contato">
                      <div className="icone"></div>
                      <div className="texto">
                        <p>texto texto texto texto</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
