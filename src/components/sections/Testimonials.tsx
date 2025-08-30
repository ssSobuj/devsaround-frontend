"use client";
import React, { useEffect } from "react";
import SectionHeader from "../common/SectionHeader";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsData = [
  {
    text: "“We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.”",
    name: "John Smith",
    designation: "Marketing Director at XYZ Corp",
  },
  {
    text: "“Positivus helped us revamp our entire digital marketing strategy, and the results have been phenomenal. Our brand visibility has skyrocketed, and we've seen a measurable increase in customer engagement. Their expertise and dedication are truly commendable.”",
    name: "Jane Doe",
    designation: "CEO at ABC Inc",
  },
  {
    text: "“Positivus helped us revamp our entire digital marketing strategy, and the results have been phenomenal. Our brand visibility has skyrocketed, and we've seen a measurable increase in customer engagement. Their expertise and dedication are truly commendable.”",
    name: "Jane Doe",
    designation: "CEO at ABC Inc",
  },
  {
    text: "“Positivus helped us revamp our entire digital marketing strategy, and the results have been phenomenal. Our brand visibility has skyrocketed, and we've seen a measurable increase in customer engagement. Their expertise and dedication are truly commendable.”",
    name: "Jane Doe",
    designation: "CEO at ABC Inc",
  },
  {
    text: "“I can't recommend Positivus enough! They transformed our social media presence, and we're now connecting with our audience in ways we never thought possible. Their creative approach and strategic insights are a game-changer.”",
    name: "Peter Jones",
    designation: "Founder of 123 Ltd",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="container py-16 md:py-24">
      <SectionHeader
        title="Testimonials"
        description="Hear What Our Clients Have to Say About Our Digital Marketing Services"
        descriptionMaxWidth="580px"
      />

      <div className="bg-secondary py-[28px] md:py-[76px] rounded-[45px] w-full relative">
        <div className="mx-auto w-full ">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
            <CarouselContent className="flex">
              {TestimonialsData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 mr-[40px] px-10 md:px-0"
                >
                  <Card className=" border-0 shadow-none">
                    <CardContent className="relative px-[32px] md:px:[52px] border-2 py-[32px] md:py-[50px] border-primary rounded-[45px] flex  justify-between items-center">
                      <p className="text-background"> {item.text} </p>
                      <span className="absolute -bottom-[28px] left-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="30"
                          viewBox="0 0 56 30"
                          fill="none"
                        >
                          <path
                            d="M1.45117 1.22607L28 29.1792L54.5488 1.22607Z"
                            fill="#191A23"
                          />

                          <path
                            d="M1.45117 1.22607L28 29.1792L54.5488 1.22607"
                            stroke="#B9FF66"
                            fill="none"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </CardContent>
                    <CardFooter className="pt-0 ml-[80px] mt-12">
                      <div>
                        <h4 className="text-primary">{item.name}</h4>
                        <h4 className=" text-background">{item.designation}</h4>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-[5rem] md:gap-[14rem] mt-8 md:mt-12 w-full">
              <CarouselPrevious className="custom-carousel-button relative static border-none bg-transparent shadow-none hover:bg-transparent p-0 w-auto text-background items-start">
                <ArrowLeft />
              </CarouselPrevious>
              <div className="flex justify-center gap-2 mb-5">
                {Array.from({ length: count }).map((_, idx) => (
                  <span key={idx} className="h-[14px] w-[14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                        fill={current === idx + 1 ? "#B9FF66" : "#ffffff"}
                      />
                    </svg>
                  </span>
                ))}
              </div>

              <CarouselNext className="custom-carousel-button relative static border-none bg-transparent shadow-none hover:bg-transparent p-0 w-auto text-background items-start">
                <ArrowRight />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
