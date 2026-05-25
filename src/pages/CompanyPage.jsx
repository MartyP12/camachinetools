import { manufacturerLogos } from "../data/manufacturers";

function CompanyPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-breadcrumb">Home &nbsp;/&nbsp; Company Profile</div>
          <h1 className="page-title">Company<br />Profile</h1>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <h2>Fine Machinery for Your Shop</h2>
            <p>
              CanAmera Machine Tools is an authorised importer of new <strong>RETOS VARNSDORF</strong> horizontal boring mills, new <strong>TRENS (TOS Trencin) Lathes</strong>, 
              new heavy duty lathes, <strong>TDZ TURN</strong> vertical lathes, used <strong>TOS</strong> boring mills, and other equipment from Czech Republic and Slovakia.
              We offer high quality heavy duty machinery as well as long term partnership to support your immediate and after sale needs.
              We provide spare parts for TOS Varnsdorf boring mills as well as parts for most of "TOS" brand machine tools. We stock most parts at our location and usually ship them the same day.
              When you have any question or need for our assistance, contact us today! CanAmera Machine Tools Inc. is a new name for long term presence of TOS machine tools on the North American market.
            </p>
          </div>
          <div>
            <div className="about-info">
              <div style={{ fontFamily: "var(--font-head)", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--muted)", marginBottom: 16 }}>Company Details</div>
              {[
                { icon: "◆", label: "Legal Name", value: "CanAmera Machine Tools Inc." },
                { icon: "📍", label: "Address", value: "14-900 Village Lane, Suite 1014\nOkotoks, Alberta, Canada T1S 1Z6" },
                { icon: "☎", label: "Phone", value: "Tel: +1 (403) 649-3240\nCell: +1 (905) 878-0888" },
                { icon: "🌍", label: "Service Area", value: "Canada (primary: Western Canada & Ontario)" },
                { icon: "⚙", label: "Specialization", value: "HBMs, Lathes, Milling Machines, Band Saws" },
                { icon: "◉", label: "Origin", value: "Czech Republic & Slovakia" },
              ].map(r => (
                <div key={r.label} className="about-info-row">
                  <div className="about-info-icon">{r.icon}</div>
                  <div>
                    <div className="about-info-label">{r.label}</div>
                    <div className="about-info-value" style={{ whiteSpace: "pre-line" }}>{r.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

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

export default CompanyPage;
