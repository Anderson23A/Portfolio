import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MedidaSVG, AlvoSVG, RedeSVG } from "../../_svgs/svgs";
import "./secaodiferenca.scss";

export default function SecaoDiferenca() {
  const render_cols = () => {
    const items = [
      {
        icone: <MedidaSVG />,
        nome: "Soluções sob medida",
      },
      {
        icone: <AlvoSVG />,
        nome: "Visão prática e orientada a resultados",
      },
      {
        icone: <RedeSVG />,
        nome: "Experiência multidisciplinar",
      },
    ];
    const cols = [];
    for (let i = 0; i < 3; i += 1) {
      let item = items[i];
      cols.push(
        <Col key={cols.length}>
          <div className="diferenca">
            <div className="icon-placeholder">{item["icone"]}</div>
            <div className="titulo">
              <p>{item["nome"]}</p>
            </div>
          </div>
        </Col>
      );
    }
    return cols;
  };
  return (
    <section className="secao-diferenca">
      <Container>
        <Row>{render_cols()}</Row>
      </Container>
    </section>
  );
}
