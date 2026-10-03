import { useState } from "react";
import { PROGRAMS, CONTACT } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";

export default function Classes() {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [done, setDone] = useState(false);

  const openForm = (program) => {
    setSelected(program);
    setDone(false);
    setForm({ name: "", email: "", phone: "" });
    requestAnimationFrame(() => {
      document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const apps = JSON.parse(localStorage.getItem("rk_enrollments") || "[]");
    apps.push({
      ...form,
      program: selected?.title,
      at: new Date().toISOString(),
    });
    localStorage.setItem("rk_enrollments", JSON.stringify(apps));
    setDone(true);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Programs</span>
            <h2 className="section-title">Choose your program</h2>
            <p className="section-lead">
              Small cohorts, live instruction, recorded backups and personal
              mentorship — every program includes a portfolio project.
            </p>
          </div>

          <div className="grid-2">
            {PROGRAMS.map((c, i) => (
              <Reveal key={c.id} delay={(i % 2) * 90}>
                <article className="card program-card">
                  <div className="program-meta">
                    <span className="pill">{c.level}</span>
                    <span className="pill pill-dark">{c.duration}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="program-foot">
                    <span className="price">
                      {c.price}
                      <small>Full course fee</small>
                    </span>
                    <button className="btn btn-primary btn-sm" onClick={() => openForm(c)}>
                      Enroll
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="enroll">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Enrollment</span>
            <h2 className="section-title">
              {selected ? selected.title : "Enrollment request"}
            </h2>
            <p className="section-lead" style={{ marginInline: "auto" }}>
              {selected
                ? "Fill in your details below — you will receive a confirmation call within 24 hours."
                : "Select a program above first; the request form will appear here."}
            </p>
          </div>

          <div className="card form-card">
            <form onSubmit={submit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="en-name">Full name</label>
                  <input
                    id="en-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    disabled={!selected}
                  />
                </div>
                <div className="field">
                  <label htmlFor="en-email">Email</label>
                  <input
                    id="en-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    disabled={!selected}
                  />
                </div>
                <div className="field full">
                  <label htmlFor="en-phone">Phone / WhatsApp</label>
                  <input
                    id="en-phone"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 ..."
                    disabled={!selected}
                  />
                </div>
                <p className="form-note">
                  Selected program: <strong>{selected ? selected.title : "—"}</strong>
                  {" · "}Questions? {CONTACT.phone}
                </p>
                <div className="field full">
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ width: "100%" }}
                    disabled={!selected}
                  >
                    Request Enrollment
                  </button>
                </div>
              </div>
              {done && (
                <p className="success-msg">
                  ✓ Request saved, {form.name}. Your seat request for
                  “{selected?.title}” has been recorded — the studio will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
