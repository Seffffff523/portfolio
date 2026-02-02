"use client";

import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 h-screen w-80 p-8 flex flex-col gap-10 border-r border-neutral-300 dark:border-neutral-700">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-400" />
        <div>
          <h1 className="text-xl font-bold">Yousef Laurence Abayan</h1>
          <p className="text-sm opacity-70">Front End Developer</p>
        </div>
      </div>

      <ul className="flex flex-col gap-6 mt-10">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="uppercase tracking-wider text-sm hover:text-pink-500 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
}
