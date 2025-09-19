import H3 from "@/components/typography/H3";
import Slide from "@/slides/components/Slide";

export default function TargetMarket() {
  return (
    <Slide sectionClassName="content-start justify-items-center gap-6 p-8">
      <h2>Target Market</h2>
      <div className="grid grid-cols-2 gap-6 w-full items-start">
        <div>
          <H3>Initial Wedge TAM</H3>
          <p>
            CMS + Landing page builder
            <br />
            Targeted towards tech companies with custom codebases
          </p>
        </div>
        <div>
          <H3>Future</H3>
          <p>
            End to end website + App builder
            <br />
            Anyone can signup and build without a coding environment
          </p>
        </div>
      </div>
    </Slide>
  );
}
