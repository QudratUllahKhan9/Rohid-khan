import { useState } from "react";
import { CONTACT } from "../data/site.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const msgs = JSON.parse(localStorage.getItem("rk_messages") || "[]");
    msgs.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("rk_messages", JSON.stringify(msgs));
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="section">
      <div className="container contact-wrap">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Start a conversation.</h2>
          <p className="section-lead">
            Admissions, project enquiries or workshop requests — send a message
            and the studio will respond within one working day.
          </p>
          <ul className="contact-list">
            <li>
              <span className="ico">✉</span>
              <div>
                <strong>Email</strong>
                <span>{CONTACT.email}</span>
              </div>
            </li>
            <li>
              <span className="ico">☎</span>
              <div>
                <strong>Phone / WhatsApp</strong>
                <span>{CONTACT.phone}</span>
              </div>
            </li>
            <li>
              <span className="ico">⌖</span>
              <div>
                <strong>Studio</strong>
                <span>{CONTACT.address}</span>
              </div>
            </li>
            <li>
              <span className="ico">◷</span>
              <div>
                <strong>Hours</strong>
                <span>{CONTACT.hours}</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <form onSubmit={submit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="field full">
                <label htmlFor="c-sub">Subject</label>
                <input
                  id="c-sub"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What is this about?"
                />
              </div>
              <div className="field full">
                <label htmlFor="c-msg">Message</label>
                <textarea
                  id="c-msg"
                  rows="5"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Write your message…"
                />
              </div>
              <div className="field full">
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ width: "100%" }}
                >
                  Send Message
                </button>
              </div>
            </div>
            {sent && (
              <p className="success-msg">
                ✓ Message received. The studio will reply shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
