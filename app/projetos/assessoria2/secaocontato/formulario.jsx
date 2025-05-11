"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Formulario() {
  return (
    <Form
      className="formulario-contato"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group controlId="nomeCompleto" className="mb-3">
        <Form.Label>Nome completo</Form.Label>
        <Form.Control type="text" placeholder="Digite seu nome" />
      </Form.Group>

      <Form.Group controlId="email" className="mb-3">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="exemplo@empresa.com" />
      </Form.Group>

      <Form.Group controlId="empresa" className="mb-3">
        <Form.Label>
          Empresa <span className="texto-opcional">(opcional)</span>
        </Form.Label>
        <Form.Control type="text" placeholder="Nome da empresa" />
      </Form.Group>

      <Form.Group controlId="mensagem" className="mb-4">
        <Form.Label>Mensagem</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Escreva sua mensagem"
        />
      </Form.Group>

      <div className="botoes-contato">
        <Button type="submit" className="botao-enviar">
          Enviar Mensagem
        </Button>

        {/* Substituir por ícone de WhatsApp */}
        <a href="#" className="botao-whatsapp">
          <div className="icone-branco"></div> Atender via WhatsApp
        </a>

        {/* Substituir por ícone do LinkedIn */}
        <a href="#" className="botao-linkedin">
          <div className="icone-azul"></div> Acompanhar no LinkedIn
        </a>
      </div>
    </Form>
  );
}
