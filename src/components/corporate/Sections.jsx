import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  coreValues,
  featuredProjects,
  heroImages,
  services,
  visionCommitments,
  whyRuvasgod,
} from "../../data.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mx-auto mb-14 max-w-4xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      custom={0}
    >
      <p className="eyebrow">
        {eyebrow}
      </p>
      <h2 className="section-title md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 pt-24 md:pt-30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(6,182,212,0.16),transparent_45%),radial-gradient(circle_at_100%_100%,rgba(234,179,8,0.12),transparent_42%)]" />
      <div className="section-shell relative grid gap-14 pb-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="space-y-7"
        >
          <p className="eyebrow">
            Ruvasgod Ghana Ltd
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            Building Ghana&apos;s Sustainable Future Through Engineering Innovation
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            Ruvasgod Ghana Ltd delivers engineering, construction, renewable energy, and
            infrastructure solutions that support Ghana&apos;s economic transformation and
            Africa&apos;s sustainable development.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="btn-primary"
            >
              Explore Our Services
            </a>
            <Link
              to="/contact"
              className="btn-outline"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
            <div className="surface-card px-4 py-3" style={{ backgroundImage: "linear-gradient(to bottom, rgba(34,211,238,0.1), transparent)" }}>
              <p className="text-2xl font-semibold text-cyan-200">20+</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">Years Experience</p>
            </div>
            <div className="surface-card px-4 py-3" style={{ backgroundImage: "linear-gradient(to bottom, rgba(34,211,238,0.1), transparent)" }}>
              <p className="text-2xl font-semibold text-cyan-200">5</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">Core Sectors</p>
            </div>
            <div className="surface-card px-4 py-3" style={{ backgroundImage: "linear-gradient(to bottom, rgba(34,211,238,0.1), transparent)" }}>
              <p className="text-2xl font-semibold text-cyan-200">1</p>
              <p className="text-xs uppercase tracking-wide text-slate-300">Ghana Mission</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.2}
          className="grid gap-4"
        >
          <div className="surface-card-strong relative overflow-hidden">
            <img
              src={heroImages[0].image}
              alt={heroImages[0].title}
              className="h-72 w-full object-cover md:h-96"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,6,23,0.7), transparent, transparent)" }} />
            <div className="absolute bottom-4 left-4 rounded-full border border-cyan-300/35 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
              {heroImages[0].title}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {heroImages.slice(1).map((item) => (
              <div
                key={item.title}
                className="surface-card relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(2,6,23,0.65), transparent, transparent)" }} />
                <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="section-shell relative pb-8">
        <div className="surface-card flex flex-wrap items-center gap-3 px-5 py-4 md:gap-4 md:px-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200">Operational Focus</span>
          {["Engineering", "Construction", "Renewable Energy", "Infrastructure", "Technology Innovation"].map((item) => (
            <span key={item} className="rounded-full border border-slate-600 bg-slate-800/65 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 md:py-24">
      <SectionHeader
        eyebrow="About Ruvasgod Ghana Ltd"
        title="A Ghanaian company engineering practical pathways to national growth"
        subtitle="Ruvasgod Ghana Ltd is a Ghanaian engineering and infrastructure company focused on delivering sustainable solutions across electrical engineering, construction, renewable energy, infrastructure development, and technology integration."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {coreValues.map((value, index) => (
          <motion.article
            key={value}
            className="surface-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/35"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={index * 0.08}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Core Value 0{index + 1}</p>
            <h3 className="mt-3 text-xl font-medium text-slate-100">{value}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-slate-800/80 bg-slate-950/70 py-20 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Services"
          title="Integrated engineering and infrastructure capabilities"
          subtitle="From electrical systems to future mobility platforms, we deliver execution capacity and innovation at scale."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="surface-card p-7 transition hover:-translate-y-1 hover:border-cyan-300/35"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index * 0.07}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-slate-600 bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  S0{index + 1}
                </span>
                <span className="h-px w-16" style={{ background: "linear-gradient(to right, rgba(103,232,249,0.7), transparent)" }} />
              </div>
              <h3 className="text-xl font-medium text-white">{service.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <SectionHeader
        eyebrow="Why Ruvasgod Ghana Ltd"
        title="Credibility built through execution, expertise, and long-term commitment"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whyRuvasgod.map((item, index) => (
          <motion.div
            key={item}
            className="surface-card flex items-start gap-3 px-5 py-5 text-slate-100"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={index * 0.06}
          >
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="border-y border-slate-800/80 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),rgba(15,23,42,0.85),rgba(245,158,11,0.08))] py-20 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Ghana Development Vision"
          title="We believe infrastructure is the foundation of national development"
          subtitle="Our long-term direction aligns with resilient growth, inclusion, and sustainability for Ghana and the wider region."
        />
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2">
          {visionCommitments.map((item, index) => (
            <motion.div
              key={item}
              className="surface-card rounded-xl px-4 py-3 text-slate-200"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={index * 0.05}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <SectionHeader
        eyebrow="Feature Projects"
        title="Project portfolio placeholders for upcoming case studies"
        subtitle="These blocks are intentionally structured for future replacement with verified project information and media."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="surface-card overflow-hidden transition hover:-translate-y-1 hover:border-cyan-300/35"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={index * 0.07}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="space-y-3 p-6">
              <span className="inline-flex rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
                Placeholder
              </span>
              <h3 className="text-xl font-medium text-slate-100">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function GogoroInitiativeSection() {
  return (
    <section id="innovation" className="border-y border-slate-800/80 bg-slate-950/80 py-20 md:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Gogoro Ghana Initiative"
          title="Future Mobility Infrastructure for Ghana and West Africa"
          subtitle="Ruvasgod Ghana Ltd is exploring opportunities to introduce advanced electric mobility infrastructure and battery-swapping technology solutions to Ghana and the West African region."
        />
        <motion.div
          className="mx-auto max-w-4xl rounded-2xl border border-amber-400/40 bg-amber-300/10 p-6 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.1}
        >
          <p className="text-base font-medium leading-relaxed text-amber-100 md:text-lg">
            This represents an independent strategic vision and proposal initiative.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="section-shell py-20 md:py-24">
      <SectionHeader eyebrow="Founder" title="Vasco Galley, Founder & Managing Director" />
      <div className="surface-card-strong grid gap-8 p-8 md:grid-cols-[320px,1fr] md:items-center">
        <div className="surface-card overflow-hidden bg-slate-800/80">
          <img
            src="/image/v1.jpeg"
            alt="Founder portrait placeholder"
            className="h-56 w-full object-contain md:h-72"
            loading="lazy"
            decoding="async"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0.12}
          className="space-y-4"
        >
          <p className="text-slate-300">
            Vasco Galley brings an electrical engineering foundation and over two decades
            of project experience across infrastructure and construction programs.
          </p>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Electrical engineering background</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />20+ years experience</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Infrastructure experience</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Renewable energy vision</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />Technology innovation focus</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800/80 py-20 md:py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Contact" title="Ruvasgod Ghana Ltd" />
        <motion.div
          className="surface-card-strong mx-auto grid max-w-5xl gap-5 p-8 text-slate-200 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Founder & Managing Director</p>
            <p className="mt-2 text-lg font-medium text-white">Vasco Galley</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">CEO</p>
            <p className="mt-2 text-lg font-medium text-white">Veilawoe Adamah</p>
            <a className="mt-2 block text-sm text-slate-300 hover:text-cyan-300" href="tel:+27788822658">
              Contact No: +27 78 882 2658
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Main Office Contact</p>
            <a className="mt-2 block text-lg font-medium text-white hover:text-cyan-300" href="tel:+233242445665">
              +233 24 244 5665
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Email</p>
            <a className="mt-2 block text-lg font-medium text-white hover:text-cyan-300" href="mailto:vascogalley@yahoo.com">
              vascogalley@yahoo.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Location</p>
            <p className="mt-2 text-lg font-medium text-white">Accra, Ghana</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Company</p>
            <p className="mt-2 text-lg font-medium text-white">Ruvasgod Ghana Ltd</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
