import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaosobrenos.scss";
import CTAButtonSobreNos from "./ctabutton";
import CarouselClient from "./Carousel";
import Image from "next/image";
import SobreNosIMG from "../../../../../public/imagens/assessoria1/sobrenos.png";

export default function SecaoSobreNos() {
  return (
    <section className="secao-sobrenos">
      <Container>
        <div className="titulo">
          <p>sobre nós</p>
          <h2>Quem Somos e Como Atuamos</h2>
        </div>
        <div className="sobrenos-container">
          <Row lg>
            {/* imagem e cta col */}
            <Col md className="d-flex justify-content-center">
              <div className="imagemcta-container">
                {/* imagem */}
                <div className="imagem-placeholder">
                  <Image
                    src={SobreNosIMG}
                    width={100}
                    height={100}
                    alt="sobre nós"
                  />
                </div>
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
                      <p>Nosso Propósito</p>
                    </div>
                    <div className="texto">
                      <p>
                        Na ConsulPlan, acreditamos que o crescimento sustentável
                        começa com planejamento e decisões bem fundamentadas.
                        Nosso propósito é apoiar pequenas e médias empresas a
                        alcançarem seu potencial, com consultoria prática,
                        estratégica e adaptada à realidade de cada cliente.
                        Trabalhamos para ser parceiros confiáveis na jornada de
                        evolução dos negócios.
                      </p>
                    </div>
                    <CTAButtonSobreNos texto={"Conheça nossa missão"} />
                  </div>,
                  <div className="conteudo">
                    <div className="titulo-conteudo">
                      <p>Como Trabalhamos</p>
                    </div>
                    <div className="texto">
                      <p>
                        Nossa atuação é baseada em escuta ativa, diagnóstico
                        preciso e soluções realistas. Unimos conhecimento
                        técnico, experiência em diversos setores e uma abordagem
                        colaborativa para identificar oportunidades de melhoria,
                        redesenhar processos e apoiar a tomada de decisões
                        estratégicas. O foco é sempre na aplicação prática e nos
                        resultados mensuráveis.
                      </p>
                    </div>
                    <CTAButtonSobreNos texto={"Veja nossa metodologia"} />
                  </div>,
                  <div className="conteudo">
                    <div className="titulo-conteudo">
                      <p>Compromisso com Resultados</p>
                    </div>
                    <div className="texto">
                      <p>
                        Mais do que oferecer conselhos, buscamos gerar impactos
                        concretos. Cada projeto é conduzido com
                        responsabilidade, ética e foco em resultados duradouros.
                        Acreditamos na inovação como ferramenta de transformação
                        e no relacionamento transparente como base para
                        parcerias de longo prazo.
                      </p>
                    </div>
                    <CTAButtonSobreNos texto={"Explore nossos diferenciais"} />
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
