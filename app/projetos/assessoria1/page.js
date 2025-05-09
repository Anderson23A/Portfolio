import SecaoDiferenca from "./_componentes/secaodiferenca/secaodiferenca";
import SecaoHero from "./_componentes/secaohero/secaohero";
import SecaoServicos from "./_componentes/secaoservicos/secaoservicos";
import SecaoSobreNos from "./_componentes/secaosobrenos/secaosobrenos";
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
    </div>
  );
}
