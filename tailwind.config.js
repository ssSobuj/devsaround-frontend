// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // mobile (16px)
        sm: "36px", // ≥640px
        md: "50px", // ≥768px
        lg: "70px", // ≥1024px
        xl: "80px", // ≥1280px
        "2xl": "100px", // ≥1536px
      },
      screens: {
        sm: "640px", // Example max-width for sm
        md: "768px", // Example max-width for md
        lg: "1024px", // Example max-width for lg
        xl: "1280px", // Example max-width for xl
        "2xl": "1400px", // Your custom 2xl max-width
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
