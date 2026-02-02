"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const setDataTheme = (mode: "light" | "dark") => {
    const daisyTheme = mode === "light" ? "garden" : "luxury";
    document.documentElement.setAttribute("data-theme", daisyTheme);
  };
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    let activeTheme: "light" | "dark";

    if (saved) {
      activeTheme = saved;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      activeTheme = prefersDark ? "dark" : "light";
    }

    setTheme(activeTheme);
    setDataTheme(activeTheme);
  }, []);



  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDataTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn border rounded-full opacity-100 duration-200 transition-all border-base-200"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}