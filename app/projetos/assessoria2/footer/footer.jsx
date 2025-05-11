import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="rodape">
      <Container>
        <Row className="conteudo-principal">
          {/* Coluna 1: Logo e descrição */}
          <Col md={6} lg={3} className="coluna">
            <div className="logo-footer">
              {/* Substituir pela imagem do logotipo em branco */}
              <div className="espaco-logo"></div>
            </div>
            <p className="descricao">
              Consultoria especializada em transformar desafios empresariais em
              soluções estratégicas. Atuamos com ética, precisão e resultados.
            </p>
          </Col>

          {/* Coluna 2: Links Rápidos */}
          <Col md={6} lg={3} className="coluna">
            <h5 className="titulo-coluna">Links Rápidos</h5>
            <ul className="lista-links">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#portfolio">Portfólio</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </Col>

          {/* Coluna 3: Contato */}
          <Col md={6} lg={3} className="coluna">
            <h5 className="titulo-coluna">Contato</h5>
            <p>Rua Exemplo, 123 – São Paulo/SP</p>
            <p>
              {/* Substituir por ícone de telefone */}
              <span className="icone-branco"></span> (11) 99999-9999
            </p>
            <p>
              {/* Substituir por ícone de e-mail */}
              <span className="icone-branco"></span> contato@alvoestrategico.com
            </p>
            <a
              href="https://wa.me/seunumerowhatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="link-externo"
            >
              <span className="icone-branco"></span> Atendimento via WhatsApp
            </a>
          </Col>

          {/* Coluna 4: Redes Sociais */}
          <Col md={6} lg={3} className="coluna">
            <h5 className="titulo-coluna">Redes Sociais</h5>
            <div className="redes-sociais">
              {/* Substituir por ícones clicáveis */}
              <a href="#">
                <div className="icone-azul"></div>
              </a>
              <a href="#">
                <div className="icone-azul"></div>
              </a>
              <a href="#">
                <div className="icone-azul"></div>
              </a>
            </div>
            <p className="texto-social">
              Acompanhe nossos conteúdos e cases em tempo real.
            </p>
          </Col>
        </Row>

        {/* Barra Inferior */}
        <div className="barra-inferior">
          <hr />
          <p className="texto-inferior">
            © 2025 Alvo Estratégico – Todos os direitos reservados. Desenvolvido
            por{" "}
            <a href="https://anderson23a.github.io/Portfolio/">AndersonDev</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
