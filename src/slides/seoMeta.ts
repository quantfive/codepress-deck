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
  "/slides/problem": {
    title: "CodePress Deck | The problem we solve",
    description:
      "Product and marketing teams wait weeks for simple copy or visual tweaks; CodePress removes the bottleneck for iteration.",
  },
  "/slides/engine": {
    title: "CodePress Deck | Instant landing page engine",
    description:
      "Spin up unlimited, on-brand landing pages with reusable components, campaign-specific offers, and AI-powered flexibility.",
  },
  "/slides/how-it-works": {
    title: "CodePress Deck | How CodePress works",
    description:
      "Connect CodePress to your codebase, edit on live pages with our extension, and commit production-ready updates to GitHub in minutes.",
  },
  "/slides/competitive": {
    title: "CodePress Deck | Competitive landscape",
    description:
      "CodePress blends no-code ease, AI agents, and real code to combine the best of Webflow, Cursor, and AI page builders.",
  },
  "/slides/target-market": {
    title: "CodePress Deck | Target market",
    description:
      "Starting with tech companies that need CMS and landing page velocity today, expanding to a full website and app builder.",
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
  "/slides/thank-you": {
    title: "CodePress Deck | Thank you",
    description:
      "Thanks for exploring CodePress - let's talk about helping your team ship webpages faster than ever.",
  },
};

export function resolveSlideMeta(route: string | null | undefined) {
  const normalized = (route ?? "").split("?")[0] as SlideRoute | "";
  if (normalized && normalized in slideMeta) {
    return slideMeta[normalized as SlideRoute];
  }
  return defaultSlideMeta;
}
