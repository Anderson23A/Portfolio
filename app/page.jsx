// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push("/projetos/assessoria1");
//   }, [router]);
//   return <></>;
// }
import SecaoHero from "./_secoes/secaohero/secaohero";
import SecaoProjetos from "./_secoes/secaoprojetos/secaoprojetos";
import SecaoQuemSouEu from "./_secoes/secaoquemsoueu/secaoquemsoueu";

export default function Home() {
  return (
    <>
      <SecaoHero />
      <SecaoProjetos />
      <SecaoQuemSouEu />
    </>
  );
}
