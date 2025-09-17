import { PropsWithChildren } from "react";

type H1Props = PropsWithChildren<{
  className?: string;
}>;

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={
        "font-sans font-[600] tracking-[-0.02em] text-[#333] text-center text-[28px] sm:text-[36px] lg:text-[48px] leading-tight md:leading-[1.2] lg:leading-[64px] " +
        (className ?? "")
      }
    >
      {children}
    </h1>
  );
}
