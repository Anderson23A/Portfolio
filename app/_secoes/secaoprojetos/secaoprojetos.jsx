import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Projeto from "./projeto";
import "./secaoprojetos.scss";
import BotaoClient from "./botaoclient/botaoclient";
import itemsProjetos from "@/app/projetos/items";

export default function SecaoProjetos() {
  return (
    <section className="secao-projetos">
      <Container>
        <div className="secao-titulo">
          <span className="secao-nome">Projetos recentes</span>
          <h2>Projetos recentes que refletem minha experiência</h2>
        </div>
        <div className="servicos-lista">
          <Row>
            {itemsProjetos.map((projeto, i) => (
              <Col
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
                key={i}
              >
                <Projeto
                  img={projeto.imagem}
                  descricao={projeto.descricao}
                  link={projeto.link}
                />
              </Col>
            ))}
          </Row>
        </div>
        <BotaoClient />
      </Container>
    </section>
  );
}
