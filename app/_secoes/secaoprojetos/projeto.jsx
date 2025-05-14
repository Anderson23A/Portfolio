"use client";
import Image from "next/image";
import "./projeto.scss";

export default function Projeto(props) {
  return (
    <div
      className="projeto"
      onClick={() => {
        window.open(props.link, "_blank", "noopener,noreferrer");
      }}
    >
      <div className="imagem-container">
        <Image
          className="imagem-projeto"
          src={props.img}
          alt="projeto imagem"
          width={100}
          height={100}
        />
      </div>
      <div className="descricao">
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}
