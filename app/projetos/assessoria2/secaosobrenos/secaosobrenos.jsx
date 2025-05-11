import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BotaoCTA from "./botao";
import "./secaosobrenos.scss";

export default function SecaoSobreNos() {
  return (
    <section className="secao-sobre-nos">
      <Container>
        <Row className="alinhamento-colunas">
          {/* Coluna Visual */}
          <Col md={6} className="coluna-imagens">
            <div className="container-imagens">
              {/* Substituir por imagem principal */}
              <div
                className="imagem-substituta imagem-principal"
                aria-hidden="true"
              ></div>
              {/* Substituir por imagem sobreposta */}
              <div
                className="imagem-substituta imagem-sobreposta"
                aria-hidden="true"
              ></div>
            </div>
          </Col>

          {/* Coluna Conteúdo */}
          <Col md={6}>
            <h2 className="titulo-secao">Quem Somos</h2>
            <h4 className="subtitulo-secao">
              Consultores apaixonados por transformar negócios
            </h4>
            <p className="texto-historia">
              A Alvo Estratégico atua há mais de 15 anos no mercado, oferecendo
              soluções personalizadas em assessoria empresarial para empresas de
              todos os tamanhos e setores. Nosso compromisso é com resultados
              concretos e estratégias que fazem a diferença.
            </p>
            <p className="destaque-visao">
              Nosso objetivo é impulsionar negócios por meio de soluções
              práticas e inovadoras.
            </p>
            <BotaoCTA />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
