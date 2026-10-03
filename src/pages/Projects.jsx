import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data/site.js";
import Reveal from "../components/Reveal.jsx";

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Project gallery</h2>
          <p className="section-lead">
            Selected studio work alongside student projects uploaded through
            this site — a single, open record of what the studio makes.
          </p>
        </div>

        <div className="grid-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
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
          <UserUploads />
        </div>

        <div style={{ textAlign: "center", marginTop: "2.6rem" }}>
          <Link to="/upload" className="btn btn-primary">+ Upload Your Project</Link>
        </div>
      </div>
    </section>
  );
}

/** Renders student projects saved in localStorage. */
function UserUploads() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    try {
      setUploads(JSON.parse(localStorage.getItem("rk_projects") || "[]"));
    } catch {
      setUploads([]);
    }
  }, []);

  if (!uploads.length) {
    return (
      <p className="empty-note">
        Your project will appear here — use the <strong>Upload</strong> page
        to publish your work to the gallery.
      </p>
    );
  }

  return uploads.map((u) => (
    <article key={u.id} className="card project-card">
      <div className="project-media">
        {u.image ? (
          <img src={u.image} alt={u.title} />
        ) : (
          <span aria-hidden="true" style={{ fontSize: "2.2rem", opacity: 0.4 }}>
            ▦
          </span>
        )}
        <span className="chip chip-accent">Student Work</span>
      </div>
      <div className="project-body">
        <span className="loc">{u.location || "India"}</span>
        <h3>{u.title}</h3>
        <p>{u.desc}</p>
        <button
          className="project-del"
          onClick={() => {
            const next = JSON.parse(localStorage.getItem("rk_projects") || "[]").filter(
              (x) => x.id !== u.id
            );
            localStorage.setItem("rk_projects", JSON.stringify(next));
            setUploads(next);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  ));
}
