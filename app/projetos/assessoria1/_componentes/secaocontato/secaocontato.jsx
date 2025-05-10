import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormContato from "./form";
import "./secaocontato.scss";
import { EmailSVG, TelefoneSVG } from "../../_svgs/svgs";
import VideoComp from "./video";

export default function SecaoContato() {
  return (
    <section className="secao-contato">
      <Container>
        <div className="titulo">
          <p>Fale conosco</p>
          <h2>
            Entre em Contato e Vamos Conversar Sobre o Futuro da Sua Empresa
          </h2>
        </div>
        <div className="conteudo-contato">
          <Row>
            <Col md className="d-flex justify-content-center">
              <div className="form-container">
                <FormContato />
              </div>
            </Col>
            <Col md className="d-flex justify-content-center">
              <div>
                <div className="cta-container">
                  <div className="video-container">
                    <VideoComp />
                  </div>
                </div>
                <div className="formas-contato">
                  <Row>
                    <Col sm>
                      <div className="forma-contato">
                        <div className="icone">
                          <EmailSVG />
                        </div>
                        <div className="texto">
                          <p>contato@consulplanconsultoria.com.br</p>
                        </div>
                      </div>
                    </Col>
                    <Col sm>
                      <div className="forma-contato">
                        <div className="icone">
                          <TelefoneSVG />
                        </div>
                        <div className="texto">
                          <p>(11) 99999-9999</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
