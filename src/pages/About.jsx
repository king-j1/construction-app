import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import {
  IconArrow, IconShield, IconLeaf, IconBolt, IconRuler, IconStar,
} from "../components/Icons.jsx";

const values = [
  { icon: IconShield, title: "Safety First", desc: "Zero-compromise safety culture with a record well above industry standard." },
  { icon: IconLeaf, title: "Sustainable by Design", desc: "Net-zero targets, recycled materials and energy-smart systems on every build." },
  { icon: IconBolt, title: "Speed Through Tech", desc: "Robotics, BIM and modular methods cut timelines without cutting corners." },
  { icon: IconRuler, title: "Millimeter Precision", desc: "Digital twins and laser layout keep every structure perfectly true." },
];

const team = [
  { name: "Elena Voss", role: "Chief Architect" },
  { name: "Raj Malhotra", role: "Head of Engineering" },
  { name: "Tomas Berg", role: "Site Operations Lead" },
  { name: "Naomi Clark", role: "Sustainability Director" },
];

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h1>Engineering the future of <span className="gradient-text">construction</span></h1>
            <p>For nearly two decades, ConstructX has merged human craftsmanship with cutting-edge technology to redefine what's possible in building.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container about-grid">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", margin: "16px 0" }}>
              Built on bold ideas and <span className="gradient-text">solid ground</span>
            </h2>
            <p style={{ marginBottom: 16 }}>
              What began as a small crew with big dreams is now a future-focused construction
              firm trusted across the region. We invested early in robotics, digital twins and
              sustainable materials — and it shows in every project we deliver.
            </p>
            <p>
              Today our multidisciplinary team of architects, engineers and technologists works
              as one, turning ambitious blueprints into landmarks that stand the test of time.
            </p>
            <div className="hero-stats" style={{ marginTop: 36 }}>
              <div className="stat"><div className="num">450+</div><div className="label">Projects</div></div>
              <div className="stat"><div className="num">320</div><div className="label">Specialists</div></div>
              <div className="stat"><div className="num">12</div><div className="label">Design Awards</div></div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="value-list">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="value-item glass">
                    <div className="ic"><Icon /></div>
                    <div>
                      <h3>{v.title}</h3>
                      <p>{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="cta-band" style={{ background: "var(--panel-strong)" }}>
            <span className="eyebrow">Our Mission</span>
            <h2 style={{ marginTop: 16 }}>
              To build spaces that are <span className="gradient-text">smart, sustainable and human</span>
            </h2>
            <p>
              We believe the buildings of tomorrow should think, adapt and give back to the
              planet. Every project is a step toward that future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Leadership</span>
            <h2>The minds behind the <span className="gradient-text">build</span></h2>
            <p>A seasoned team of visionaries leading every project from concept to completion.</p>
          </Reveal>

          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80} className="team-card glass">
                <div className="avatar">{m.name.charAt(0)}</div>
                <h3>{m.name}</h3>
                <div className="role">{m.role}</div>
                <div className="stars" style={{ justifyContent: "center", marginTop: 12 }}>
                  {Array.from({ length: 5 }).map((_, k) => <IconStar key={k} />)}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="cta-band" style={{ marginTop: 72 }}>
            <h2>Let's build your <span className="gradient-text">vision</span></h2>
            <p>Partner with a team obsessed with quality, speed and the future of construction.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation <IconArrow />
              </Link>
              <Link to="/projects" className="btn btn-ghost">See Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
