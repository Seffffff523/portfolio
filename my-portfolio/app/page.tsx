import ThemeToggle from "../components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      {/* Theme toggle button */}
      <ThemeToggle />

      <header className="p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Dark/Light Mode Demo</h1>
        <p className="text-lg">
          Click the button in the top-left to toggle themes.
        </p>
      </header>

      <main className="p-8 flex flex-col items-center">
        <div className="max-w-xl text-center">
          <p className="mb-4">
            This page uses Tailwind CSS with <strong>dark mode class strategy</strong>. 
            The background, text, and headers all switch automatically.
          </p>
          <p className="mb-4">
            Your preference is saved in localStorage, so the theme persists across reloads.
          </p>
        </div>
      </main>

      <footer className="p-8 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; 2026 Dark Mode Example
      </footer>
    </div>
  );
}
