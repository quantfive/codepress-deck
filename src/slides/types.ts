export type TitleSlide = {
  id: string;
  type: "title";
  title: string;
  subtitle?: string;
  byline?: string;
};

export type SectionSlide = {
  id: string;
  type: "section";
  title: string;
};

export type TextSlide = {
  id: string;
  type: "text";
  title?: string;
  body?: string;
};

export type ListSlide = {
  id: string;
  type: "list";
  title?: string;
  items: string[];
};

export type ImageSlide = {
  id: string;
  type: "image";
  title?: string;
  alt?: string;
  caption?: string;
};

export type TwoColumnSlide = {
  id: string;
  type: "twoColumn";
  title?: string;
  left: { title?: string; body?: string; items?: string[]; image?: boolean };
  right: { title?: string; body?: string; items?: string[]; image?: boolean };
};

export type QuoteSlide = {
  id: string;
  type: "quote";
  quote: string;
  cite?: string;
};

export type IframeDemoSlide = {
  id: string;
  type: "iframeDemo";
  title?: string;
  src?: string;
  height?: number;
};

export type Slide =
  | TitleSlide
  | SectionSlide
  | TextSlide
  | ListSlide
  | ImageSlide
  | TwoColumnSlide
  | QuoteSlide
  | IframeDemoSlide;
