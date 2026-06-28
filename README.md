# ConstructX — Futuristic Building & Construction Web App

A sleek, futuristic multi-page website for a building & construction company, built with **React + Vite** and **React Router**.

## Pages

- **Home** — hero, services, build process, featured projects, reviews, CTA
- **Projects** — filterable portfolio grid (Commercial / Residential / Industrial / Infrastructure)
- **About** — story, values, mission, leadership team
- **Contact** — appointment booking form (with validation) + client reviews

## Features

- Futuristic dark theme: neon gradients, glassmorphism, animated grid background, glow effects
- Fully responsive (mobile nav, fluid grids)
- Scroll-reveal animations (IntersectionObserver)
- Client-side routing with active nav states
- Appointment form with field validation and success state

## Tech

- React 19, Vite, React Router 7
- Hand-written CSS (no UI framework) in `src/index.css`
- Inline SVG icon set (`src/components/Icons.jsx`)

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## Structure

```
src/
  components/   Navbar, Footer, Reveal, ScrollToTop, Icons
  pages/        Home, Projects, About, Contact
  data.js       projects + reviews content
  index.css     global futuristic theme
  App.jsx       routes
  main.jsx      app entry (BrowserRouter)
```
