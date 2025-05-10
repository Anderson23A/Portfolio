import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormContato from "./form";
import "./secaocontato.scss";
import { EmailSVG, TelefoneSVG } from "../../_svgs/svgs";

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
            <Col md>
              <div className="form-container">
                <FormContato />
              </div>
            </Col>
            <Col md>
              <div className="cta-container">
                <div className="video-container">
                  <video width={"100%"} height={"100%"} autoPlay muted loop>
                    <source src={"/videos/faleconosco.mp4"} type="video/mp4" />
                  </video>
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
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
