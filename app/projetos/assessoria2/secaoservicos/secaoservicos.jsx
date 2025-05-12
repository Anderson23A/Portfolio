import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardClient from "./card";
import BotaoCTA from "./botao";
import "./secaoservicos.scss";

export default function SecaoServicos() {
  const servicos = [
    {
      titulo: "Planejamento Estratégico",
      descricao:
        "Desenvolvemos estratégias sob medida para o crescimento sustentável da sua empresa.",
    },
    {
      titulo: "Análise de Desempenho",
      descricao:
        "Identificamos oportunidades de melhoria com base em dados e indicadores claros.",
    },
    {
      titulo: "Controle Financeiro",
      descricao:
        "Apoiamos na organização do fluxo de caixa e planejamento orçamentário eficiente.",
    },
    {
      titulo: "Consultoria Tributária",
      descricao:
        "Orientamos sobre obrigações fiscais e redução de riscos legais e financeiros.",
    },
    {
      titulo: "Gestão de Pessoas",
      descricao:
        "Ajudamos na estruturação de equipes, avaliações e treinamentos corporativos.",
    },
    {
      titulo: "Marketing e Posicionamento",
      descricao:
        "Fortalecemos sua marca com ações estratégicas de comunicação e mercado.",
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
