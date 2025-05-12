import Container from "react-bootstrap/Container";
import HeroBotoes from "./herobotoes";
import "./secaohero.scss";
import { AlvoComFlechaSVG } from "../_componentes_assessoria2/svgs/svgs";

export default function SecaoHero() {
  return (
    <section className="secao-hero">
      <Container className="hero-content text-center">
        <div className="hero-icon-placeholder" aria-hidden="true">
          <AlvoComFlechaSVG />
        </div>

        <h1 className="hero-titulo">
          Consultoria Estratégica para Empresas que Querem Crescer com Segurança
        </h1>
        <p className="hero-subtitulo">
          Mais de 10 anos ajudando empresas a alcançar resultados reais com
          soluções personalizadas.
        </p>
        <HeroBotoes />
      </Container>
    </section>
  );
}
