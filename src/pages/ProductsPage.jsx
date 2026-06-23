import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { CATEGORIES, PRODUCTS } from "../data/catalog";

function ProductsPage({ onViewDetail, onRequestQuote }) {
  const [activeCat, setActiveCat] = useState("all");
  const [condition, setCondition] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p => {
    if (activeCat !== "all" && p.category !== activeCat) return false;
    if (condition !== "all" && p.condition !== condition) return false;
    if (search) {
      const q = search.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
    }
    return true;
  });

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-breadcrumb">Home &nbsp;/&nbsp; Products</div>
          <h1 className="page-title">Equipment<br />Catalog</h1>
          <p className="page-subtitle">New and used machine tools from top Czech & Slovak manufacturers.</p>
        </div>

        <div className="filter-bar">
          <input className="search-box" placeholder="Search SKU, model name, type…" value={search} onChange={e => setSearch(e.target.value)} />
          <div style={{ width: 1, height: 28, background: "var(--border)" }} />
          {["all", "new", "used"].map(c => (
            <button key={c} className={`filter-btn ${condition === c ? "active" : ""}`} onClick={() => setCondition(c)}>
              {c === "all" ? "All" : c === "new" ? "New" : "Used"}
            </button>
          ))}
          <div style={{ width: 1, height: 28, background: "var(--border)" }} />
          {[{ id: "all", label: "All Categories" }, ...CATEGORIES].map(c => (
            <button key={c.id} className={`filter-btn ${activeCat === c.id ? "active" : ""}`} onClick={() => setActiveCat(c.id)}>
              {c.label}
            </button>
          ))}
          <div className="filter-spacer" />
          <span className="filter-count">{filtered.length} results</span>
        </div>

        {filtered.length === 0
          ? <div style={{ textAlign: "center", padding: "80px 0", color: "var(--title)", fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>No products match your filters</div>
          : <div className="product-grid">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onViewDetail={onViewDetail} onRequestQuote={onRequestQuote} />
              ))}
            </div>
        }
      </div>
    </div>
  );
}

export default ProductsPage;
