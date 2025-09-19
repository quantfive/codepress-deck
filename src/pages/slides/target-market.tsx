import Slide from "@/slides/components/Slide";

export default function TargetMarket() {
  return (
    <Slide sectionClassName="content-start justify-items-center gap-6 p-8">
      <h2>Target Market</h2>
      <div className="grid grid-cols-2 gap-6 w-full items-start">
        <div>
          <h3>Initial Wedge TAM</h3>
          <p>
            CMS + Landing page builder
            <br />
            Targeted towards tech companies with custom codebases
          </p>
        </div>
        <div>
          <h3>Future</h3>
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
