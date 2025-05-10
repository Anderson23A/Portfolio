import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselTestimonials from "./carousel";
import CTABotaoTestimonials from "./ctabotao";
import mulher1img from "../../../../../public/imagens/assessoria1/mulher1.png";
import mulher2img from "../../../../../public/imagens/assessoria1/mulher2.png";
import homem1img from "../../../../../public/imagens/assessoria1/homem1.png";
import homem2img from "../../../../../public/imagens/assessoria1/homem2.png";
import Image from "next/image";
import "./secaotestimonials.scss";

export default function SecaoTestiomonials() {
  const get_testiomonials = () => {
    const items = [
      {
        imagem: (
          <Image src={mulher1img} alt="perfil" width={100} height={100} />
        ),
        nome: "Fernanda Lima",
        empresa: "EcoSmart Soluções Ambientais",
        mensagem:
          "A parceria com a ConsulPlan foi transformadora para nossa empresa. Estávamos enfrentando dificuldades na organização dos processos internos e na definição de prioridades estratégicas. Com uma abordagem clara, prática e extremamente profissional, conseguimos redesenhar fluxos de trabalho, reduzir desperdícios e alcançar resultados que antes pareciam distantes. Hoje temos uma operação muito mais eficiente e bem estruturada.",
      },
      {
        imagem: <Image src={homem1img} alt="perfil" width={100} height={100} />,
        nome: "Ricardo Tavares",
        empresa: "InovaTech Desenvolvimento Digital",
        mensagem:
          "Contar com a ConsulPlan no momento de expansão da nossa startup foi um grande diferencial. Eles trouxeram uma visão externa, técnica e ao mesmo tempo sensível às nossas necessidades. Com o apoio no planejamento estratégico, conseguimos definir metas claras, identificar riscos e tomar decisões com mais segurança. A consultoria foi decisiva para alinhar nossa equipe e fortalecer nosso modelo de negócio.",
      },
      {
        imagem: (
          <Image src={mulher2img} alt="perfil" width={100} height={100} />
        ),
        nome: "Juliana Costa",
        empresa: "BioEquilíbrio Laboratórios",
        mensagem:
          "O trabalho da ConsulPlan superou nossas expectativas. A análise financeira que fizeram foi minuciosa e reveladora. Detectamos pontos críticos que estavam passando despercebidos, conseguimos reestruturar nosso orçamento e adotamos práticas mais saudáveis de controle e planejamento. A condução foi sempre ética, clara e focada em resultados reais. Hoje temos mais estabilidade e previsibilidade financeira.",
      },
      {
        imagem: <Image src={homem2img} alt="perfil" width={100} height={100} />,
        nome: "André Melo",
        empresa: "Grupo Vértice Logística",
        mensagem:
          "A ConsulPlan nos acompanhou em um momento decisivo, quando optamos por investir na transformação digital da empresa. A equipe conduziu um diagnóstico detalhado, indicou as ferramentas mais adequadas e nos ajudou a redesenhar processos com foco em eficiência operacional. Em poucos meses, já víamos ganhos concretos em produtividade e redução de erros. O profissionalismo e a clareza nas entregas foram impressionantes.",
      },
    ];
    const divs = [];
    for (let i = 0; i < items.length; i += 1) {
      let cItem = items[i];
      divs.push(
        <div key={divs.length} className="testimonial">
          <div className="cliente">
            <div className="foto">{cItem["imagem"]}</div>
            <div className="nome">
              <p>{cItem["nome"]}</p>
            </div>
            <div className="empresa">
              <p>{cItem["empresa"]}</p>
            </div>
          </div>
          <div className="feedback-mensagem">
            <p>"{cItem["mensagem"]} "</p>
          </div>
        </div>
      );
    }
    return divs;
  };
  return (
    <section className="secao-testimonials">
      <Container>
        <div className="titulo">
          <p>Nossos clientes</p>
          <h2>O Que Nossos Clientes Dizem Sobre a ConsulPlan</h2>
        </div>
      </Container>
      <div className="testiominals">
        <Container>
          <CarouselTestimonials items={get_testiomonials()} />
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
                  <span>250+</span>
                </div>

                <div className="texto-descricao">
                  <span>Projetos de consultoria concluídos com sucesso</span>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="destaque">
                <div className="texto-destaque">
                  <span>150+</span>
                </div>

                <div className="texto-descricao">
                  <span>Empresas com processos otimizados</span>
                </div>
              </div>
            </Col>
            <Col md>
              <div className="destaque">
                <div className="texto-destaque">
                  <span>250+</span>
                </div>
                <div className="texto-descricao">
                  <span>Projetos de consultoria concluídos com sucesso</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="cta-banner">
        <div className="cta-texto">
          <p>
            Pronto para transformar a gestão da sua empresa? Fale com nossos
            especialistas e descubra como a ConsulPlan pode impulsionar seus
            resultados com soluções práticas e eficientes.
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
