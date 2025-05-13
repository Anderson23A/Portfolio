import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "./formulario";
import "./secaocontato.scss";
import { EmailSVG, TelefoneSVG } from "../svgs/svgs";

export default function SecaoContato() {
  return (
    <section className="secao-contato">
      <Container>
        <Row className="conteudo">
          <Col lg className="coluna-informacoes">
            <div className="conteudo-coluna">
              <h2 className="titulo">Entre em contato</h2>
              <p className="texto-explicativo">
                Estamos à disposição para atendimentos presenciais e online.
                Escolha a melhor forma de falar conosco:
              </p>
              <div className="linha-contato">
                <div className="icone-contato icone-email">
                  <EmailSVG />
                </div>
                <span>atendimento@novavisao.com.br</span>
              </div>
              <div className="linha-contato">
                <div className="icone-contato icone-telefone">
                  <TelefoneSVG />
                </div>
                <span>(11) 0000-0000</span>
              </div>
            </div>
          </Col>

          <Col lg className="coluna-formulario">
            <Formulario />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
