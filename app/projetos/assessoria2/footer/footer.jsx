import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.scss";
import {
  EmailSVG,
  TelefoneSVG,
  WhastappSVG,
} from "../../assessoria1/_svgs/svgs";
import {
  InstagramSVG,
  LinkedinSVG,
} from "../_componentes_assessoria2/svgs/svgs";
import logoIMG from "../../../../public/imagens/assessoria2/logo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="rodape">
      <Container>
        <Row className="conteudo-principal">
          {/* Coluna 1: Logo e descrição */}
          <Col md={6} lg={3} className="coluna">
            <div className="logo-footer">
              <div className="espaco-logo">
                <Image src={logoIMG} alt="logo" width={100} height={100} />
              </div>
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
            <div className="contato-info">
              <span className="icone-contato">
                <TelefoneSVG />
              </span>
              <p>(11) 99999-9999</p>
            </div>
            <div className="contato-info">
              <span className="icone-contato">
                <EmailSVG />
              </span>
              <p>contato@alvoestrategico.com</p>
            </div>
            <a href="#" className="link-externo">
              <span className="icone-contato">
                <WhastappSVG />
              </span>
              <span>Atendimento via WhatsApp</span>
            </a>
          </Col>

          {/* Coluna 4: Redes Sociais */}
          <Col md={6} lg={3} className="coluna">
            <h5 className="titulo-coluna">Redes Sociais</h5>
            <div className="redes-sociais">
              {/* Substituir por ícones clicáveis */}
              <a href="#">
                <span className="icone-redesocial">
                  <InstagramSVG />
                </span>
              </a>
              <a href="#">
                <span className="icone-redesocial">
                  <LinkedinSVG />
                </span>
              </a>
              <a href="#">
                <span className="icone-redesocial">
                  <WhastappSVG />
                </span>
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
            <a
              href="https://anderson23a.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AndersonDev
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
