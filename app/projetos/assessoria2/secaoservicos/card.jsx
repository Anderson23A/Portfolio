"use client";
import Card from "react-bootstrap/Card";

export default function CardClient(props) {
  return (
    <Card className="cartao-servico">
      {/* Substituir pelo ícone correspondente */}
      <div className="icone" aria-hidden="true">
        {props.servico.icone}
      </div>
      <Card.Body>
        <Card.Title className="titulo-servico">
          {props.servico.titulo}
        </Card.Title>
        <Card.Text className="descricao-servico">
          {props.servico.descricao}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
