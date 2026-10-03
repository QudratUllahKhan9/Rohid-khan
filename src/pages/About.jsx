import { Link } from "react-router-dom";
import { CONTACT } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <div className="about-media">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=70"
                alt="Architect working at a drafting table"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <span className="eyebrow">About</span>
              <h2 className="section-title">
                Ar. Rohid Khan — architect, educator and design mentor
              </h2>
              <p className="section-lead">
                For more than a decade, the practice has designed residential,
                cultural and commercial projects while teaching the next
                generation of architects. The conviction behind both: good
                architecture changes how people live, and it can be taught.
              </p>
              <ul className="about-highlights">
                <li><span className="tick">✓</span> Formal architecture education (B.Arch) with postgraduate specialization in sustainable design</li>
                <li><span className="tick">✓</span> Selected residential, public and commercial projects delivered across India and the UAE</li>
                <li><span className="tick">✓</span> Mentored 120+ students, many now placed in established design practices</li>
                <li><span className="tick">✓</span> Guest lecturer at architecture colleges and design workshops</li>
              </ul>
              <p style={{ color: "var(--ink-2)" }}>
                Classes are deliberately project-based. Theory is kept in
                service of making — every student finishes with a resolved
                portfolio piece, published to this site's gallery with
                personal critique.
              </p>
              <div className="credential-strip">
                <span>B.Arch</span>
                <span>M.Arch Sustainable Design</span>
                <span>Practicing Architect</span>
                <span>Design Educator</span>
              </div>
              <Link to="/classes" className="btn btn-dark" style={{ marginTop: "2.2rem" }}>
                View Classes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- placeholder notice for demo content --- */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: "820px", textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>Before Launch</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)" }}>
            Replace the sample content
          </h2>
          <p className="section-lead" style={{ marginInline: "auto" }}>
            All figures, project entries and testimonials on this demo are
            clearly marked placeholders. Update them in{" "}
            <code style={{ background: "var(--accent-tint)", padding: "0.1rem 0.4rem", borderRadius: "3px" }}>
              src/data/site.js
            </code>{" "}
            — one file, one edit, the whole site updates. Want the contact
            details wired up? Email <strong>{CONTACT.email}</strong> is also
            just a placeholder for now.
          </p>
        </div>
      </section>
    </>
  );
}
