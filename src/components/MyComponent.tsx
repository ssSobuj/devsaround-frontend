"use client";
import * as React from "react";
import { useTheme } from "next-themes";

export default function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="bg-primary text-secondary p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-sans font-bold">Welcome to Next.js 14!</h1>
        <p className="text-sm font-mono mt-2">Current theme: {resolvedTheme}</p>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="mt-4 px-4 py-2 bg-accent text-secondary rounded-md hover:bg-opacity-80 transition-all"
        >
          Toggle Theme
        </button>
      </header>
      <main className="mt-8 p-6 bg-accent dark:bg-secondary rounded-lg shadow-lg">
        <p className="text-foreground dark:text-accent text-lg mb-4">
          This content automatically adapts to the selected theme.
        </p>
      </main>
    </div>
  );
}
