import SecaoFooter from "./_componentes/secaofooter/secaofooter";
export default function LayoutAssessoria1({ children }) {
  return (
    <>
      <div className="site-assessoria1">
        {children}
        <SecaoFooter />
      </div>
    </>
  );
}
