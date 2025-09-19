import H3 from "@/components/typography/H3";
import IconTextRow from "@/slides/components/IconTextRow";
import Slide from "@/slides/components/Slide";
import SlideHeader from "@/slides/components/SlideHeader";

export default function Why() {
  return (
    <Slide sectionClassName="content-start justify-items-center relative">
      <SlideHeader title={"Why are we building CodePress?"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full items-start">
        <div className="flex flex-col justify-between h-full">
          <H3 className="mb-4 lg:mb-8">
            Code is so powerful, but still inaccessible to most
          </H3>
          <div className="gap-4 flex flex-col">
            <IconTextRow iconSrc="/star.svg" iconAlt="Star">
              <strong>Dev setup is too complex</strong>
              <br />
              IDE, git, localhost → too complex for non-engineers
            </IconTextRow>
            <IconTextRow iconSrc="/square.svg" iconAlt="Square">
              <strong>Current CMS platforms limiting</strong>
              <br />
              Hard to vibe code / add custom code
            </IconTextRow>
            <IconTextRow iconSrc="/upside.svg" iconAlt="Upside">
              <strong>AI code tools engineer centric</strong>
              <br />
              What about everyone else?
            </IconTextRow>
            <IconTextRow iconSrc="/diamond.svg" iconAlt="Diamond">
              <strong>Change this copy for me</strong>
              <br />
              CEOs, marketers, and designers often want to update the site / app
              but must file tickets, wait for engineering bandwidth
            </IconTextRow>
          </div>
        </div>
        <div>
          <div className="w-full place-items-center text-[#777] relative">
            <img
              src="/deck/why/slack.png"
              alt="slack"
              className="object-contain rounded-lg shadow-lg mb-8"
            />
          </div>
          <div className="w-full place-items-center text-[#777] relative">
            <img
              src="/deck/why/tickets.png"
              alt="tickets"
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
          <H3 className="mt-4">
            Gap: non-engineers need the power of code, without the barriers of
            coding
          </H3>
        </div>
      </div>
      <div className="rounded-[50%] w-[1200px] h-[1200px] absolute bottom-[-600px] right-[-400px] bg-[#FFEA90] filter blur-[250px] z-[-1]" />
    </Slide>
  );
}
