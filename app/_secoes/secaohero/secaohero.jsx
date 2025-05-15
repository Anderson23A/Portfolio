import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroImage from "../../../public/imagens/home/hero.png";
import Image from "next/image";
import BotaoCTA from "./botaocta";
import "./secaohero.scss";

export default function SecaoHero() {
  return (
    <section id="s-hero" className="secao-hero">
      <Container className="h-100">
        <Row className="h-100">
          <Col
            md
            className="coluna-texto d-flex justify-content-center align-items-center h-100"
          >
            <div className="conteudo-texto">
              <h1>
                Olá, eu sou{" "}
                <span className="bold-texto">Anderson, Desenvolvedor Web</span>{" "}
                focado em soluções modernas e funcionais
              </h1>
              <p>
                Criação de sites modernos, responsivos e otimizados para
                oferecer a melhor experiência ao usuário.
              </p>
              <BotaoCTA />
            </div>
          </Col>
          <Col
            md
            className="coluna-imagem d-flex justify-content-center align-items-center"
          >
            <div className="imagem-placeholder">
              <Image
                src={HeroImage}
                alt="hero-imagem"
                width={100}
                height={100}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
