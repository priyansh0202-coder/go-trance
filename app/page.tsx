import { ArticlesSection } from "@/components/homepage/articlesSection";
import { CTASection } from "@/components/homepage/ctaSection";
import { FeaturedDestinations } from "@/components/homepage/featuresDestinations";
import { HeroSection } from "@/components/homepage/herosection";
import { ServicesSection } from "@/components/homepage/servicesSection";
import { StatisticsSection } from "@/components/homepage/statisticsSection";
import { TestimonialsSection } from "@/components/homepage/testimonialsSection";
import { WhyChooseSection } from "@/components/homepage/whyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <StatisticsSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ArticlesSection />
      <CTASection />
   </div>
  );
}
