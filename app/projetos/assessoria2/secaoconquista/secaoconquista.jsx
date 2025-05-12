import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaoconquista.scss";
import {
  CalendarioSVG,
  ChapeuGraduacaoSVG,
  CheckMarkSVG,
  GloboSVG,
} from "../_componentes_assessoria2/svgs/svgs";

export default function SecaoConquista() {
  return (
    <section className="secao-conquistas">
      <Container>
        <h2 className="titulo-secao text-center">
          Nossos Resultados Falam por Nós
        </h2>
        <Row className="mt-4">
          <Col md={6} lg={3} className="mb-4">
            <div className="cartao-conquista">
              <div className="icone-placeholder" aria-hidden="true">
                <CheckMarkSVG />
              </div>
              <p className="texto-conquista">
                +2.000 projetos entregues com sucesso
              </p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="cartao-conquista">
              <div className="icone-placeholder" aria-hidden="true">
                <GloboSVG />
              </div>
              <p className="texto-conquista">Presença em +10 países</p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="cartao-conquista">
              <div className="icone-placeholder" aria-hidden="true">
                <ChapeuGraduacaoSVG />
              </div>
              <p className="texto-conquista">
                Equipe com +50 especialistas certificados
              </p>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <div className="cartao-conquista">
              <div className="icone-placeholder" aria-hidden="true">
                <CalendarioSVG />
              </div>
              <p className="texto-conquista">+15 anos de atuação no mercado</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
