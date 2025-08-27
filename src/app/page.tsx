import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Test Dark/Light Mode</h1>
      <ThemeToggle />
      <p className="mt-4">
        This is some sample text to see color changes in light and dark mode.
      </p>
    </div>
  );
}
