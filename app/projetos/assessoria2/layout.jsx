import MainNavbar from "./_componentes_assessoria2/mainnavbar";
import Footer from "./footer/footer";

export default function LayoutAssessoria2({ children }) {
  return (
    <div className="site-assessoria2">
      <MainNavbar />
      {children}
      <Footer />
    </div>
  );
}
