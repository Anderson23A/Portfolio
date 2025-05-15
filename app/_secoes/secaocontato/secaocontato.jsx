import Container from "react-bootstrap/Container";
import { IoLogoInstagram } from "react-icons/io5";
import "./secaocontato.scss";

export default function SecaoContato() {
  return (
    <section id="s-contato" className="secao-contato">
      <Container>
        <div className="secao-titulo">
          <span className="secao-nome">Contato</span>
          <h2>Entre em contato para discutir seu projeto</h2>
        </div>
        <div className="conteudo-contato">
          <div className="redes-sociais">
            <div className="a-icone">
              <a
                href="https://www.instagram.com/andersondevv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
