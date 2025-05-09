import CTAbuttonServico from "./ctabuttonservico";
import "./servico.scss";

export default function Servico() {
  return (
    <div className="servico">
      <div className="icon-placeholder"></div>
      <div className="descricao">
        <p>texto texto texto texto texto texto</p>
      </div>
      <div className="items">
        <ul>
          <li>texto texto texto</li>
          <li>texto texto texto</li>
          <li>texto texto texto</li>
        </ul>
      </div>
      <div className="cta-button">
        <CTAbuttonServico />
      </div>
    </div>
  );
}
