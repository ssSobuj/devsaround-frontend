"use client";
import React, { useEffect } from "react";
import CaseStudyCard from "../cards/CaseStudyCard";
import SectionHeader from "../common/SectionHeader";
const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    buttonText: "Learn more",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    buttonText: "Learn more",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    buttonText: "Learn more",
  },
];
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function CaseStudies() {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 0.5s
    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <section className="container py-16 md:py-24">
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        descriptionMaxWidth="580px"
      />

      <div className="rounded-[45px] bg-secondary py-[70px] px-[30px] lg:px-[60px] hidden lg:flex gap-[64px] items-center">
        {caseStudies.map((study, index) => (
          <React.Fragment key={index}>
            <CaseStudyCard text={study.text} buttonText={study.buttonText} />
            {/* Divider except after last card */}
            {index < caseStudies.length - 1 && (
              <div className="w-[1px] bg-background self-stretch"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mx-auto w-full lg:hidden">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }} //
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {caseStudies.map((study, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2"
              >
                <Card className="rounded-[45px] bg-secondary px-8 py-10">
                  <CardContent className="flex flex-col gap-5">
                    <p className="text-background">{study?.text}</p>
                    <button className="flex items-center gap-[15px] text-primary">
                      {study?.buttonText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L2 15L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2 15L2.75 16.299L20.0705 6.29904L19.3205 5L18.5705 3.70096L1.25 13.701L2 15Z"
                          fill="#B9FF66"
                        />
                      </svg>
                    </button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
