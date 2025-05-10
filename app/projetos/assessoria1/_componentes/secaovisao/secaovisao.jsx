import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaovisao.scss";
import { ApertodeMaoSVG, LampadaSVG, TelescopioSVG } from "../../_svgs/svgs";

export default function SecaoVisao() {
  return (
    <section className="secao-visao">
      <Container>
        <div className="titulo">
          <p>Nossa visão</p>
          <h2>Nossa Visão e os Pilares que nos Guiam</h2>
        </div>
        <div className="items">
          <Row>
            <Col md={4} className="d-flex justify-content-center">
              <div className="item">
                <div className="icone-titulo">
                  <div className="icone">
                    <TelescopioSVG />
                  </div>
                  <div className="titulo-item">
                    <p>Visão de Futuro</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>
                    Buscamos ser reconhecidos no mercado como uma consultoria
                    empresarial de referência, admirada pela entrega de soluções
                    consistentes, pela seriedade no relacionamento com os
                    clientes e pelo compromisso com a evolução contínua. Nosso
                    foco está em contribuir para que empresas cresçam de forma
                    sólida, inovadora e sustentável, sempre com base em
                    planejamento estratégico e decisões bem fundamentadas.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <div className="item">
                <div className="icone-titulo">
                  <div className="icone">
                    <ApertodeMaoSVG />
                  </div>
                  <div className="titulo-item">
                    <p>Valores que Sustentam Nossa Atuação</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>
                    Nossas ações são orientadas por valores que consideramos
                    essenciais: compromisso com cada cliente, transparência em
                    todos os processos, responsabilidade com os resultados
                    entregues e foco contínuo na excelência. Valorizamos
                    relações de confiança, integridade nas práticas de
                    consultoria e soluções construídas em parceria, sempre
                    respeitando a realidade de cada organização.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <div className="item">
                <div className="icone-titulo">
                  <div className="icone">
                    <LampadaSVG />
                  </div>
                  <div className="titulo-item">
                    <p>Caminho com Inovação e Eficiência</p>
                  </div>
                </div>
                <div className="descricao">
                  <p>
                    Acreditamos que a inovação é um fator decisivo para o
                    sucesso empresarial. Por isso, utilizamos abordagens
                    modernas e ferramentas tecnológicas para gerar melhorias
                    reais e mensuráveis. Atuamos com eficiência e objetividade,
                    propondo soluções aplicáveis e ajustadas às necessidades
                    específicas de cada negócio, promovendo mudanças estruturais
                    com foco em performance e crescimento planejado.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
