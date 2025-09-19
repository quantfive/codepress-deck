type NumberIconProps = {
  value: number | string;
  className?: string;
};

export default function NumberIcon({ value, className }: NumberIconProps) {
  return (
    <div
      className={`h-8 w-8 lg:h-15 lg:w-15 bg-[#D4DEFF] text-[#2A5BFE] text-[16px] flex items-center justify-center rounded-full font-semibold${
        className ? ` ${className}` : ""
      }`}
    >
      {value}
    </div>
  );
}
