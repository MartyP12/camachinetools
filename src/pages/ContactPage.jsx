
import { useState } from "react";


function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    form.reset();
    setSent(true);
  };

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
              { label: "Head Office", value: "1440 52 St NE #313\nCalgary, AB T2A 4T8" },
              { label: "Phone", value: <><a href="tel:+14036493240">+1 (403) 649-3240</a> (office)<br /> </> },
              { label: "Hours", value: "Mon–Fri 08:00 – 17:00 MT\nUrgent service line available after hours" },
              { label: "Sales & Inquiries", value: <><a href="mailto:info@canameramachinetools.com">info@canameramachinetools.com</a></> },
              { label: "Parts Ordering", value: "Same phone / email. Reference SKU and machine serial if available." },
            ].map(c => (
              <div key={c.label} className="contact-card">
                <div className="contact-card-label">{c.label}</div>
                <div className="contact-card-value" style={{ whiteSpace: "pre-line" }}>{c.value}</div>
              </div>
            ))}
          </div>
          <form className="contact-form" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            {sent
              ? <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16, color: "var(--success)" }}>✓</div>
                  <div style={{ fontFamily: "var(--font-head)", fontSize: 28, fontWeight: 800, textTransform: "uppercase", marginBottom: 10 }}>Message Sent</div>
                  <p style={{ fontSize: 14, color: "var(--muted)" }}>We'll get back to you within 1 business day.</p>
                  <button type="button" className="btn-secondary" style={{ marginTop: 20 }} onClick={() => setSent(false)}>Send Another</button>
                </div>
              : <>
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-title">Send a Message</div>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label" htmlFor="contact-name">Your Name</label><input id="contact-name" name="name" className="form-input" placeholder="John Smith" /></div>
                    <div className="form-group"><label className="form-label" htmlFor="contact-company">Company</label><input id="contact-company" name="company" className="form-input" placeholder="Acme Manufacturing" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label className="form-label" htmlFor="contact-phone">Phone</label><input id="contact-phone" name="phone" className="form-input" placeholder="+1 (___) ___-____" /></div>
                    <div className="form-group"><label className="form-label" htmlFor="contact-email">Email</label><input id="contact-email" name="email" className="form-input" type="email" placeholder="you@company.com" /></div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject / Product</label>
                    <select id="contact-subject" name="subject" className="form-select">
                      <option value="">Select a subject…</option>
                      <option>New Equipment Inquiry</option>
                      <option>Used Equipment Inquiry</option>
                      <option>Spare Parts Request</option>
                      <option>Service / Repair</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message / Order Details</label>
                    <textarea id="contact-message" name="message" className="form-textarea" placeholder="Include SKU, quantity, specifications, timeline, or any other relevant details…" />
                  </div>
                  <button type="submit" className="form-submit">Send Message</button>
                </>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
