import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sobrenosIMG from "../../../../../public/imagens/assessoria3/sobrenos.png";
import pessoa1IMG from "../../../../../public/imagens/assessoria3/pessoa1.png";
import pessoa2IMG from "../../../../../public/imagens/assessoria3/pessoa2.jpg";
import pessoa3IMG from "../../../../../public/imagens/assessoria3/pessoa3.jpg";
import "./secaosobrenos.scss";
import Image from "next/image";
import { InstagramSVG, LinkedinSVG } from "../svgs/svgs";

export default function SecaoSobreNos() {
  const membros = [
    {
      imagem: pessoa1IMG,
    },
    {
      imagem: pessoa2IMG,
    },
    {
      imagem: pessoa3IMG,
    },
  ];
  return (
    <section className="secao-sobre-nos">
      <Container>
        <Row className="linha-principal">
          <Col md={6} className="coluna-imagem">
            <div className="imagem-equipe">
              <Image src={sobrenosIMG} alt="imagem" width={100} height={100} />
            </div>
          </Col>
          <Col md={6} className="coluna-texto">
            <h2 className="titulo">
              Compromisso com resultados reais e sustentáveis
            </h2>
            <p className="descricao">
              A <strong>NovaVisão Assessoria Empresarial</strong> oferece
              soluções especializadas em <strong>consultoria</strong> e{" "}
              <strong>assessoria</strong> para empresas de todos os portes.
              Nosso foco é a <strong>melhoria da gestão</strong>,{" "}
              <strong>organização</strong> e <strong>planejamento</strong> dos
              negócios. Atuamos com <strong>ética</strong>,{" "}
              <strong>comprometimento</strong> e foco em resultados sólidos,
              buscando ser referência nacional em qualidade e confiança.
            </p>
          </Col>
        </Row>

        <Row className="linha-equipe">
          {membros.map((membro, index) => (
            <Col key={index} xs={12} sm={4} className="coluna-membro">
              <div className="foto-membro">
                <div className="foto-placeholder">
                  <Image
                    src={membro["imagem"]}
                    alt="membro"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="overlay-redes">
                  <div className="icones-redes">
                    <div className="icone icone-linkedin">
                      <LinkedinSVG />
                    </div>
                    <div className="icone icone-instagram">
                      <InstagramSVG />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
