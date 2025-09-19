import { inter } from "@/styles/fonts";
import { PropsWithChildren } from "react";

type PProps = PropsWithChildren<{
  className?: string;
}>;

export default function P({ children, className, ...props }: PProps) {
  return (
    <p
      className={(
        `${inter.className} font-[400] text-[#333] text-center text-[16px] sm:text-[18px] lg:text-[28px] leading-[1.6] tracking-[-0.36px] ` +
        (className ?? "")
      ).trim()}
      {...props}
    >
      {children}
    </p>
  );
}
