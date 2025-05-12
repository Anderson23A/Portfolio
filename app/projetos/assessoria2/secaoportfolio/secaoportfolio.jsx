import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaoportfolio.scss";

export default function SecaoPortfolio() {
  const projetos = [
    {
      titulo: "Reestruturação Financeira – Empresa X",
      descricao: "Redução de passivos e reorganização de fluxo de caixa.",
    },
    {
      titulo: "Planejamento Estratégico – Startup Y",
      descricao: "Definição de metas e indicadores para expansão.",
    },
    {
      titulo: "Consultoria Tributária – Comércio Z",
      descricao: "Economia fiscal por meio de revisão e adequação tributária.",
    },
    {
      titulo: "Gestão de Pessoas – Indústria A",
      descricao: "Implantação de avaliação de desempenho e plano de cargos.",
    },
  ];

  return (
    <section className="secao-portfolio">
      <Container>
        <div className="cabecalho-portfolio">
          <h2 className="titulo-secao">Projetos Realizados</h2>
          <p className="subtitulo-secao">
            Alguns dos resultados entregues aos nossos clientes
          </p>
        </div>

        <Row>
          {projetos.map((projeto, idx) => (
            <Col md={6} sm={12} key={idx} className="coluna-projeto">
              <div className="caixa-projeto">
                {/* Substituir por imagem real do projeto */}
                <div className="imagem-projeto"></div>
                <div className="informacoes-hover">
                  <h5 className="titulo-projeto">{projeto.titulo}</h5>
                  <p className="descricao-projeto">{projeto.descricao}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
