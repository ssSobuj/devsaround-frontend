"use client";

import Image from "next/image";

type ServiceCardProps = {
  variant?: "primary" | "secondary" | "accent";
  title: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
};

const variantStyles = {
  primary: {
    cardBg: "bg-primary ",
    titleBg: "bg-background",
    buttonText: "text-foreground",
    buttonCircle: "#191A23",
    buttonPath: "#B9FF66",
  },
  secondary: {
    cardBg: "bg-secondary ",
    titleBg: "bg-background",
    buttonText: "text-background",
    buttonCircle: "#ffffff",
    buttonPath: "#000000",
  },
  accent: {
    cardBg: "bg-accent ",
    titleBg: "bg-primary",
    buttonText: "text-foreground",
    buttonCircle: "#191A23",
    buttonPath: "#B9FF66",
  },
};

export default function ServiceCard({
  variant = "primary",
  title,
  buttonText,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`p-[50px] ${styles.cardBg} rounded-[45px] border border-secondary shadow-[0px_5px_2px_0px_#000000]`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-auto h-auto md:h-[210px] flex flex-col justify-between mb-6 md:mb-0">
          <div>
            {title.map((line, index) => (
              <h3
                key={index}
                className={`m-0 leading-[100%] tracking-[0] ${styles.titleBg} rounded-[7px] font-medium w-fit px-[7px]`}
              >
                {line}
              </h3>
            ))}
          </div>
          <button
            className={`flex items-center gap-[15px] ${styles.buttonText} hidden md:flex`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill={styles.buttonCircle} />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L12 26L11.25 24.701ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12 26L12.75 27.299L30.0706 17.299L29.3206 16L28.5706 14.701L11.25 24.701L12 26Z"
                fill={styles.buttonPath}
              />
            </svg>

            {buttonText}
          </button>
        </div>
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            className={`flex items-center gap-[15px] ${styles.buttonText} md:hidden `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill={styles.buttonCircle} />
              <path
                d="M11.25 24.701C10.5326 25.1152 10.2868 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L12 26L11.25 24.701ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.0571C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1632 29.452 24.6381 30.2745 25.4383 30.4889C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12 26L12.75 27.299L30.0706 17.299L29.3206 16L28.5706 14.701L11.25 24.701L12 26Z"
                fill={styles.buttonPath}
              />
            </svg>
          </button>
          <Image
            src={imageSrc}
            width={210}
            height={166}
            alt={imageAlt}
            className="w-[150px] md:w-[210px]"
          />
        </div>
      </div>
    </div>
  );
}
