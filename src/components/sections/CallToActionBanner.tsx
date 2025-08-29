import Image from "next/image";
import { Button } from "../ui/button";

export default function CallToActionBanner() {
  return (
    <section className="container">
      <div className=" relative rounded-[45px] bg-accent px-[30px] lg:px-[60px] flex flex-col lg:flex-row items-center gap-2 lg:gap-24 xl:gap-[275px] overflow-visible">
        {/* Left Content */}
        <div className="flex-1 z-10 py-12">
          <h3 className="font-medium mb-[26px]">
            Let&apos;s make things happen
          </h3>
          <p className="mb-[26px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button variant="secondary" className="w-full md:w-auto">
            Get your free proposal
          </Button>
        </div>

        {/* Right Illustration (only on lg+) */}
        <div className="hidden lg:flex flex-1 justify-center relative">
          <Image
            src="/images/action-banner.png"
            alt="CTA Illustration"
            width={360}
            height={250}
            className="object-contain relative -mt-8 -mb-8"
          />
        </div>
      </div>
    </section>
  );
}
