import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";

export default function Hero() {
  return (
    <main className="min-h-screen place-items-stretch bg-gradient-to-b from-[#CCF1FF] to-[#A2E6FF] overflow-hidden-when-tall">
      <section className="flex flex-col items-center mx-auto w-full max-w-[1300px] gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 pt-6 md:pt-10 pb-0">
        <img
          src="/deck/codepress-logo.svg"
          alt="CodePress logo"
          className="mt-2 sm:mt-4 w-auto h-[45px] sm:h-[56px] lg:h-[85px]"
        />
        <H1 className="lg:mt-6">The next-gen publishing layer for the web</H1>
        <P>
          Squarespace simplicity, but in your own codebase — so marketers{" "}
          <br className="hidden lg:block" /> and designers can ship pages
          instantly while engineers keep control
        </P>
        <div className="w-full grid place-items-center mt-4 md:mt-auto">
          <img
            className="w-full h-auto max-w-[1000px] w-full md:w-[85%] rounded-lg"
            src="/deck/hero-slide/hello-world-graphic.webp"
            alt="Hello world editor graphic"
          />
        </div>
      </section>
    </main>
  );
}
