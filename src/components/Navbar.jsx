import { NavLink } from "react-router-dom";
import { useState } from "react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/classes", label: "Classes" },
  { to: "/projects", label: "Projects" },
  { to: "/upload", label: "Upload" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">RK</span>
          <span className="brand-text">
            <strong>Rohid Khan</strong>
            <span>Architect &amp; Educator</span>
          </span>
        </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/classes" className="nav-cta" onClick={() => setOpen(false)}>
            Enroll Now
          </NavLink>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
