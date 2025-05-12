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
          Assessoria Estratégica para Empresas que Buscam Crescer com Segurança
          e Eficiência
        </h1>
        <p className="hero-subtitulo">
          Mais de 10 anos de experiência oferecendo assessoria personalizada
          para ajudar empresas a alcançar resultados reais de forma prática e
          segura.
        </p>
        <HeroBotoes />
      </Container>
    </section>
  );
}
