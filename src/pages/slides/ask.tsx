import Slide from "@/slides/components/Slide";

export default function Ask() {
  return (
    <Slide sectionClassName="content-start justify-items-center gap-6 p-8">
      <h2>Raising $3 - $5m to launch CodePress</h2>
      <div className="grid grid-cols-2 gap-6 w-full items-start">
        <div>
          <h3>Round terms</h3>
          <ul className="list-disc pl-6">
            <li>Target $3-$5M on ~$30M post-money</li>
            <li>Structure: Safe</li>
            <li>Ownership: 10-17%</li>
          </ul>
        </div>
        <div>
          <h3>Use of funds</h3>
          <ol className="list-decimal pl-6">
            <li>Bring Q5 team (~$1.2m/yr)</li>
            <li>Ship CodePress, build / execute GTM</li>
            <li>Get to $1m ARR</li>
          </ol>
        </div>
      </div>
    </Slide>
  );
}
