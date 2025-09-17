export const slideRoutes = [
  "/slides/hero",
  "/slides/problem",
  "/slides/engine",
  "/slides/how-it-works",
  "/slides/competitive",
  "/slides/target-market",
  "/slides/ask",
  "/slides/thank-you",
  // add new slides here to include in navigation order
] as const;

export type SlideRoute = (typeof slideRoutes)[number];
