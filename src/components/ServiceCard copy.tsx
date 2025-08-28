// components/ServiceCard.tsx
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card"; // Adjust path as needed

interface ServiceCardProps {
  title: string;
  description: string; // e.g., "Learn more"
  iconSrc: string; // Path to the icon/illustration image
  iconAlt: string;
  variant?: "primary" | "secondary" | "accent"; // Controls the card background color
}

export function ServiceCard({
  title,
  description,
  iconSrc,
  iconAlt,
  variant = "accent", // Default to accent if not provided
}: ServiceCardProps) {
  // Determine card background, text colors based on variant
  const cardClasses = cn(
    "relative w-full rounded-[var(--radius)] p-6 md:p-8 flex flex-col justify-between overflow-hidden",
    {
      "bg-accent text-foreground dark:bg-accent/70": variant === "accent", // Accent background, foreground text
      "bg-primary text-secondary dark:bg-primary/90 dark:text-accent":
        variant === "primary", // Primary background, secondary text (or accent in dark mode)
      "bg-secondary text-accent dark:bg-foreground dark:text-background":
        variant === "secondary", // Secondary background, accent text (or foreground in dark mode)
    }
  );

  // Determine title text colors (first word primary, rest foreground)
  const titleParts = title.split(" ");
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(" ");

  // For the title, we want the first word to be `primary` color
  // and the rest to be `foreground` or a contrasting color based on the card variant.
  // This requires careful handling for dark mode to ensure readability.

  const firstWordColorClass = "text-primary dark:text-primary"; // Always primary for the highlighted word

  // The rest of the title color should contrast with the card background.
  // If card is primary background, rest should be secondary (or accent in dark)
  // If card is secondary background, rest should be accent (or background in dark)
  // If card is accent background, rest should be foreground (or dark-foreground/white in dark)
  const restOfTitleColorClass = cn({
    "text-foreground dark:text-foreground": variant === "accent",
    "text-secondary dark:text-accent": variant === "primary",
    "text-accent dark:text-background": variant === "secondary",
  });

  return (
    <Card className={cardClasses}>
      <CardContent className="flex flex-col p-0 pb-4 h-full">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 z-10">
          <span className={firstWordColorClass}>{firstWord}</span>{" "}
          <span className={restOfTitleColorClass}>{restOfTitle}</span>
        </h3>
        <p className="flex items-center text-base md:text-lg mt-auto z-10">
          {description}
          <svg
            className="ml-2 w-4 h-4 md:w-5 md:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </p>
      </CardContent>
      {/* Absolute positioned image for the background illustration */}
      <div className="absolute right-0 bottom-0 md:-right-4 md:-bottom-4 w-32 h-32 md:w-48 md:h-48 opacity-70">
        <Image
          src={iconSrc}
          alt={iconAlt}
          layout="fill"
          objectFit="contain"
          className="grayscale dark:invert" // Adjust grayscale/invert for better dark mode blending if needed
        />
      </div>
    </Card>
  );
}
