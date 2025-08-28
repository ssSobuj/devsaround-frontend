// components/ServicesSection.tsx
import React from "react";
import { cn } from "@/lib/utils";
import ServiceCard from "./ServiceCard";

// Dummy image paths - replace with your actual illustration paths
const illustrations = {
  seo: "/images/illustrations/seo.svg",
  ppc: "/images/illustrations/ppc.svg",
  social: "/images/illustrations/social.svg",
  email: "/images/illustrations/email.svg",
  content: "/images/illustrations/content.svg",
  analytics: "/images/illustrations/analytics.svg",
};

export function ServicesSection() {
  return (
    <section className="container py-16 md:py-24">
      {/* Section Header */}
      <div className="flex flex-col items-center md:items-start md:flex-row md:justify-start gap-4 lg:gap-10  mb-10 lg:mb-20">
        <h2 className="bg-primary w-fit font-medium rounded-[7px] px-[7px] leading-[100%] tracking-[0]">
          Services
        </h2>
        <p className="text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        <ServiceCard
          variant="accent"
          title={["Social Media", "Strategy"]}
          buttonText="Explore"
          imageSrc="/images/service/seo.png"
          imageAlt="Social Media Illustration"
        />
        <ServiceCard
          variant="primary"
          title={["Pay-per-click", "advertising"]}
          buttonText="Learn more"
          imageSrc="/images/service/click.png"
          imageAlt="SEO Illustration"
        />

        <ServiceCard
          variant="secondary"
          title={["Social Media", "Marketing"]}
          buttonText="Discover"
          imageSrc="/images/service/social.png"
          imageAlt="Marketing Illustration"
        />

        <ServiceCard
          variant="accent"
          title={["Email", "Marketing"]}
          buttonText="Explore"
          imageSrc="/images/service/email.png"
          imageAlt="Social Media Illustration"
        />
        <ServiceCard
          variant="primary"
          title={["Content", "Creation"]}
          buttonText="Learn more"
          imageSrc="/images/service/content.png"
          imageAlt="SEO Illustration"
        />

        <ServiceCard
          variant="secondary"
          title={["Analytics and ", "Tracking"]}
          buttonText="Discover"
          imageSrc="/images/service/analytics.png"
          imageAlt="Marketing Illustration"
        />
      </div>
    </section>
  );
}
