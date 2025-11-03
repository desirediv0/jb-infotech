
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import CallToAction from "../components/CallToAction";
import StatsSection from "@/components/Stats";
import { VortexHero } from "@/components/VortexHero";

export default function Home() {
  return (
    <div>
      <VortexHero />
      <WhyChooseUs />
      <StatsSection />
      <ServicesSection />
      <CallToAction />
    </div>
  );
}
