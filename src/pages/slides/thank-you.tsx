import H1 from "@/components/typography/H1";
import Slide from "@/slides/components/Slide";

export default function ThankYou() {
  return (
    <Slide sectionClassName="content-start justify-items-center gap-6 p-8">
      <img
        src="/deck/codepress-logo.svg"
        alt="CodePress logo"
        width={220}
        height={93}
      />
      <H1>Thank you!</H1>
    </Slide>
  );
}
