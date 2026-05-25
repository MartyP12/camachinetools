import { PARTS_CATEGORIES } from "../data/catalog";

function PartsPage({ onNavigate }) {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-breadcrumb">Home &nbsp;/&nbsp; Spare Parts</div>
          <h1 className="page-title">Spare<br />Parts</h1>
          <p className="page-subtitle">Genuine and high-quality replacement parts for TOS brand machine tools, with local stock in Alberta.</p>
        </div>
        <div className="parts-info-box">
          <strong>CanAmera carries parts for most TOS brand machines</strong> — including RETOS, TOS Olomouc, TOS Trencin, and TRENS equipment.
          Major HBM parts are stocked in Alberta for quick turnaround. We also assist with identification of parts for older machines
          and can place custom orders for less common components. <strong>Call +1 (403) 649-3240</strong> or use our inquiry form.
        </div>
        <div className="parts-grid">
          {PARTS_CATEGORIES.map(p => (
            <div key={p.id} className="parts-card">
              <div className="parts-card-label">{p.label}</div>
              <div className="parts-card-desc">{p.desc}</div>
              <button className="parts-inq-btn" onClick={() => onNavigate("Contact")}>Inquire →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartsPage;
