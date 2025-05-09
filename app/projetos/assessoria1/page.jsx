import SecaoDiferenca from "./_componentes/secaodiferenca/secaodiferenca";
import SecaoHero from "./_componentes/secaohero/secaohero";
import SecaoServicos from "./_componentes/secaoservicos/secaoservicos";
import SecaoSobreNos from "./_componentes/secaosobrenos/secaosobrenos";
import SecaoVisao from "./_componentes/secaovisao/secaovisao";
import SecaoTestiomonials from "./_componentes/secaotestimonials/secaotestimonials";

export const metadata = {
  title: "Template Assessoria1",
  description: "template de Anderson Dev",
};
export default function Assessoria1() {
  return (
    <div className="pagina-inicial">
      <SecaoHero />
      <SecaoDiferenca />
      <SecaoServicos />
      <SecaoSobreNos />
      <SecaoVisao />
      <SecaoTestiomonials />
    </div>
  );
}
