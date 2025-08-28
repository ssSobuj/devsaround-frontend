"use client";

import { useTheme } from "next-themes";
import React from "react";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="container w-full py-6 px-6 text-center bg-background text-foreground border-t border-accent">
      &copy; {new Date().getFullYear()} Positivus. All rights reserved.
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded bg-accent text-secondary md:ml-2"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </footer>
  );
}
