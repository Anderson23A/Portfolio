import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaoconquista.scss";

export default function SecaoConquista() {
  return (
    <section className="achievements-section">
      <Container>
        <h2 className="section-title text-center">
          Nossos Resultados Falam por Nós
        </h2>
        <Row className="mt-4">
          <Col md={6} lg={3} className="mb-4">
            <div className="achievement-card">
              {/* Placeholder para ícone */}
              <div className="icon-placeholder" aria-hidden="true"></div>
              <p className="achievement-text">
                +2.000 projetos entregues com sucesso
              </p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="achievement-card">
              <div className="icon-placeholder" aria-hidden="true"></div>
              <p className="achievement-text">Presença em +10 países</p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="achievement-card">
              <div className="icon-placeholder" aria-hidden="true"></div>
              <p className="achievement-text">
                Equipe com +50 especialistas certificados
              </p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="achievement-card">
              <div className="icon-placeholder" aria-hidden="true"></div>
              <p className="achievement-text">+15 anos de atuação no mercado</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
