import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/40 bg-cyan-400/15 text-xs font-extrabold text-cyan-300 shadow-[0_0_24px_-10px_rgba(34,211,238,0.7)]">
            RG
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 md:text-base">
            Ruvasgod Ghana Ltd
          </span>
        </Link>

        <div
          className={`absolute left-0 right-0 top-20 border-b border-slate-800/80 bg-slate-950/95 px-6 py-5 backdrop-blur-xl md:static md:flex md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none ${open ? "block" : "hidden md:flex"}`}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-400/15 text-cyan-200"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-cyan-200"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-cyan-400 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 transition hover:bg-cyan-300 md:inline-flex"
          >
            Contact Us
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-100 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0.5 h-0.5 w-4 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-4 bg-current transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 bg-current transition ${open ? "-translate-y-1 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
