import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuemSouEuIMG from "../../../public/imagens/home/quemsoueu.png";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import Image from "next/image";
import "./secaoquemsoueu.scss";

export default function SecaoQuemSouEu() {
  return (
    <section className="secao-quemsoueu">
      <Container>
        <div className="secao-titulo">
          <span className="secao-nome">Quem sou eu</span>
          <h2>Conheça Meu Perfil</h2>
        </div>
        <div className="conteudo-quemsoueu">
          <Row>
            <Col
              md
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <p className="texto">
                  Meu nome é Anderson, e aprendi programação e desenvolvimento
                  web de forma autodidata. Tenho conhecimento em desenvolvimento
                  full-stack e meu foco é entregar sites modernos, responsivos e
                  otimizados para proporcionar a melhor experiência ao usuário.
                  Acredito que a tecnologia deve ser acessível e útil, e é isso
                  que busco em cada projeto que realizo.
                </p>
                <div className="tecnologias-container">
                  <span className="tecnologia-titulo">
                    Tecnologias e Frameworks
                  </span>
                  <div className="tecnologias">
                    <div className="imagem-tec">
                      <RiNextjsFill />
                    </div>
                    <div className="imagem-tec">
                      <SiDjango />
                    </div>
                    <div className="imagem-tec">
                      <FaPython />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md className="d-flex justify-content-center">
              <div className="imagem-placeholder">
                <Image
                  src={QuemSouEuIMG}
                  alt="quem sou eu"
                  width={100}
                  height={100}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
