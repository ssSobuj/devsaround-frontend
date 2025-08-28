"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Keep Link if used for internal anchors within hero section

export function Hero() {
  return (
    <section className="w-full py-6 lg:py-12">
      <div className="container">
        <div className="flex flex-col gap-6 md:hidden">
          <h1 className="text-4xl font-bold leading-[100%] tracking-[0] text-foreground">
            Navigating the digital landscape for success
          </h1>

          <Image
            src="/images/hero/illustration.png"
            alt="Hero Illustration"
            width={600}
            height={515}
            className="mx-auto"
          />

          <p className="leading-[28px] tracking-[0] text-foreground/80">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <Button variant="secondary" className="w-fit">
            Book a consultation
          </Button>
        </div>

        {/* Desktop Layout (two columns: text left, image right) */}
        <div className="hidden md:grid md:grid-cols-2 md:items-center md:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold leading-[100%] tracking-[0] text-foreground">
              Navigating the digital landscape for success
            </h1>
            <p className="leading-[28px] tracking-[0] text-foreground/80">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <Button variant="secondary" className="w-fit">
              Book a consultation
            </Button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/hero/illustration.png"
              alt="Hero Illustration"
              width={600}
              height={515}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
