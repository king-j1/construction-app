import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#060a14]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-6 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-100">
              Ruvasgod Ghana Ltd
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300/95">
              Building Ghana&apos;s sustainable future through engineering excellence,
              infrastructure delivery, renewable energy, and technology innovation.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li><Link to="/about" className="transition hover:text-cyan-200">About</Link></li>
              <li><Link to="/about" className="transition hover:text-cyan-200">Leadership</Link></li>
              <li><Link to="/" className="transition hover:text-cyan-200">Vision</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li><Link to="/" className="transition hover:text-cyan-200">Electrical Engineering</Link></li>
              <li><Link to="/" className="transition hover:text-cyan-200">Construction & Infrastructure</Link></li>
              <li><Link to="/" className="transition hover:text-cyan-200">Renewable Energy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Projects</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li><Link to="/projects" className="transition hover:text-cyan-200">Electrical Infrastructure</Link></li>
              <li><Link to="/projects" className="transition hover:text-cyan-200">Renewable Energy</Link></li>
              <li><Link to="/projects" className="transition hover:text-cyan-200">Construction</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Innovation</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li><Link to="/projects" className="transition hover:text-cyan-200">Gogoro Initiative</Link></li>
              <li><Link to="/" className="transition hover:text-cyan-200">Smart Infrastructure</Link></li>
              <li><Link to="/" className="transition hover:text-cyan-200">Digital Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li><Link to="/contact" className="transition hover:text-cyan-200">Contact Page</Link></li>
              <li><a href="mailto:vascogalley@yahoo.com" className="transition hover:text-cyan-200">vascogalley@yahoo.com</a></li>
              <li><a href="tel:+233242445665" className="transition hover:text-cyan-200">+233 24 244 5665</a></li>
              <li><span>Accra, Ghana</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Social</span>
          <a href="#" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200">Instagram</a>
          <a href="#" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200">X</a>
          <a href="#" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200">Facebook</a>
          <a href="#" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 transition hover:border-cyan-300 hover:text-cyan-200">TikTok</a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 pt-5 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Ruvasgod Ghana Ltd. All rights reserved.</span>
          <span>Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}
