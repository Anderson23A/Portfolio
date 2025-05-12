import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BotaoCTA from "./botao";
import Image from "next/image";
import img1 from "../../../../public/imagens/assessoria2/sobrenos1.png";
import img2 from "../../../../public/imagens/assessoria2/sobrenos2.png";
import "./secaosobrenos.scss";

export default function SecaoSobreNos() {
  return (
    <section className="secao-sobre-nos">
      <Container>
        <Row className="alinhamento-colunas">
          {/* Coluna Visual */}
          <Col md={6} className="coluna-imagens">
            <div className="container-imagens">
              <div className="imagem-c imagem-principal" aria-hidden="true">
                <Image src={img1} alt="principal" width={100} height={100} />
              </div>
              {/* imagem sobreposta */}
              <div className="imagem-c imagem-sobreposta" aria-hidden="true">
                <Image src={img2} alt="principal" width={100} height={100} />
              </div>
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
