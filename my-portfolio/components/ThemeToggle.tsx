"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  const setDataTheme = (mode: ThemeMode) => {
    const daisyTheme = mode === "light" ? "garden" : "night";
    document.documentElement.setAttribute("data-theme", daisyTheme);
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeMode | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const activeTheme: ThemeMode = saved ?? (prefersDark ? "dark" : "light");

    setTheme(activeTheme);
    setDataTheme(activeTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDataTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle border border-base-300 hover:bg-base-200 transition"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
