import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { projects, reviews } from "../data.js";
import {
  IconArrow, IconBuilding, IconHardHat, IconLeaf, IconLayers,
  IconBolt, IconCube, IconShield, IconStar, IconCheck,
} from "../components/Icons.jsx";

const services = [
  { icon: IconBuilding, title: "Commercial Builds", desc: "Smart towers, offices and retail spaces engineered for the next century." },
  { icon: IconHardHat, title: "Residential & Smart Homes", desc: "Automated, energy-aware homes designed around how you actually live." },
  { icon: IconLayers, title: "Renovation & Retrofit", desc: "Breathe new life and intelligence into existing structures." },
  { icon: IconBolt, title: "Infrastructure", desc: "Bridges, roads and civic works built with robotic precision." },
  { icon: IconCube, title: "Modular Construction", desc: "Prefab, factory-grade modules assembled on-site in record time." },
  { icon: IconLeaf, title: "Sustainable Design", desc: "Net-zero materials and systems that build a greener tomorrow." },
];

const steps = [
  { n: "01", title: "Discovery", desc: "We map your vision, site and budget into a clear digital blueprint." },
  { n: "02", title: "Design & BIM", desc: "Photoreal 3D models and simulations before a single brick is laid." },
  { n: "03", title: "Build", desc: "Robotics, modular crews and live tracking keep everything on time." },
  { n: "04", title: "Handover", desc: "Smart-systems training, warranty and lifetime support included." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">▹ Building the Future, Today</span>
            <h1>
              We Build <span className="gradient-text">Tomorrow's</span> Skylines
            </h1>
            <p>
              ConstructX fuses robotics, sustainable materials and bold architecture
              to deliver buildings that are smarter, faster and built to last.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Appointment <IconArrow />
              </Link>
              <Link to="/projects" className="btn btn-ghost">
                View Projects
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="num">450+</div>
                <div className="label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="num">18</div>
                <div className="label">Years of Excellence</div>
              </div>
              <div className="stat">
                <div className="num">99%</div>
                <div className="label">On-Time Handover</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="hero-visual">
              <div className="wire">
                <svg viewBox="0 0 200 240" fill="none" stroke="#22d3ee" strokeWidth="1.4">
                  <path d="M40 220V70l60-40 60 40v150" />
                  <path d="M40 70l60 40 60-40M100 110v110" opacity="0.7" />
                  <path d="M55 95v110M75 105v100M125 105v100M145 95v110" opacity="0.4" />
                  <path d="M40 130h120M40 165h120M40 200h120" opacity="0.4" />
                  <circle cx="100" cy="30" r="4" fill="#22d3ee" />
                </svg>
              </div>
              <div className="float-card glass fc-1">
                <span className="dot" /> Live build: 92% complete
              </div>
              <div className="float-card glass fc-2">
                <IconShield style={{ width: 18, color: "var(--accent)" }} /> ISO 9001 Certified
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k}>
              Robotics&nbsp;•&nbsp;BIM Modeling&nbsp;•&nbsp;Net-Zero&nbsp;•&nbsp;Smart Homes&nbsp;•&nbsp;Modular&nbsp;•&nbsp;Infrastructure&nbsp;•&nbsp;Precision Engineering&nbsp;•&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Full-spectrum construction, <span className="gradient-text">reinvented</span></h2>
            <p>From the first sketch to the final smart switch, we handle every layer of the build with future-ready technology.</p>
          </Reveal>

          <div className="grid-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 80} className="feature glass">
                  <div className="ic"><Icon /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How We Build</span>
            <h2>A process engineered for <span className="gradient-text">certainty</span></h2>
            <p>Four precise phases keep your project transparent, on budget and ahead of schedule.</p>
          </Reveal>

          <div className="steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80} className="step glass">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Featured Work</span>
            <h2>Signature <span className="gradient-text">projects</span></h2>
            <p>A glimpse of the landmarks we've brought to life across the city.</p>
          </Reveal>

          <div className="project-grid">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 80}
                className="project-card"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <div className="meta">{p.location} · {p.year}</div>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/projects" className="btn btn-ghost">
              Explore All Projects <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Client Voices</span>
            <h2>Trusted by <span className="gradient-text">visionaries</span></h2>
            <p>Hundreds of clients have built their future with us. Here's what they say.</p>
          </Reveal>

          <div className="review-grid">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 80} className="review glass">
                <div className="stars">
                  {Array.from({ length: r.rating }).map((_, k) => <IconStar key={k} />)}
                </div>
                <p>"{r.text}"</p>
                <div className="who">
                  <div className="ava">{r.name.charAt(0)}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="loc">{r.loc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band">
            <h2>Ready to build something <span className="gradient-text">legendary?</span></h2>
            <p>Book a free consultation and get a digital blueprint of your project within 48 hours.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Appointment <IconArrow />
              </Link>
              <Link to="/about" className="btn btn-ghost">
                Why ConstructX <IconCheck />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
