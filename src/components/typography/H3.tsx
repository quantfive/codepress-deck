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
      {children}
    </h3>
  );
}
