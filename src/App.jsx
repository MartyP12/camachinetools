import { useEffect, useState } from "react";
import ProductModal from "./components/ProductModal";
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PartsPage from "./pages/PartsPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import { NAV_LINKS } from "./data/catalog";

// Assets
import logo from "./assets/newlogo.svg";

const PAGE_ROUTES = {
  Home: "",
  Products: "products",
  Parts: "parts",
  Services: "services",
  Company: "company",
  Contact: "contact",
};

const ROUTE_PAGES = Object.fromEntries(
  Object.entries(PAGE_ROUTES).map(([page, route]) => [route, page])
);

const normalizeRoute = (hash) => hash.replace(/^#\/?/, "").replace(/\/$/, "").toLowerCase();

const getPageFromUrl = () => ROUTE_PAGES[normalizeRoute(window.location.hash)] || "Home";

const getUrlForPage = (page) => {
  const url = new URL(window.location.href);
  url.hash = PAGE_ROUTES[page] ? `/${PAGE_ROUTES[page]}` : "";
  return `${url.pathname}${url.search}${url.hash}`;
};

const getFooterPage = (columnTitle, linkLabel) => {
  if (columnTitle === "Products") return "Products";
  if (columnTitle === "Contact") return "Contact";

  const companyLinks = {
    "Company Profile": "Company",
    Services: "Services",
    "Spare Parts": "Parts",
    Contact: "Contact",
  };

  return companyLinks[linkLabel] || "Company";
};

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/CanAmeraMT/",
    viewBox: "0 0 16 16",
    color: "#1877F2",
    path: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/canamera-machine-tools-inc./",
    viewBox: "0 0 16 16",
    color: "#0A66C2",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
  },
  {
    label: "X",
    href: "https://x.com/canameramt/",
    color: "#000000",
    viewBox: "0 0 16 16",
    path: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
  },
];

function App() {
  const [page, setPage] = useState(getPageFromUrl);
  const [modalProduct, setModalProduct] = useState(null);
  const [quoteProduct, setQuoteProduct] = useState(null);

  useEffect(() => {
    const syncPageWithUrl = () => {
      setPage(getPageFromUrl());
      setModalProduct(null);
      setQuoteProduct(null);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("popstate", syncPageWithUrl);
    window.addEventListener("hashchange", syncPageWithUrl);

    return () => {
      window.removeEventListener("popstate", syncPageWithUrl);
      window.removeEventListener("hashchange", syncPageWithUrl);
    };
  }, []);

  const navigate = (nextPage) => {
    if (!(nextPage in PAGE_ROUTES)) return;

    setPage(nextPage);
    setModalProduct(null);
    setQuoteProduct(null);

    const nextUrl = getUrlForPage(nextPage);
    if (window.location.href !== new URL(nextUrl, window.location.href).href) {
      window.history.pushState({ page: nextPage }, "", nextUrl);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const requestQuote = (product) => {
    setModalProduct(null);
    navigate("Contact");
    setQuoteProduct(product ?? null);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <button className="nav-logo" onClick={() => navigate("Home")}>
            <div className="CM-logo">
              <img src={logo} alt="Logo"/>
            </div>
            Machine Tools
          </button>

          <input type="checkbox" id="menu-toggle" className="menu-toggle"></input>

          <label htmlFor="menu-toggle" className="hamburger" onClick={() => { navigate(l); document.getElementById("menu-toggle").checked = false;}}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </label>

          <div className="nav-links">
            {NAV_LINKS.map(l => (
              <button key={l} className={`nav-link ${page === l ? "active" : ""}`} onClick={() => navigate(l)}>{l}</button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="nav-quote-btn" onClick={() => navigate("Contact")}>Quote</button>
          </div>
        </div>
      </nav>

      {/* Pages */}
      <div style={{ paddingTop: 36 }}>
        {page === "Home"     && <HomePage onNavigate={navigate} onViewDetail={setModalProduct} onRequestQuote={requestQuote} />}
        {page === "Products" && <ProductsPage onViewDetail={setModalProduct} onRequestQuote={requestQuote} />}
        {page === "Parts"    && <PartsPage onNavigate={navigate} />}
        {page === "Services" && <ServicesPage />}
        {page === "Company"  && <CompanyPage />}
        {page === "Contact"  && 
        (<ContactPage quoteProduct={quoteProduct} onClearQuote={() => setQuoteProduct(null)}/>)}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">CA Machine Tools</div>
              <p className="footer-tagline">Precision machine tools from Czech Republic & Slovakia, backed by local service & parts in Canada.</p>
              
              {/* Social Links */}
              <div className="footer-socials">
                {SOCIAL_LINKS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox={s.viewBox}
                      fill={s.color}
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Products", links: ["New Equipment", "Used Equipment", "Band Saws", "Boring Mills", "Lathes", "Milling Machines"] },
              { title: "Company", links: ["Company Profile", "Services", "Spare Parts", "Contact"] },
              { title: "Contact", links: ["+1 (403) 649-3240", "Okotoks, AB, Canada", "T1S 1Z6"] },
            ].map(col => (
              <div key={col.title}>
                <div className="footer-col-title">{col.title}</div>
                <ul className="footer-links">
                  {col.links.map(l => <li key={l} onClick={() => navigate(getFooterPage(col.title, l))}>{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 CA Machine Tools Inc. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onRequestQuote={requestQuote}
        />
      )}
    </>
  );
}

export default App;
