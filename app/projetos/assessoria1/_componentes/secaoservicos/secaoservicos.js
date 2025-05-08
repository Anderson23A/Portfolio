import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Servico from "./servico";
import "./secaoservicos.scss";

export default function SecaoServicos() {
  return (
    <section className="secao-servicos">
      <Container>
        <div className="titulo">
          <p>serviços</p>
          <h2>texto texto texto</h2>
        </div>
        <div className="lista-servicos">
          <Row>
            <Col md={6} lg={6} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico />
              </div>
            </Col>
            {/*  */}
            <Col md={6} lg={6} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico />
              </div>
            </Col>
            {/*  */}
            <Col md={6} lg={6} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico />
              </div>
            </Col>
            {/*  */}
            <Col md={6} lg={6} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
