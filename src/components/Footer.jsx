import { NavLink } from "react-router-dom";
import { CONTACT } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: "1rem" }}>
              <span className="brand-mark">RK</span>
              <span className="brand-text">
                <strong style={{ color: "#fff" }}>Rohid Khan</strong>
                <span style={{ color: "rgba(255,255,255,0.55)" }}>Architect &amp; Educator</span>
              </span>
            </div>
            <p style={{ maxWidth: "34ch", fontSize: "0.92rem" }}>
              Teaching architecture as a practice of thinking clearly about
              people, place and material — and building a portfolio that proves it.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/classes">Classes</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
            </ul>
          </div>

          <div>
            <h4>Get Started</h4>
            <ul className="footer-links">
              <li><NavLink to="/upload">Upload a Project</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/classes">Enroll Now</NavLink></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <p className="footer-word" aria-hidden="true">ROHID KHAN</p>
        <p className="copyright">
          © {new Date().getFullYear()} Rohid Khan Architects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
