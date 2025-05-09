import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./secaodiferenca.scss";

export default function SecaoDiferenca() {
  const render_cols = () => {
    const items = [1, 2, 3];
    const cols = [];
    for (let i = 0; i < 3; i += 1) {
      cols.push(
        <Col key={cols.length}>
          <div className="diferenca">
            <div className="icon-placeholder"></div>
            <div className="titulo">
              <p>texto texto texto</p>
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
