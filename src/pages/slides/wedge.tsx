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
      <SlideHeader
        title={"Our initial wedge: Tech Companies"}
        description={"Our infra to power the next billion sites"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start">
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-[36px] tracking-[-1.08px] font-semibold mb-8">
            We start with Squarespace for your codebase and page gen
          </h3>
          <div className="gap-4 flex flex-col">
            <IconTextRow icon={<NumberIcon value={1} />}>
              <strong>CodePress integrates w/ your code</strong>
              <br />
              We integrate into any existing codebase, no matter the framework
            </IconTextRow>
            <IconTextRow icon={<NumberIcon value={2} />}>
              <strong>Edit in your browser</strong>
              <br />
              directly on the live site, just install a chrome extension
            </IconTextRow>
            <IconTextRow icon={<NumberIcon value={4} />}>
              <strong>WYSIWYG simplicity + code flexibility</strong>
              <br />
              make edits with WYSIWYG editor, then code commits to GitHub
            </IconTextRow>
            <IconTextRow icon={<NumberIcon value={5} />}>
              <strong>Generate unlimited pages</strong>
              <br />
              allow marketing / design to ship pages instantly, in your brand +
              styles
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
