import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardClient from "./card";
import BotaoCTA from "./botao";
import "./secaoservicos.scss";
import {
  DollarSVG,
  EscudoComCheckMarkSVG,
  GraficoSetaCrescenteSVG,
  GrupoPessoasSVG,
  MegaFoneSVG,
  VelocimetroSVG,
} from "../_componentes_assessoria2/svgs/svgs";

export default function SecaoServicos() {
  const servicos = [
    {
      icone: <GraficoSetaCrescenteSVG />,
      titulo: "Planejamento Estratégico",
      descricao:
        "Apoiamos sua empresa na implementação e monitoramento contínuo das estratégias para crescimento sustentável.",
    },
    {
      icone: <VelocimetroSVG />,
      titulo: "Análise de Desempenho",
      descricao:
        "Acompanhamos os indicadores de desempenho da sua empresa, implementando melhorias de forma contínua.",
    },
    {
      icone: <DollarSVG />,
      titulo: "Gestão Financeira",
      descricao:
        "Oferecemos suporte contínuo no controle financeiro e planejamento orçamentário, garantindo eficiência operacional",
    },
    {
      icone: <EscudoComCheckMarkSVG />,
      titulo: "Assessoria Tributária",
      descricao:
        "Apoiamos sua empresa no cumprimento das obrigações fiscais e na redução de riscos, com acompanhamento diário.",
    },
    {
      icone: <GrupoPessoasSVG />,
      titulo: "Gestão de Pessoas",
      descricao:
        "Auxiliamos na gestão diária de equipes, com foco no desenvolvimento e na avaliação contínua de desempenho.",
    },
    {
      icone: <MegaFoneSVG />,
      titulo: "Marketing e Posicionamento",
      descricao:
        "Apoiamos na execução de estratégias de marketing, com monitoramento constante do posicionamento da sua marca.",
    },
  ];

  return (
    <section className="secao-servicos">
      <Container>
        <div className="cabecalho-servicos">
          <h2 className="titulo-secao">O que Oferecemos</h2>
          <p className="subtitulo-secao">
            Soluções sob medida para cada desafio empresarial
          </p>
        </div>

        <Row>
          {servicos.map((servico, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="coluna-cartao">
              <CardClient servico={servico} />
            </Col>
          ))}
        </Row>
        <BotaoCTA />
      </Container>
    </section>
  );
}
