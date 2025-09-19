import AdvantagesSection from "@/components/advantages-section";
import FaqSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import FinalSection from "@/components/final-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import ProcessSection from "@/components/process-section";
import RoadmapSection from "@/components/roadmap-section";

export default function LandingPage() {
  return (
    <div className="max-w-[1200px] mx-auto w-full border-4 border-gray-200 rounded-lg">
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <MissionSection />
        <FeaturesSection />
        <ProcessSection />
        <RoadmapSection />
        <FaqSection />
        <FinalSection />
      </main>
    </div>
  );
}
