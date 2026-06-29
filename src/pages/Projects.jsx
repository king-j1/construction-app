import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data.js";
import { IconArrow } from "../components/Icons.jsx";

const categories = ["All", "Commercial", "Residential", "Industrial", "Infrastructure"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Portfolio</span>
            <h1>Projects that define <span className="gradient-text">skylines</span></h1>
            <p>Explore a selection of the commercial, residential and civic landmarks we've engineered.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <Reveal className="filter-bar">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? "active" : ""}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </Reveal>

          <div className="project-grid">
            {list.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 60}
                className="project-card"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <span className="tag">{p.category}</span>
                <h3>{p.title}</h3>
                <div className="meta">{p.location} · {p.year}</div>
              </Reveal>
            ))}
          </div>

          {list.length === 0 && (
            <p style={{ textAlign: "center", marginTop: 40 }}>No projects in this category yet.</p>
          )}

          <Reveal className="cta-band" style={{ marginTop: 72 }}>
            <h2>Have a project in <span className="gradient-text">mind?</span></h2>
            <p>Let's turn your vision into the next landmark on this list.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <IconArrow />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
