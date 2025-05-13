import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.scss";
import { InstagramSVG, LinkedinSVG, WhatsAppSVG } from "../svgs/svgs";
import logoIMG from "../../../../../public/imagens/assessoria3/logo.png";
import navitems from "../mainnavbar/items";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="rodape">
      <Container>
        <Row className="linha-principal">
          <Col md={4} className="coluna-logo">
            <div className="logo-placeholder">
              <Image src={logoIMG} alt="logo" width={100} height={100} />
            </div>
          </Col>

          <Col md={4} className="coluna-links">
            <ul className="lista-links">
              {navitems.map((item, index) => (
                <li key={index}>
                  <a href={item["link"]}>{item["nome"]}</a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={4} className="coluna-redes">
            <div className="redes-sociais">
              <div className="icone-rede">
                <InstagramSVG />
              </div>
              <div className="icone-rede">
                <LinkedinSVG />
              </div>
              <div className="icone-rede">
                <WhatsAppSVG />
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="mensagem-final">
            <p>
              © NovaVisão Assessoria Empresarial. site desenvolvido por{" "}
              <a
                href="https://anderson23a.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AndersonDev
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
