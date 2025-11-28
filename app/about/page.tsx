import { ExpertGuideSection } from "@/components/about/expert-guidance";
import { GuidanceFormSection } from "@/components/about/guidance-form-section";
import { HeroSection } from "@/components/about/heroSection";
import { VisionMissionSection } from "@/components/about/our-mission-and-vision";
import { StatisticsSection } from "@/components/about/statisticsSection";

export default function About() {
    return (
        <div>
            <HeroSection />
            <ExpertGuideSection />
            <VisionMissionSection />
            <StatisticsSection />
            <GuidanceFormSection />
        </div>
    );
}
