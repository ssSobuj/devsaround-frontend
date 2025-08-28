// import React from "react";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   return (
//     <section className="container w-full px-6 py-12 flex flex-col md:flex-row items-center justify-between bg-background text-foreground">
//       <div className="md:w-1/2 flex flex-col gap-4">
//         <h1 className="text-3xl md:text-5xl font-bold">
//           Navigating the digital landscape for success
//         </h1>
//         <p className="text-base md:text-lg">
//           Our digital marketing agency helps businesses grow and succeed online
//           through a range of services including SEO, PPC, social media
//           marketing, and content creation.
//         </p>
//         <Button variant="secondary" className="mt-4">
//           Book a consultation
//         </Button>
//       </div>

//       {/* Illustration */}
//       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
//         <img
//           src="https://placehold.co/600x400"
//           alt="Hero Illustration"
//           className="w-full max-w-md"
//         />
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Keep Link if used for internal anchors within hero section

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        {/*
          The Navbar component is now in layout.tsx
          <header className="absolute left-0 right-0 top-0 z-10 py-6">
          ... (removed navbar code) ...
          </header>
        */}

        {/* Hero Content */}
        {/* Adjusted padding-top to account for the fixed navbar */}
        <div className="grid gap-6 pt-24 md:grid-cols-2 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:pt-32">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Navigating the digital landscape for success
              </h1>
              <p className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
            </div>
            <Button>Book a consultation</Button>
            <Button variant="secondary">Book a consultation</Button>
            <Button variant="outline">Book a consultation</Button>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Replace with your specific hero image, using a placeholder for now */}
            <img
              src="https://placehold.co/600x400"
              alt="Hero Illustration"
              width={600}
              height={400}
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-12 grid grid-cols-2 items-center justify-center gap-8 md:grid-cols-6">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg" // Placeholder for Amazon
              width={100}
              height={50}
              alt="Amazon Logo"
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg" // Placeholder for Dribbble
              width={100}
              height={50}
              alt="Dribbble Logo"
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg" // Placeholder for HubSpot
              width={100}
              height={50}
              alt="HubSpot Logo"
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg" // Placeholder for Notion
              width={100}
              height={50}
              alt="Notion Logo"
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg" // Placeholder for Netflix
              width={100}
              height={50}
              alt="Netflix Logo"
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg" // Placeholder for Zoom
              width={100}
              height={50}
              alt="Zoom Logo"
              className="h-10 w-auto object-contain dark:invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
