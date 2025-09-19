import { PropsWithChildren } from "react";

type SlideProps = {
  mainClassName?: string;
  sectionClassName?: string;
};

export default function Slide({
  children,
  mainClassName,
  sectionClassName,
}: PropsWithChildren<SlideProps>) {
  const mainClasses =
    "min-h-screen grid place-items-stretch overflow-hidden pb-4 w-full" +
    (mainClassName ? ` ${mainClassName}` : "");
  const sectionClasses =
    "min-h-screen grid max-w-[1475px] px-4 lg:px-24 mx-auto w-full" +
    (sectionClassName ? ` ${sectionClassName}` : "");

  return (
    <main className={mainClasses}>
      <section className={sectionClasses}>{children}</section>
    </main>
  );
}
