import Container from "react-bootstrap/Container";
import HeroBotoes from "./herobotoes";
import "./secaohero.scss";

export default function SecaoHero() {
  return (
    <section className="hero-section">
      {/* Imagem de fundo será aplicada via CSS */}
      <div className="hero-overlay">
        <Container className="hero-content text-center">
          {/* Placeholder para ícone ou imagem ilustrativa */}
          <div className="hero-icon-placeholder" aria-hidden="true"></div>

          <h1 className="hero-title">
            Consultoria Estratégica para Empresas que Querem Crescer com
            Segurança
          </h1>
          <p className="hero-subtitle">
            Mais de 10 anos ajudando empresas a alcançar resultados reais com
            soluções personalizadas.
          </p>
          <HeroBotoes />
        </Container>
      </div>
    </section>
  );
}
