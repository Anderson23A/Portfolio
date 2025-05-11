import SecaoConquista from "./secaoconquista/secaoconquista";
import SecaoHero from "./secaohero/secaohero";
import SecaoSobreNos from "./secaosobrenos/secaosobrenos";
import SecaoServicos from "./secaoservicos/secaoservicos";
import SecaoPortfolio from "./secaoportfolio/secaoportfolio";
import SecaoContato from "./secaocontato/secaocontato";

export default function Assessoria2() {
  return (
    <>
      <SecaoHero />
      <SecaoConquista />
      <SecaoSobreNos />
      <SecaoServicos />
      <SecaoPortfolio />
      <SecaoContato />
    </>
  );
}
