import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BotaoCTA from "./botaocta";
import Image from "next/image";
import HeroIMG from "../../../../../public/imagens/assessoria3/hero.jpg";
import "./secaohero.scss";

export default function SecaoHero() {
  return (
    <section className="secao-hero">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="coluna-esquerda">
            <h1 className="titulo-principal">
              Soluções inteligentes para decisões seguras
            </h1>
            <p className="subtitulo">
              Consultoria e assessoria especializada para transformar a gestão
              da sua empresa.
            </p>
            <BotaoCTA />
          </Col>

          <Col md={6} className="coluna-direita">
            <div className="imagem-destaque">
              <div className="placeholder-imagem">
                <Image src={HeroIMG} alt="imagem" width={100} height={100} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
