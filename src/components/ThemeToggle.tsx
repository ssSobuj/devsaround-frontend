"use client";
import { useTheme } from "next-themes";
import * as React from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg bg-primary text-secondary dark:bg-accent dark:text-secondary transition-colors"
    >
      Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
