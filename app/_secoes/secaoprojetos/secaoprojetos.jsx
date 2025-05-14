import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projeto from "./projeto";
import "./secaoprojetos.scss";
import BotaoClient from "./botaoclient/botaoclient";

export default function SecaoProjetos() {
  const projetos = [
    {
      imagem: "",
      descricao: "",
    },
    {
      imagem: "",
      descricao: "",
    },
    {
      imagem: "",
      descricao: "",
    },
  ];
  return (
    <section className="secao-projetos">
      <Container>
        <div className="secao-titulo">
          <span className="secao-nome">Projetos</span>
          <h2>texto texto texto texto texto</h2>
        </div>
        <div className="servicos-lista">
          <Row>
            {projetos.map((projeto, i) => (
              <Col
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
                key={i}
              >
                <Projeto />
              </Col>
            ))}
          </Row>
        </div>
        <BotaoClient />
      </Container>
    </section>
  );
}
