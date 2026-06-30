import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/catalog";
import { manufacturerLogos } from "../data/manufacturers";

function HomePage({ onNavigate, onViewDetail, onRequestQuote }) {
  const featured = PRODUCTS.filter(p => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="hero-eyebrow">Okotoks, Alberta</div>
          <h1 className="hero-title">
            Precision<br />Machine<br /><em>Tools.</em>
          </h1>
          <p className="hero-subtitle">
            Canadian importer of high-quality machine tools from RETOS, TRENS, TURN, TOS Olomouc and PILOUS.
            Browse our selection and contact us for a quote or with any questions.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => onNavigate("Products")}>Browse Products</button>
            <button className="btn-secondary" onClick={() => onNavigate("Contact")}>Request a Quote</button>
          </div>
          <div className="hero-stats">
            {[["40+", "Band Saw Models"], ["4\"", "HBM Spindle"], ["12m", "Max Turning Length"], ["24h", "Parts Response"]].map(([v, l]) => (
              <div key={l}>
                <div className="hero-stat-value">{v}</div>
                <div className="hero-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section" style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-tag">Product Lines</div>
              <h2 className="section-title">What We Supply</h2>
            </div>
            <button className="section-link" onClick={() => onNavigate("Products")}>All Products →</button>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map(c => (
              <div key={c.id} className="cat-card" onClick={() => onNavigate("Products")}>
                <div className="cat-icon">{c.icon}</div>
                <div>
                  <div className="cat-label">{c.label}</div>
                  <div className="cat-sub">{c.sub.join(" · ")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-tag">Selection</div>
              <h2 className="section-title">Featured Equipment</h2>
            </div>
            <button className="section-link" onClick={() => onNavigate("Products")}>View All →</button>
          </div>
          <div className="product-grid">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} onViewDetail={onViewDetail} onRequestQuote={onRequestQuote} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Manufacturer Logos */}
      <section style={{ background: "var(--surface)", borderTop: "2px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "48px 0" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 36, justifyContent: "center", textAlign: "center"}}>
              <div className="section-title" style={{ fontSize: 35, fontWeight: 600 }}>Manufacturers</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 35, flexWrap: "wrap" }}>
            {manufacturerLogos.map(m => (
              <a key={m.id} href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <div style={{ width: 200, height: 72, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <img 
                    src={m.logo} 
                    alt={m.name} 
                    style={{ height: 48, maxWidth: 170, objectFit: "contain", ...m.imgStyle }} />
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)", textDecoration: "underline" }}>{m.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
