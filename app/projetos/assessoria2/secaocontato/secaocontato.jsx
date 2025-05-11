import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Formulario from "./formulario";
import "./secaocontato.scss";

export default function SecaoContato() {
  return (
    <section className="secao-contato">
      <Container>
        <div className="cabecalho-contato text-center">
          <h2 className="titulo-secao">Entre em Contato</h2>
          <p className="subtitulo-secao">
            Estamos prontos para ouvir seus desafios e propor soluções
          </p>
        </div>

        <Row className="justify-content-center">
          <Col md={8}>
            <Formulario />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
