"use client";
import Card from "react-bootstrap/Card";

export default function CardClient(props) {
  return (
    <Card className="cartao-servico">
      {/* Substituir pelo ícone correspondente */}
      <div className="icone-substituto" aria-hidden="true"></div>
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
