import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconCrane, IconMenu, IconClose, IconArrow } from "./Icons.jsx";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <IconCrane />
          </span>
          <span>
            Construct<b>X</b>
          </span>
        </Link>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-primary">
            Book Appointment <IconArrow />
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
