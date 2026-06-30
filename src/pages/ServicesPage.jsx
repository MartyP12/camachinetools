function ServicesPage() {
  const services = [
    { title: "Installation & Commissioning", icon: "⚙", desc: "On-site machine installation, levelling, alignment, and test cuts. Factory-trained technicians ensure your equipment starts right." },
    { title: "Preventive Maintenance", icon: "🔧", desc: "Scheduled maintenance programs to keep your machines at peak performance and extend service life." },
    { title: "Repair & Overhaul", icon: "◎", desc: "Mechanical and electrical repairs for HBMs, lathes, and milling machines. Spindle reconditioning, way scraping, and more." },
    { title: "CNC Retrofits", icon: "⊕", desc: "Upgrade older manual machines with modern CNC controls. Siemens and Fanuc retrofit packages available." },
    { title: "Operator Training", icon: "◈", desc: "On-site or remote operator and programmer training for new machine installations." },
    { title: "Parts Identification", icon: "◉", desc: "Identification and sourcing of hard-to-find parts for older TOS and RETOS machines across Canada." },
  ];
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-breadcrumb">Home &nbsp;/&nbsp; Services</div>
          <h1 className="page-title">Service &<br />Support</h1>
          <p className="page-subtitle">Factory-trained service across Western Canada. We stay committed long after the sale.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {services.map(s => (
            <div key={s.title} style={{ background: "var(--card)", border: "0px solid var(--border)", borderRadius: "var(--r)", padding: 24 }}>
              <div style={{ fontSize: 28, marginBottom: 12, color: "var(--accent)" }}>{s.icon}</div>
              <div style={{ fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>{s.title}</div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;