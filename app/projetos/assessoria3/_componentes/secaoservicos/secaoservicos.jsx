import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import analiseFinanceiraIMG from "../../../../../public/imagens/assessoria3/analisefinanceira.png";
import planTributarioIMG from "../../../../../public/imagens/assessoria3/planTributario.jpg";
import planEstrategicoIMG from "../../../../../public/imagens/assessoria3/planEstrategico.jpg";
import GestaoTrabalhistaIMG from "../../../../../public/imagens/assessoria3/GestaoTrabalhista.png";
import AssessoriaMEIsIMG from "../../../../../public/imagens/assessoria3/AssessoriaMEIs.png";
import ReestruturacaoOrganizacionalIMG from "../../../../../public/imagens/assessoria3/ReestruturacaoOrganizacional.png";
import "./secaoservicos.scss";
import Image from "next/image";
import {
  BalancaSVG,
  DollarSVG,
  EngrenagemSVG,
  GraficoSetaCrescenteSVG,
  GrupoPessoasSVG,
  ShopSVG,
} from "../svgs/svgs";

export default function SecaoServicos() {
  const servicos = [
    {
      img: planEstrategicoIMG,
      icone: <GraficoSetaCrescenteSVG />,
      titulo: "Planejamento Estratégico",
      descricao: "Direcionamento claro para o crescimento sustentável.",
    },
    {
      img: analiseFinanceiraIMG,
      icone: <DollarSVG />,
      titulo: "Análise Financeira",
      descricao: "Controle financeiro e decisões assertivas.",
    },
    {
      img: planTributarioIMG,
      icone: <BalancaSVG />,
      titulo: "Planejamento Tributário",
      descricao: "Redução de tributos com segurança legal.",
    },
    {
      img: GestaoTrabalhistaIMG,
      icone: <GrupoPessoasSVG />,
      titulo: "Gestão Trabalhista",
      descricao: "Conformidade e otimização de encargos.",
    },
    {
      img: AssessoriaMEIsIMG,
      icone: <ShopSVG />,
      titulo: "Assessoria para MEIs",
      descricao: "Soluções simplificadas para pequenos negócios.",
    },
    {
      img: ReestruturacaoOrganizacionalIMG,
      icone: <EngrenagemSVG />,
      titulo: "Reestruturação Organizacional",
      descricao: "Melhoria de processos e eficiência operacional.",
    },
  ];

  return (
    <section className="secao-servicos site-assessoria3">
      <Container>
        <h2 className="titulo-secao">Serviços Oferecidos</h2>
        <Row>
          {servicos.map((servico, index) => (
            <Col key={index} md={6} lg={4} className="coluna-servico">
              <div className="card-servico">
                <div className="imagem-fundo">
                  <Image
                    src={servico.img}
                    alt="serviço"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="overlay">
                  <div className="icone-servico">{servico.icone}</div>
                  <h3 className="titulo-servico">{servico.titulo}</h3>
                  <p className="descricao-servico">{servico.descricao}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
