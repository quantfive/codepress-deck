import type { SlideRoute } from "./slideRoutes";

export type SlideSeoMeta = {
  title: string;
  description: string;
  image?: string;
};

const heroImage = "/deck/hero-slide/hello-world-graphic.webp";

export const defaultSlideMeta: SlideSeoMeta = {
  title: "CodePress Deck",
  description:
    "Explore how CodePress helps teams ship marketing and product pages instantly while keeping engineers in control.",
  image: heroImage,
};

export const slideMeta: Record<SlideRoute, SlideSeoMeta> = {
  "/slides/hero": {
    title: "CodePress Deck | Next-gen publishing layer",
    description:
      "CodePress delivers Squarespace-like simplicity inside your codebase so marketing and design teams ship updates instantly.",
    image: heroImage,
  },
  "/slides/why": {
    title: "CodePress Deck | Why we’re building CodePress",
    description:
      "Code is powerful but inaccessible to most; we remove the barriers so non‑engineers can ship with confidence.",
  },
  "/slides/wedge": {
    title: "CodePress Deck | Initial wedge",
    description:
      "Start with on-brand landing pages powered by your components to unlock iteration speed and control.",
  },
  "/slides/takeover": {
    title: "CodePress Deck | Expansion path",
    description:
      "From landing pages to full site and app experiences, bringing your whole team into the loop.",
  },
  "/slides/team": {
    title: "CodePress Deck | Meet the builders",
    description:
      "Founding team with 8 years working together at Q5; $12m+ revenue and multiple senior engineers.",
    image: heroImage,
  },
  "/slides/competitive": {
    title: "CodePress Deck | Competitive landscape",
    description:
      "CodePress blends no-code ease, AI agents, and real code to combine the best of Webflow, Cursor, and AI page builders.",
  },
  "/slides/demo": {
    title: "CodePress Deck | Interactive product demo",
    description:
      "Navigate a live demo that showcases marketing pages, dashboards, and Kanban flows built inside one deck experience.",
    image: heroImage,
  },
  "/slides/ask": {
    title: "CodePress Deck | Funding ask",
    description:
      "We are raising $3-5M on a ~$30M post-money SAFE to bring the Q5 team aboard, launch CodePress, and reach $1M ARR.",
  },
};

export function resolveSlideMeta(route: string | null | undefined) {
  const normalized = (route ?? "").split("?")[0] as SlideRoute | "";
  if (normalized && normalized in slideMeta) {
    return slideMeta[normalized as SlideRoute];
  }
  return defaultSlideMeta;
}
