import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Servico from "./servico";
import "./secaoservicos.scss";
import {
  CalculadoraSVG,
  EstrategiaSVG,
  FluxogramaSVG,
  NuvemSVG,
} from "../../_svgs/svgs";

export default function SecaoServicos() {
  return (
    <section className="secao-servicos">
      <Container>
        <div className="titulo">
          <p>serviços</p>
          <h2>Nossas Soluções para Impulsionar o Crescimento da Sua Empresa</h2>
        </div>
        <div className="lista-servicos">
          <Row>
            <Col md={6} lg={3} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico
                  descricao={"Consultoria Estratégica"}
                  icone={<EstrategiaSVG />}
                  ctatexto={"Ver detalhes da consultoria estratégica"}
                  items={[
                    "Definição de metas e objetivos claros",
                    "Análise de mercado e posicionamento",
                    "Planejamento estratégico personalizado",
                  ]}
                />
              </div>
            </Col>
            {/*  */}
            <Col md={6} lg={3} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico
                  descricao={"Gestão de Processos"}
                  icone={<FluxogramaSVG />}
                  ctatexto={"Saiba como melhorar seus processos"}
                  items={[
                    "Mapeamento e redesenho de processos",
                    "Identificação de gargalos e ineficiências",
                    "Otimização da operação com foco em produtividade",
                  ]}
                />
              </div>
            </Col>
            {/*  */}
            <Col md={6} lg={3} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico
                  descricao={"Consultoria Financeira"}
                  icone={<CalculadoraSVG />}
                  ctatexto={"Melhore a saúde financeira da sua empresa"}
                  items={[
                    "Planejamento e controle financeiro",
                    "Redução de custos e aumento da rentabilidade",
                    "Análise de viabilidade de investimentos",
                  ]}
                />
              </div>
            </Col>
            {/*  */}
            <Col md={6} lg={3} className="d-flex justify-content-center">
              <div className="servico-container">
                <Servico
                  descricao={"Transformação Digital"}
                  icone={<NuvemSVG />}
                  ctatexto={"Transforme seu negócio com tecnologia"}
                  items={[
                    "Digitalização de processos operacionais",
                    "Adoção de ferramentas tecnológicas adequadas",
                    "Melhoria da eficiência por meio da inovação",
                  ]}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
