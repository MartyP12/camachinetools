function ProductModal({ product, onClose, onRequestQuote }) {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <div className="modal-sku">SKU: {product.sku} &nbsp;·&nbsp; {product.condition === "new" ? "New Equipment" : "Used Equipment"}</div>
            <div className="modal-name">{product.name}</div>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{product.short}</p>
          <table className="specs-table">
            <thead><tr><th>Specification</th><th>Value</th></tr></thead>
            <tbody>
              {Object.entries(product.specs).map(([k, v]) => (
                <tr key={k}><td>{k}</td><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
          <div className="product-tags" style={{ marginBottom: 20 }}>
            {product.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="modal-actions">
            <button className="btn-cart" style={{ flex: 1, padding: "12px" }} onClick={() => onRequestQuote(product)}>
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
