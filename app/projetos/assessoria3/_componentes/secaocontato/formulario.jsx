"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Formulario() {
  return (
    <>
      <Form>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" />
        </Form.Group>

        <Form.Group controlId="formMensagem">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Digite sua mensagem"
          />
        </Form.Group>

        <Button type="submit" className="botao-enviar">
          Enviar
        </Button>
      </Form>
    </>
  );
}
