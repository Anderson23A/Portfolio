"use client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormContato(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg>
            <Form.Group className="input-form" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col lg>
            <Form.Group className="input-form" controlId="sobrenome">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg>
            <Form.Group className="input-form" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Col>
          <Col lg>
            <Form.Group className="input-form" controlId="Telefone (opcional)">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg>
            <Form.Group className="input-form" controlId="mensagem">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}
