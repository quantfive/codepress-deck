import H1 from "@/components/typography/H1";
import H3 from "@/components/typography/H3";
import IconTextRow from "@/slides/components/IconTextRow";
import NumberIcon from "@/slides/components/NumberIcon";
import Slide from "@/slides/components/Slide";
import SlideHeader from "@/slides/components/SlideHeader";

export default function Competitive() {
  return (
    <Slide
      sectionClassName="content-start justify-items-center relative"
      mainClassName="bg-[#FAF9F6]"
    >
      <SlideHeader
        title={"Competitive Landscape"}
        // Use the black CodePress logo like the hero slide (dark logo on light bg)
        logoSrc="/black-codepress-logo.svg"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start z-2">
        {/* Left: 3 categories */}
        <div className="flex flex-col gap-10 bg-white rounded-xl p-4 lg:p-12 h-full">
          {/* 1 */}
          <IconTextRow
            icon={<NumberIcon value={1} />}
            textWrapperClassName="text-[#111]"
          >
            <H3 className="mb-1">No Code Marketing Site Builders</H3>
            <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
              Inflexible, inside walled gardens under their platform
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 opacity-90">
              <img
                src="/deck/competitive/squarespace.png"
                alt="Squarespace"
                className="w-[192px]"
              />
              <img
                src="/deck/competitive/webflow.png"
                alt="Webflow"
                className="w-[139px]"
              />
              <img
                src="/deck/competitive/unbounce.png"
                alt="Unbounce"
                className="w-[190px]"
              />
              <img
                src="/deck/competitive/framer.png"
                alt="Framer"
                className="w-[133px]"
              />
              <img
                src="/deck/competitive/wordpress.png"
                alt="WordPress"
                className="w-[153px]"
              />
            </div>
          </IconTextRow>
          <IconTextRow
            icon={<NumberIcon value={2} />}
            textWrapperClassName="text-[#111]"
          >
            <H3 className="mb-1">AI Coding Agents</H3>
            <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
              For engineers, need a dev setup / "know" code
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 opacity-90">
              <img
                src="/deck/competitive/cursor.png"
                alt="Cursor"
                className="w-[120px]"
              />
              <img
                src="/deck/competitive/openai.png"
                alt="OpenAI"
                className="w-[140px]"
              />
              <img
                src="/deck/competitive/claude.png"
                alt="Claude"
                className="w-[140px]"
              />
              <img
                src="/deck/competitive/replit.png"
                alt="Replit"
                className="w-[140px]"
              />
            </div>
          </IconTextRow>

          {/* 3 */}
          <IconTextRow
            icon={<NumberIcon value={3} />}
            textWrapperClassName="text-[#111]"
          >
            <H3 className="mb-1">AI Landing Page Builders</H3>
            <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
              Good for prototyping, doesn’t use your own components; hard to
              integrate to your work
            </div>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 opacity-90">
              <img
                src="/deck/competitive/lovable.png"
                alt="Lovable"
                className="w-[122px]"
              />
              <img
                src="/deck/competitive/bolt.png"
                alt="Bolt"
                className="w-[92px]"
              />
            </div>
          </IconTextRow>
        </div>

        {/* Right: We blend all 3 */}
        <div className="bg-white rounded-xl p-4 lg:p-12 h-full flex flex-col gap-12">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/deck/codepress-logo.svg"
              alt="CodePress on black"
              className="h-[62px] w-auto"
            />
          </div>
          <H1 className="mb-4 lg:mb-6 text-left font-bold">We blend all 3</H1>
          <div className="flex flex-col gap-4">
            <div className="rounded-full px-8 py-4 text-[24px] font-semibold bg-[linear-gradient(270deg,#CCF1FF_0%,#A2E6FF_102.9%)]">
              Ease of use of no code UI / UX
            </div>
            <div className="rounded-full px-8 py-4 text-[24px] font-semibold bg-[linear-gradient(90deg,#FFC4FC_0%,#FEE6FD_74.65%)]">
              Flexibility + power of having real code, can utilize AI agents
            </div>
            <div className="rounded-full px-8 py-4 text-[24px] font-semibold bg-[#FDF5D2]">
              Sits in your codebase so everything is in your brand
            </div>
          </div>
        </div>
      </div>

      {/* Soft background glow, matching style of other slides */}
      <div className="rounded-[50%] w-[1588px] h-[1588px] absolute bottom-[-100%] left-1/2 -translate-x-1/2 bg-[#B1C3FF] filter blur-[192px]" />
    </Slide>
  );
}
