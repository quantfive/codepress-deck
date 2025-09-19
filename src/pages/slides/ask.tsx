import H3 from "@/components/typography/H3";
import IconTextRow from "@/slides/components/IconTextRow";
import NumberIcon from "@/slides/components/NumberIcon";
import Slide from "@/slides/components/Slide";
import SlideHeader from "@/slides/components/SlideHeader";

export default function Ask() {
  return (
    <Slide
      sectionClassName="content-start justify-items-center relative"
      mainClassName="bg-[#FAF9F6]"
    >
      <SlideHeader
        title={"Raising $3m-$5m to launch CodePress"}
        logoSrc="/black-codepress-logo.svg"
      />

      <div className="gap-6 w-full items-start z-2">
        <div className="bg-white rounded-xl p-4 lg:p-12 h-full flex flex-col gap-6">
          <H3 className="mb-1 text-[#111]">Use of funds</H3>

          <IconTextRow
            icon={<NumberIcon value={1} />}
            textWrapperClassName="text-[#111]"
          >
            <div>
              <span className="font-semibold">
                Bring Q5 engineering + design team to CodePress
              </span>{" "}
              (6 people total)
            </div>
            <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
              ~$850k / yr salary + benefits
            </div>
          </IconTextRow>

          <IconTextRow
            icon={<NumberIcon value={2} />}
            textWrapperClassName="text-[#111]"
          >
            <div>
              <span className="font-semibold">Launch CodePress</span>
              <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
                Ship our extension + infrastructure for
              </div>
            </div>
          </IconTextRow>

          <IconTextRow
            icon={<NumberIcon value={3} />}
            textWrapperClassName="text-[#111]"
          >
            <div>
              <span className="font-semibold">Figure out our market</span>
              <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
                Find right initial target customer, figure out how to sell to
                them
              </div>
            </div>
          </IconTextRow>

          <IconTextRow
            icon={<NumberIcon value={4} />}
            textWrapperClassName="text-[#111]"
          >
            <div>
              <span className="font-semibold">
                Misc GTM expenses (incl potential for 1 or 2 GTM hires)
              </span>
              <div className="text-[#6B7280] lg:text-[20px] desktop:text-[22px]">
                ~$150k - $300k / yr
              </div>
            </div>
          </IconTextRow>
        </div>
      </div>

      {/* Soft background glow */}
      <div className="rounded-[50%] w-[1588px] h-[1588px] absolute bottom-[-100%] left-1/2 -translate-x-1/2 bg-[#B1C3FF] filter blur-[192px]" />
    </Slide>
  );
}
