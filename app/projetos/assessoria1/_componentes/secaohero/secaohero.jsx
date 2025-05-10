import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CTAButton from "./ctabutton";
import Image from "next/image";
import HeroIMG from "../../../../../public/imagens/assessoria1/hero.png";
import "./secaohero.scss";

export default function SecaoHero() {
  return (
    <section className="secao-hero">
      <Container>
        <Row>
          <Col md>
            <div className="conteudo-wrapper">
              <div className="conteudo">
                <h1>
                  Consultoria para transformar sua empresa com estratégia e
                  eficiência
                </h1>
                <p>
                  A ConsulPlan apoia negócios em crescimento com soluções
                  práticas e personalizadas nas áreas de gestão, finanças,
                  processos e tecnologia.
                </p>
                <CTAButton />
              </div>
            </div>
          </Col>
          <Col md>
            <div className="imagem-placeholder">
              <Image src={HeroIMG} alt="hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
