import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary p-8">
      <main className="mt-8">
        <p className="text-accent text-lg">
          This is a paragraph with accent text color.
        </p>
        <button className="bg-primary text-secondary px-6 py-3 rounded-full mt-4 hover:opacity-80 transition-opacity">
          Click Me
        </button>
        <div className="border-2 border-accent p-4 mt-6 rounded-md">
          <p className="text-accent">A div with an accent border.</p>
        </div>
      </main>
    </div>
  );
}
