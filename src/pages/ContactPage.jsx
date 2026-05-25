
import { useState } from "react";


function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="page-breadcrumb">Home &nbsp;/&nbsp; Contact</div>
          <h1 className="page-title">Get in<br />Touch</h1>
          <p className="page-subtitle">Request a quote, ask about availability, or schedule a service call.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-box">
            {[
              { label: "Head Office", value: "14-900 Village Lane, Suite 1014\nOkotoks, Alberta, Canada T1S 1Z6" },
              { label: "Phone", value: <><a href="tel:+14036493240">+1 (403) 649-3240</a> (office)<br /><a href="tel:+19058780888">+1 (905) 878-0888</a> (cell)</> },
              { label: "Hours", value: "Mon–Fri &nbsp; 08:00 – 17:00 MT\nUrgent service line available after hours" },
              { label: "Sales & Inquiries", value: <><a href="mailto:info@canameramachinetools.com">info@canameramachinetools.com</a></> },
              { label: "Parts Ordering", value: "Same phone / email. Reference SKU and machine serial if available." },
            ].map(c => (
              <div key={c.label} className="contact-card">
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-value" style={{ whiteSpace: "pre-line" }}>{c.value}</div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            {sent
              ? <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16, color: "var(--success)" }}>✓</div>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: 28, fontWeight: 800, textTransform: "uppercase", marginBottom: 10 }}>Message Sent</div>
                  <p style={{ fontSize: 14, color: "var(--muted)" }}>We'll get back to you within 1 business day.</p>
                  <button className="btn-secondary" style={{ marginTop: 20 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              : <>
                  <div className="form-title">Send a Message</div>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label">Your Name</label><input className="form-input" placeholder="John Smith" /></div>
                    <div className="form-group"><label className="form-label">Company</label><input className="form-input" placeholder="Acme Manufacturing" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label">Phone</label><input className="form-input" placeholder="+1 (___) ___-____" /></div>
                    <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" placeholder="you@company.com" /></div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject / Product</label>
                    <select className="form-select">
                      <option value="">Select a subject…</option>
                      <option>New Equipment Inquiry</option>
                      <option>Used Equipment Inquiry</option>
                      <option>Spare Parts Request</option>
                      <option>Service / Repair</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message / Order Details</label>
                    <textarea className="form-textarea" placeholder="Include SKU, quantity, specifications, timeline, or any other relevant details…" />
                  </div>
                  <button className="form-submit" onClick={() => setSent(true)}>Send Message</button>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
