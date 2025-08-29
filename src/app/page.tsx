import CallToActionBanner from "@/components/CallToActionBanner";
import CaseStudies from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import { LogoSlider } from "@/components/LogoSlider";
import { ServicesSection } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <ServicesSection />
      <CallToActionBanner />
      <CaseStudies />
    </>
  );
}
