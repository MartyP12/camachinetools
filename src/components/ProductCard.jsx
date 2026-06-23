import { formatPrice, getCategoryIcon } from "../Utilities";

function ProductCard({ product, onViewDetail, onRequestQuote }) {
  const icon = getCategoryIcon(product.category);
  const image = product.image || product.images?.[0];

  return (
    <div className="product-card">
      <div className={`product-img ${image ? "has-image" : ""}`}>
        {image
          ? <img className="product-photo" src={image} alt={product.name} loading="lazy" />
          : <div className="product-img-inner" style={{ fontSize: 72 }}>{icon}</div>
        }
        <div className={`product-condition-badge ${product.condition === "new" ? "badge-new" : "badge-used"}`}>
          {product.condition}
        </div>
      </div>
      <div className="product-body">
        <div className="product-sku">{product.sku}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-short">{product.short}</div>
        <div className="product-tags">
          {product.tags.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        {product.price
          ? <div className="product-price">{formatPrice(product.price)}<span style={{ fontSize: 13, color: "var(--muted)", fontWeight: 400, marginLeft: 4 }}>CAD</span></div>
          : <div className="product-price-rfi">RFI — Request for info</div>
        }
      </div>
      <div className="product-actions">
        <button
          className="btn-cart"
          style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--accent)" }}
          onClick={() => onRequestQuote(product)}
        >
          Request Quote
        </button>
        <button className="btn-detail" onClick={() => onViewDetail(product)}>Info</button>
      </div>
    </div>
  );
}

export default ProductCard;
