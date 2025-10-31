import ReusableHero from "../components/ReusableHero";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import CallToAction from "../components/CallToAction";
import StatsSection from "@/components/Stats";
import { VortexHero } from "@/components/VortexHero";

export default function Home() {
  return (
    <div>
      <VortexHero />
      <ReusableHero
        title="Complete IT Solutions"
        description="Benefits of working with us is you get all the required products and services under a single umbrella."
        buttonText="Contact Us"
        buttonLink="/contact"
        imageSrc="/home.jpg"
        backgroundColor="bg-gradient-to-r from-blue-100 to-purple-100"
      />
      <WhyChooseUs />
      <StatsSection />
      <ServicesSection />
      <CallToAction />
    </div>
  );
}
