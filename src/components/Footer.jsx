import { Link } from "react-router-dom";
import { IconCrane, IconMail, IconPhone, IconPin } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand">
              <span className="brand-mark">
                <IconCrane />
              </span>
              <span>
                Construct<b>X</b>
              </span>
            </Link>
            <p style={{ marginTop: 18, maxWidth: 320 }}>
              Engineering tomorrow's skylines today. We blend precision robotics,
              sustainable materials and bold design to build the future.
            </p>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/contact">Commercial Builds</Link></li>
              <li><Link to="/contact">Smart Homes</Link></li>
              <li><Link to="/contact">Renovation</Link></li>
              <li><Link to="/contact">Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul>
              <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconPin style={{ width: 18, color: "var(--accent)" }} /> 88 Skyline Tower, Neo District
              </li>
              <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconPhone style={{ width: 18, color: "var(--accent)" }} /> +1 (555) 240-7788
              </li>
              <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconMail style={{ width: 18, color: "var(--accent)" }} /> build@constructx.io
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ConstructX. All rights reserved.</span>
          <span>Designed for the future of building.</span>
        </div>
      </div>
    </footer>
  );
}
