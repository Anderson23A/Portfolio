import MainNavbar from "./_componentes/mainnavbar/mainnavbar";

export default function LayoutAssessoria3({ children }) {
  return (
    <div className="site-assessoria3">
      <MainNavbar />
      {children}
    </div>
  );
}
