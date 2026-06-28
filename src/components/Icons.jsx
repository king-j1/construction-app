/* Lightweight inline SVG icon set (stroke-based, futuristic) */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const IconBuilding = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 21h18M5 21V5l8-3v19M19 21V9l-6-2" />
    <path d="M9 9h.01M9 13h.01M9 17h.01" />
  </svg>
);

export const IconCrane = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 21h6M8 21V4l11 2M8 4 4 8M19 6v4M19 10h-3l-1 3" />
    <circle cx="14.5" cy="15.5" r="1.5" />
  </svg>
);

export const IconRuler = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 7l14 14 4-4L7 3 3 7Z" />
    <path d="M7 7l2 2M10 10l2 2M13 13l2 2" />
  </svg>
);

export const IconShield = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconBolt = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

export const IconLeaf = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z" />
    <path d="M4 20c2-4 5-7 9-9" />
  </svg>
);

export const IconCube = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
    <path d="M3 7l9 5 9-5M12 12v10" />
  </svg>
);

export const IconHardHat = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 17a9 9 0 0 1 18 0M2 17h20M10 8V5h4v3" />
  </svg>
);

export const IconLayers = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 2 2 7l10 5 10-5-10-5Z" />
    <path d="m2 12 10 5 10-5M2 17l10 5 10-5" />
  </svg>
);

export const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const IconMail = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

export const IconPin = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconStar = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
);

export const IconCheck = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m20 6-11 11-5-5" />
  </svg>
);

export const IconMenu = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const IconClose = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
