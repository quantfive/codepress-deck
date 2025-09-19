import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

type IconTextRowProps = {
  iconSrc?: string;
  iconAlt?: string;
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
  iconWrapperClassName?: string;
  textWrapperClassName?: string;
  text?: ReactNode;
  icon?: ReactNode;
};

export default function IconTextRow({
  iconSrc,
  iconAlt,
  iconWidth = 50,
  iconHeight = 50,
  className,
  iconWrapperClassName,
  textWrapperClassName,
  text,
  children,
  icon,
}: PropsWithChildren<IconTextRowProps>) {
  return (
    <div
      className={`flex items-start gap-6${className ? ` ${className}` : ""}`}
    >
      {icon ? (
        icon
      ) : (
        <div className={iconWrapperClassName}>
          <Image
            src={iconSrc ?? ""}
            alt={iconAlt ?? ""}
            className="w-[40px] lg:w-[50px]"
            width={iconWidth}
            height={iconHeight}
          />
        </div>
      )}
      <div
        className={`flex-1 lg:text-[24px] desktop:text-[28px] ${
          textWrapperClassName ? ` ${textWrapperClassName}` : ""
        }`}
      >
        {text ?? children}
      </div>
    </div>
  );
}
