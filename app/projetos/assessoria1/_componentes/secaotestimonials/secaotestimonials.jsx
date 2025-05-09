import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselTestimonials from "./carousel";
import CTABotaoTestimonials from "./ctabotao";
import "./secaotestimonials.scss";

export default function SecaoTestiomonials() {
  return (
    <section className="secao-testimonials">
      <Container>
        <div className="titulo">
          <p>Nossos clientes</p>
          <h2>texto texto texto</h2>
        </div>
      </Container>
      <div className="testiominals">
        <Container>
          <CarouselTestimonials
            items={[
              <div className="testimonial">
                <div className="cliente">
                  <div className="foto"></div>
                  <div className="nome">
                    <p>nome nome nome nome</p>
                  </div>
                  <div className="empresa">
                    <p>empresa emprea</p>
                  </div>
                </div>
                <div className="feedback-mensagem">
                  <p>
                    "texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto "
                  </p>
                </div>
              </div>,
              <div className="testimonial">
                <div className="cliente">
                  <div className="foto"></div>
                  <div className="nome">
                    <p>nome nome nome nome1</p>
                  </div>
                  <div className="empresa">
                    <p>empresa emprea</p>
                  </div>
                </div>
                <div className="feedback-mensagem">
                  <p>
                    "texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto "
                  </p>
                </div>
              </div>,
              <div className="testimonial">
                <div className="cliente">
                  <div className="foto"></div>
                  <div className="nome">
                    <p>nome nome nome nome2</p>
                  </div>
                  <div className="empresa">
                    <p>empresa emprea</p>
                  </div>
                </div>
                <div className="feedback-mensagem">
                  <p>
                    "texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto "
                  </p>
                </div>
              </div>,
            ]}
          />
        </Container>
      </div>
      <div className="destaque-metrica">
        <Container>
          <Row>
            <Col md>
              <div className="destaque">
                <div className="texto-destaque">
                  <span>1000+</span>
                </div>

                <div className="texto-descricao">
                  <span>clientes satisfeitos</span>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="destaque">
                <div className="texto-destaque">
                  <span>1000+</span>
                </div>

                <div className="texto-descricao">
                  <span>clientes satisfeitos</span>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="destaque">
                <div className="texto-destaque">
                  <span>1000+</span>
                </div>

                <div className="texto-descricao">
                  <span>clientes satisfeitos</span>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="destaque">
                <div className="texto-destaque">
                  <span>1000+</span>
                </div>
                <div className="texto-descricao">
                  <span>clientes satisfeitos</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="cta-banner">
        <div className="cta-texto">
          <p>
            texto texto texto texto texto texto texto texto texto texto texto
            texto
          </p>
        </div>
        {/* Glowing button */}
        <div className="botao-cta">
          <CTABotaoTestimonials />
        </div>
      </div>
    </section>
  );
}
