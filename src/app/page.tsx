import CallToActionBanner from "@/components/sections/CallToActionBanner";
import CaseStudies from "@/components/sections/CaseStudies";
import Hero from "@/components/sections/Hero";
import LogoSlider from "@/components/sections/LogoSlider";
import ProcessFAQ from "@/components/sections/ProcessFAQ";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoSlider />
      <Services />
      <CallToActionBanner />
      <CaseStudies />
      <ProcessFAQ />
      <Team />
      <Testimonials />
    </>
  );
}
