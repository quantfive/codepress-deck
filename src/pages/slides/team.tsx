import H3 from "@/components/typography/H3";
import { Badge } from "@/components/ui/badge";
import Slide from "@/slides/components/Slide";
import SlideHeader from "@/slides/components/SlideHeader";

type Member = {
  name: string;
  title: string;
  bullets: string[];
};

function MemberCard({ name, title, bullets }: Member) {
  return (
    <div className="bg-white rounded-xl p-4 lg:p-6 h-full">
      {/* Photo placeholder */}
      <div className="w-full aspect-[16/10] bg-[#F2F3F5] rounded-lg grid place-items-center text-[#9AA1AA] text-sm">
        Photo
      </div>
      <H3 className="mt-4">{name}</H3>
      <div className="mt-1 text-[#6B7280] text-[14px] lg:text-[16px]">
        {title}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {bullets.map((b) => (
          <Badge
            key={b}
            variant="outline"
            className="rounded-xl border-0 bg-[#EFF4FF] text-[#111] text-[14px] lg:text-[16px] px-3 py-2 font-medium"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#BFD7FF] mr-2" />
            {b}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  const members: Member[] = [
    {
      name: "Patrick Lu",
      title: "CEO",
      bullets: ["UC Berkeley CS", "YC Fellowship", "Ex Apple ML Engineer"],
    },
    {
      name: "Craig Lu",
      title: "Product / Engineering",
      bullets: [
        "Ex Amazon Engineer",
        "Frontend / design system expert",
        "Led 7+ client launches",
      ],
    },
    {
      name: "Joseph Pereira",
      title: "Engineering",
      bullets: [
        "UC Berkeley CS",
        "Ex Google Engineer",
        "Exited previous company SmileyGo",
      ],
    },
  ];

  return (
    <Slide
      sectionClassName="content-start justify-items-center relative"
      mainClassName="bg-[#FAF9F6]"
    >
      <SlideHeader
        title={"Meet the Builders"}
        description={
          <>
            Worked together for past 8 years building Software Studio Q5, a
            premiere design + software agency. Over $12m in revenue, at a ~$1.5m
            - $2.5m run rate.
            <br />
            <br />
            Notable projects include{" "}
            <a
              href="https://www.noblemobile.com"
              target="_blank"
              className="text-blue-600"
              rel="noopener noreferrer"
            >
              Noble Mobile
            </a>{" "}
            with Andrew Yang,{" "}
            <a
              href="https://www.researchhub.com"
              target="_blank"
              className="text-blue-600"
              rel="noopener noreferrer"
            >
              ResearchHub
            </a>{" "}
            with Brian Armstrong
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>

      <div className="w-full grid place-items-center mt-8">
        <div className="text-[20px] lg:text-[28px] font-semibold text-[#111]">
          +3 other senior engineers / designer
        </div>
      </div>

      {/* Soft background glow */}
      {/* <div className="rounded-[50%] w-[1588px] h-[1588px] absolute bottom-[-100%] left-1/2 -translate-x-1/2 bg-[#B1C3FF] filter blur-[192px]" /> */}
    </Slide>
  );
}
