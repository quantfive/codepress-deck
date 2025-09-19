import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Image from "next/image";
import { ReactNode } from "react";

type SlideHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
};

export default function SlideHeader({
  title,
  description,
  className,
  logoSrc = "/black-codepress-logo.svg",
  logoAlt = "CodePress logo",
  logoWidth = 58.886,
  logoHeight = 51.958,
}: SlideHeaderProps) {
  return (
    <div
      className={`flex gap-4 items-center w-full py-4 lg:py-8 border-b border-[#D3D9DC] lg:mb-8 ${
        className ? ` ${className}` : ""
      }`}
    >
      <div>
        <H1>{title}</H1>
        {description && <P className="text-left">{description}</P>}
      </div>
      <Image
        src={logoSrc}
        alt={logoAlt}
        className="ml-auto"
        width={logoWidth}
        height={logoHeight}
      />
    </div>
  );
}
