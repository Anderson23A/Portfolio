import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import navitems from "../mainnavbar/items";
import {
  FacebookSVG,
  InstagramSVG,
  WhastappSVG,
  YoutubeSVG,
} from "../../_svgs/svgs";
import Link from "next/link";
import LogoIMG from "../../../../../public/imagens/assessoria1/logo.png";
import Image from "next/image";
import "./secaofooter.scss";

export default function SecaoFooter() {
  return (
    <footer className="secao-footer">
      <Container>
        <Row>
          <Col md>
            <div className="footer-col-identidade">
              <div className="logo">
                <Image src={LogoIMG} alt="Logo" width={100} height={100} />
              </div>
              <div className="texto">
                <p>ConsulPlan Estratégia e Soluções</p>
              </div>
            </div>
          </Col>
          <Col md>
            <div className="footer-col-navegacao">
              <h4>Links rápidos</h4>
              <ul>
                {navitems.map((value, index) => (
                  <li key={index}>
                    <Link href={value["link"]}>{value["nome"]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md>
            <div className="footer-col-contato">
              <h4>contato</h4>
              <ul>
                <li>
                  <p>Rua das Inovações, 123 – São Paulo, SP</p>
                </li>
                <li>
                  <p>(11) 99999-9999</p>
                </li>
                <li>
                  <p>contato@consulplanconsultoria.com.br</p>
                </li>
                <li>
                  <p>Segunda a sexta, das 9h às 18h</p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md>
            <div className="footer-col-sociais">
              <h4>Redes sociais</h4>
              <div className="redes">
                <div className="rede-social">
                  <div className="icone">
                    <YoutubeSVG />
                  </div>
                </div>
                <div className="rede-social">
                  <div className="icone">
                    <InstagramSVG />
                  </div>
                </div>
                <div className="rede-social">
                  <div className="icone">
                    <FacebookSVG />
                  </div>
                </div>
                <div className="rede-social">
                  <div className="icone">
                    <WhastappSVG />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <p>
            <span>© 2025 ConsulPlan – website Desenvolvido por </span>
            <a
              href="https://anderson23a.github.io/Portfolio/"
              rel="noopener noreferrer"
              target="_blank"
            >
              AndersonDev
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
