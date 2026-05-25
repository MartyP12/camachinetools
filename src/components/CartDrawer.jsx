import { formatPrice, getCategoryIcon } from "../Utilities";

function CartDrawer({ open, onClose, items, onRemove }) {
  const pricedItems = items.filter(i => i.price);
  const rfiItems = items.filter(i => !i.price);
  const total = pricedItems.reduce((s, i) => s + i.price, 0);
  return (
    <>
      <div className={`cart-overlay ${open ? "open" : ""}`} onClick={onClose} />
      <div className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <div className="cart-title">Cart / Inquiry</div>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>
        <div className="cart-body">
          {items.length === 0
            ? <div className="cart-empty"><div className="cart-empty-icon">◈</div><div>Your cart is empty</div></div>
            : items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-icon">{getCategoryIcon(item.category)}</div>
                <div style={{ flex: 1 }}>
                  <div className="cart-item-sku">{item.sku}</div>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{item.price ? formatPrice(item.price) + " CAD" : "Price on Request"}</div>
                </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.id)}>✕</button>
              </div>
            ))
          }
        </div>
        {items.length > 0 && (
          <div className="cart-footer">
            {pricedItems.length > 0 && (
              <div className="cart-total">
                <div>
                  <div className="cart-total-label">Subtotal ({pricedItems.length} priced items)</div>
                </div>
                <div className="cart-total-value">{formatPrice(total)}</div>
              </div>
            )}
            {rfiItems.length > 0 && (
              <div style={{ fontSize: 12, color: "var(--muted)" }}>
                + {rfiItems.length} item(s) priced on request
              </div>
            )}
            <p className="cart-note">
              Prices in CAD. Final pricing subject to configuration and current availability. Tax not included.
            </p>
            <button className="btn-checkout">Submit Inquiry / Order</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
