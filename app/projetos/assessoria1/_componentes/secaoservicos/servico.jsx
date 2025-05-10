import CTAbuttonServico from "./ctabuttonservico";
import "./servico.scss";

export default function Servico(props) {
  return (
    <div className="servico">
      <div className="icon-placeholder">{props.icone}</div>
      <div className="descricao">
        <p>{props.descricao}</p>
      </div>
      <div className="items">
        <ul>
          {props.items.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div className="cta-button">
        <CTAbuttonServico texto={props.ctatexto} />
      </div>
    </div>
  );
}
