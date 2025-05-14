import SecaoHero from "./_secoes/secaohero/secaohero";
import SecaoProjetos from "./_secoes/secaoprojetos/secaoprojetos";
import SecaoQuemSouEu from "./_secoes/secaoquemsoueu/secaoquemsoueu";
import SecaoContato from "./_secoes/secaocontato/secaocontato";

export default function Home() {
  return (
    <>
      <SecaoHero />
      <SecaoProjetos />
      <SecaoQuemSouEu />
      <SecaoContato />
    </>
  );
}
