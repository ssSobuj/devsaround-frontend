import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
const services = [
  {
    variant: "accent",
    title: ["Social Media", "Strategy"],
    buttonText: "Explore",
    imageSrc: "/images/service/seo.png",
    imageAlt: "Social Media Illustration",
  },
  {
    variant: "primary",
    title: ["Pay-per-click", "advertising"],
    buttonText: "Learn more",
    imageSrc: "/images/service/click.png",
    imageAlt: "SEO Illustration",
  },
  {
    variant: "secondary",
    title: ["Social Media", "Marketing"],
    buttonText: "Discover",
    imageSrc: "/images/service/social.png",
    imageAlt: "Marketing Illustration",
  },
  {
    variant: "accent",
    title: ["Email", "Marketing"],
    buttonText: "Explore",
    imageSrc: "/images/service/email.png",
    imageAlt: "Email Marketing Illustration",
  },
  {
    variant: "primary",
    title: ["Content", "Creation"],
    buttonText: "Learn more",
    imageSrc: "/images/service/content.png",
    imageAlt: "Content Creation Illustration",
  },
  {
    variant: "secondary",
    title: ["Analytics and", "Tracking"],
    buttonText: "Discover",
    imageSrc: "/images/service/analytics.png",
    imageAlt: "Analytics Illustration",
  },
];

export function ServicesSection() {
  return (
    <section className="container py-16 md:py-24">
      <SectionHeader
        title="Services"
        description="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        descriptionMaxWidth="580px"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            variant={service.variant as "accent" | "primary" | "secondary"}
            title={service.title}
            buttonText={service.buttonText}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}
