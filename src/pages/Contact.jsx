import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { reviews } from "../data.js";
import {
  IconPhone, IconMail, IconPin, IconClock, IconStar, IconCheck,
} from "../components/Icons.jsx";

const services = [
  "Commercial Build",
  "Residential / Smart Home",
  "Renovation & Retrofit",
  "Infrastructure",
  "Modular Construction",
  "General Consultation",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    setSubmitted(false);
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email";
    if (!form.phone.trim()) er.phone = "Please enter a phone number";
    if (!form.service) er.service = "Select a service";
    if (!form.date) er.date = "Pick a preferred date";
    if (!form.time) er.time = "Pick a preferred time";
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h1>Book your <span className="gradient-text">appointment</span></h1>
            <p>Tell us about your project and lock in a free consultation. Our team replies within 24 hours.</p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container contact-grid">
          {/* INFO */}
          <Reveal className="info-card glass">
            <div className="info-row">
              <div className="ic"><IconPin /></div>
              <div>
                <div className="label">Visit Us</div>
                <div className="val">88 Skyline Tower, Neo District, Metropolis 10110</div>
              </div>
            </div>
            <div className="info-row">
              <div className="ic"><IconPhone /></div>
              <div>
                <div className="label">Call Us</div>
                <div className="val">+1 (555) 240-7788</div>
              </div>
            </div>
            <div className="info-row">
              <div className="ic"><IconMail /></div>
              <div>
                <div className="label">Email Us</div>
                <div className="val">build@constructx.io</div>
              </div>
            </div>
            <div className="info-row">
              <div className="ic"><IconClock /></div>
              <div>
                <div className="label">Working Hours</div>
                <div className="val">Mon – Sat · 8:00 AM – 6:00 PM</div>
              </div>
            </div>

            <div className="glass" style={{ padding: 20, border: "1px solid var(--border-strong)" }}>
              <div className="stars"><IconStar /><IconStar /><IconStar /><IconStar /><IconStar /></div>
              <p style={{ marginTop: 10, color: "var(--text)" }}>
                Rated <b>4.9/5</b> by 450+ happy clients across the region.
              </p>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={120} className="form-card glass">
            <h3>Schedule a Consultation</h3>
            <p>Fill in the details below and we'll confirm your slot.</p>

            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" value={form.name} onChange={update} placeholder="Jane Doe" />
                  {errors.name && <FieldError msg={errors.name} />}
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="jane@email.com" />
                  {errors.email && <FieldError msg={errors.email} />}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={update} placeholder="+1 555 000 0000" />
                  {errors.phone && <FieldError msg={errors.phone} />}
                </div>
                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={form.service} onChange={update}>
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <FieldError msg={errors.service} />}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="date">Preferred Date</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={update} />
                  {errors.date && <FieldError msg={errors.date} />}
                </div>
                <div className="field">
                  <label htmlFor="time">Preferred Time</label>
                  <input id="time" name="time" type="time" value={form.time} onChange={update} />
                  {errors.time && <FieldError msg={errors.time} />}
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell us about your project, location and goals..." />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Request Appointment
              </button>

              {submitted && (
                <div className="form-success">
                  <IconCheck style={{ width: 20 }} />
                  Thank you! Your appointment request has been received — we'll confirm shortly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Reviews</span>
            <h2>What our clients <span className="gradient-text">say</span></h2>
            <p>Real feedback from the people who trusted us to build their future.</p>
          </Reveal>

          <div className="review-grid">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 70} className="review glass">
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
    </>
  );
}

function FieldError({ msg }) {
  return (
    <span style={{ color: "#fda4af", fontSize: "0.8rem" }}>{msg}</span>
  );
}
