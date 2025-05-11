import MainNavbar from "./_componentes/mainnavbar/mainNavbar.jsx";
import SecaoFooter from "./_componentes/secaofooter/secaofooter";

export default function LayoutAssessoria1({ children }) {
  return (
    <>
      <div className="site-assessoria1">
        <MainNavbar />
        {children}
        <SecaoFooter />
      </div>
    </>
  );
}
