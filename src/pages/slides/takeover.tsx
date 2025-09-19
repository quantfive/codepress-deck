import IconTextRow from "@/slides/components/IconTextRow";
import NumberIcon from "@/slides/components/NumberIcon";
import Slide from "@/slides/components/Slide";
import SlideHeader from "@/slides/components/SlideHeader";

export default function Engine() {
  return (
    <Slide
      sectionClassName="content-start justify-items-center"
      mainClassName="relative"
    >
      <SlideHeader title={"Then, onboard the next generation of the web"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start">
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-[36px] tracking-[-1.08px] font-semibold mb-8">
            Instead of using Squarespace or WordPress, use CodePress
          </h3>
          <div className="gap-4 flex flex-col">
            <IconTextRow icon={<NumberIcon value={1} />}>
              <strong>A Platformless platform -- by design</strong>
              <br />
              instead of walled gardens and being locked to a platform, you're
              always in control and own your own code
            </IconTextRow>
            <IconTextRow icon={<NumberIcon value={2} />}>
              <strong>Beyond web publishing</strong>
              <br />
              the same WYSIWYG simplicity extends to mobile + backend -- the
              next-gen IDE for everyone
            </IconTextRow>
            <IconTextRow icon={<NumberIcon value={3} />}>
              <strong>Fully AI native</strong>
              <br />
              as AI agents evolve, CodePress integrates them to automate more
              and more, while always giving humans precision control
            </IconTextRow>
          </div>
        </div>
        <div>
          <img
            src="/deck/solution/unicornsonly.webp"
            alt="tickets"
            className="object-contain rounded-lg lg:absolute right-0 uw:w-[1100px] w-[800px] top-[255px]"
          />
        </div>
      </div>
      <div className="rounded-[50%] w-[1200px] h-[1200px] absolute bottom-[-600px] right-[-400px] bg-[#EBBCFF] filter blur-[250px] z-[-1]" />
    </Slide>
  );
}
