import { PropsWithChildren } from "react";

type H3Props = PropsWithChildren<{
  className?: string;
}>;

export default function H3({ children, className, ...props }: H3Props) {
  return (
    <h3
      className={
        "lg:text-[30px] desktop:text-[36px] tracking-[-1.08px] font-semibold " +
        (className ?? "")
      }
      {...props}
    >
      {typeof children === "string" && children === "Gap: non-engineers need the power of code, without the barriers of coding" ? "Code is so powerful, but still inaccessible to most" : children}
    </h3>
  );
}
