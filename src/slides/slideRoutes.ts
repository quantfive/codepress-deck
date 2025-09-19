export const slideRoutes = [
  "/slides/hero",
  "/slides/why",
  "/slides/wedge",
  "/slides/takeover",
  "/slides/demo",
  "/slides/team",
  "/slides/competitive",
  "/slides/ask",
  // "/slides/thank-you",
  // add new slides here to include in navigation order
] as const;

export type SlideRoute = (typeof slideRoutes)[number];
