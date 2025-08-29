"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Plus, Minus } from "lucide-react";
export default function ProcessFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your insurance goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      number: "02",
      title: "Research and Strategy Development",
      description:
        "Our team will conduct in-depth research on your industry, competitors, and target market. We'll develop a comprehensive strategy tailored to your specific insurance goals.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We'll put our carefully developed strategy into action. This phase includes executing marketing campaigns, developing content, and optimizing your online presence.",
    },
    {
      number: "04",
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor the performance of all implemented strategies. Using data-driven insights, we make real-time adjustments to optimize results and improve ROI.",
    },
    {
      number: "05",
      title: "Reporting and Communication",
      description:
        "We provide transparent, detailed reports on performance metrics and progress. Our team maintains open communication channels to keep you informed.",
    },
    {
      number: "06",
      title: "Continual Improvement",
      description:
        "Our work doesn't stop at implementation. We believe in continual improvement, constantly refining strategies based on performance data and market changes.",
    },
  ];
  return (
    <section className="container py-16 md:py-24">
      <SectionHeader
        title="Our Working Process "
        description="Step-by-Step Guide to Achieving Your Business Goals"
        descriptionMaxWidth="292px"
      />
      <div className="space-y-[30px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`transition-all duration-300 overflow-hidden border border-foreground shadow-[0px_5px_2px_0px_#000000] rounded-[45px] py-[20px] md:py-[41px] px-[20px] md:px-[60px] ${
              activeIndex === index ? "bg-primary" : "bg-accent "
            }`}
          >
            <button
              className={`flex justify-between items-center w-full  text-left ${
                activeIndex === index ? "mb-[30px]" : ""
              } `}
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              <div className="flex items-center gap-[25px]">
                <h1 className="font-medium leading-[100%]">{step.number}</h1>
                <h3 className="text-lg md:text-[30px] font-medium">
                  {step.title}
                </h3>
              </div>
              <div className="flex-shrink-0">
                {activeIndex === index ? (
                  <span
                    className={`${
                      activeIndex === index ? "bg-accent" : ""
                    } border border-foreground rounded-full w-[58px] h-[58px] flex items-center justify-center`}
                  >
                    <Minus className="w-6 h-6" strokeWidth={3} />
                  </span>
                ) : (
                  <span
                    className={`${
                      activeIndex === index ? "bg-accent" : ""
                    } border border-foreground rounded-full w-[58px] h-[58px] flex items-center justify-center`}
                  >
                    <Plus className="w-6 h-6" strokeWidth={3} />
                  </span>
                )}
              </div>
            </button>

            <div
              id={`accordion-content-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="w-full border-t border-one border-foreground mb-[30px]"></div>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
