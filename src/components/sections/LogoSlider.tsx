"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/logo/amazon.png", alt: "Amazon" },
  { src: "/images/logo/dribbble.png", alt: "Dribbble" },
  { src: "/images/logo/hubspot.png", alt: "HubSpot" },
  { src: "/images/logo/notion.png", alt: "Notion" },
  { src: "/images/logo/netflix.png", alt: "Netflix" },
  { src: "/images/logo/zoom.png", alt: "Zoom" },
];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  const allLogos = [...logos, ...logos, ...logos];

  const animationVariants = reverse ? ["-100%", "0%"] : ["0%", "-100%"];

  return (
    <motion.div
      className="flex gap-12 flex-nowrap"
      animate={{ x: animationVariants }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {allLogos.map((logo, i) => (
        <div key={i} className="flex-shrink-0">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition"
          />
        </div>
      ))}
    </motion.div>
  );
}

export default function LogoSlider() {
  return (
    <section className="w-full overflow-hidden bg-background py-6">
      <div className="container flex flex-col gap-6 md:flex-row md:gap-12">
        <div className="flex overflow-hidden">
          <LogoRow />
        </div>

        <div className="flex overflow-hidden md:hidden">
          <LogoRow reverse />
        </div>
      </div>
    </section>
  );
}
