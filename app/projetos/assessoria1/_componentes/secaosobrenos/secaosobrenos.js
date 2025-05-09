import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaosobrenos.scss";
import CTAButtonSobreNos from "./ctabutton";
import CarouselClient from "./Carousel";

export default function SecaoSobreNos() {
  return (
    <section className="secao-sobrenos">
      <Container>
        <div className="titulo">
          <p>sobre nós</p>
          <h2>texto texto texto</h2>
        </div>
        <div className="sobrenos-container">
          <Row lg>
            {/* imagem e cta col */}
            <Col md className="d-flex justify-content-center">
              <div className="imagemcta-container">
                {/* imagem */}
                <div className="imagem-placeholder"></div>
              </div>
            </Col>
            {/*  */}
            <Col
              md
              className="d-flex justify-content-center align-items-center"
            >
              <CarouselClient
                items={[
                  <div className="conteudo">
                    <div className="titulo-conteudo">
                      <p>texto text texto texto1</p>
                    </div>
                    <div className="texto">
                      <p>
                        Our team of seasoned strategists brings decades of
                        combined experience across industries and markets. We
                        don’t just advise—we partner with you to uncover
                        opportunities, navigate complexity, and drive meaningful
                        results. With a deep understanding of business dynamics,
                        we transform challenges into growth strategies tailored
                        to your goals.
                      </p>
                    </div>
                    <CTAButtonSobreNos />
                  </div>,
                  <div className="conteudo">
                    <div className="titulo-conteudo">
                      <p>texto text texto texto2</p>
                    </div>
                    <div className="texto">
                      <p>
                        Our team of seasoned strategists brings decades of
                        combined experience across industries and markets. We
                        don’t just advise—we partner with you to uncover
                        opportunities, navigate complexity, and drive meaningful
                        results. With a deep understanding of business dynamics,
                        we transform challenges into growth strategies tailored
                        to your goals.
                      </p>
                    </div>
                    <CTAButtonSobreNos />
                  </div>,
                  <div className="conteudo">
                    <div className="titulo-conteudo">
                      <p>texto text texto texto3</p>
                    </div>
                    <div className="texto">
                      <p>
                        Our team of seasoned strategists brings decades of
                        combined experience across industries and markets. We
                        don’t just advise—we partner with you to uncover
                        opportunities, navigate complexity, and drive meaningful
                        results. With a deep understanding of business dynamics,
                        we transform challenges into growth strategies tailored
                        to your goals.
                      </p>
                    </div>
                    <CTAButtonSobreNos />
                  </div>,
                ]}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
