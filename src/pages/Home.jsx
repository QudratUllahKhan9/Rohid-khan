import { Link } from "react-router-dom";
import { PROJECTS, STATS, PROCESS, TESTIMONIALS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero-inner">
          <span className="hero-kicker">Architecture Studio · Design Classes</span>
          <h1>
            Architecture that is <em>taught</em>, practiced and built.
          </h1>
          <p className="hero-sub">
            Rohid Khan is an architect and educator offering live design
            classes alongside a portfolio of selected work — one studio,
            one standard of craft.
          </p>
          <div className="hero-actions">
            <Link to="/classes" className="btn btn-primary">View Classes</Link>
            <Link to="/projects" className="btn btn-ghost">Explore Projects</Link>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Statement ---------- */}
      <section className="section">
        <div className="container statement-grid">
          <Reveal>
            <span className="eyebrow">The Practice</span>
            <p className="big">
              Good architecture is not decoration. It is the discipline of
              <em> thinking clearly</em> about people, place and material —
              and that discipline can be learned.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="statement-cols">
              <p>
                The studio runs on a simple idea: students learn fastest when
                they work the way professionals work. Every program is built
                around live sessions, real briefs and honest critique — not
                passive video watching.
              </p>
              <p>
                Alongside teaching, the practice takes on selected residential,
                public and commercial projects. The two sides feed each other:
                the studio keeps the classroom current, and the classroom keeps
                the studio rigorous.
              </p>
              <Link to="/about" className="text-link">
                About the studio →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Selected projects ---------- */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Selected Work</span>
              <h2 className="section-title">Featured projects</h2>
              <p className="section-lead">
                A cross-section of studio work — from climate-responsive homes
                to public cultural buildings.
              </p>
            </div>
          </Reveal>
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <article className="card project-card">
                  <div className="project-media">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="chip">{p.category}</span>
                  </div>
                  <div className="project-body">
                    <span className="loc">{p.location}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.6rem" }}>
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section-dark">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How It Works</span>
              <h2 className="section-title">From enquiry to finished portfolio</h2>
            </div>
          </Reveal>
          <div className="process-grid">
            {PROCESS.map((s, i) => (
              <Reveal key={s.num} delay={i * 80}>
                <div className="step">
                  <span className="step-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Student Voices</span>
              <h2 className="section-title">What students say</h2>
            </div>
          </Reveal>
          <div className="grid-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.role} delay={i * 90}>
                <div className="card quote-card">
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <blockquote>{t.quote}</blockquote>
                  <span className="quote-attr">— {t.role}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="placeholder-note">
            Sample quotes shown — genuine student testimonials will replace these before launch.
          </p>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta-band">
        <div className="container">
          <h2 className="section-title">Seats are limited to keep batches small.</h2>
          <p>
            Choose a program, send an enquiry and start building work you can
            actually put in front of a client.
          </p>
          <Link to="/classes" className="btn btn-light">Enroll in a Class</Link>
        </div>
      </section>
    </>
  );
}
