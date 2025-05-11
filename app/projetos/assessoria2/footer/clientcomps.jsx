"use client";
function AtendimentoWhatsapp() {
  return (
    <a href="https://wa.me/seunumerowhatsapp" className="link-externo">
      <div className="icone-branco"></div> Atendimento via WhatsApp
    </a>
  );
}

function RedesSociais() {
  return (
    <div className="redes-sociais">
      {/* Substituir por ícones clicáveis */}
      <a href="#">
        <div className="icone-azul"></div>
      </a>
      <a href="#">
        <div className="icone-azul"></div>
      </a>
      <a href="#">
        <div className="icone-azul"></div>
      </a>
    </div>
  );
}

export { AtendimentoWhatsapp, RedesSociais };
