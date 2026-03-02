"use client";

import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  key: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "/#about", key: "about" },
  { label: "Experience", href: "/#experience", key: "experience" },
  { label: "Contact", href: "/#contact", key: "contact" },
];

export default function TopNav() {
  return (
    <nav
      className="
        sticky top-0 z-50 mb-10
        border-b border-neutral-800/60
        bg-black/70 backdrop-blur-md
      "
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-1 py-2">
        <Link
          href="/"
          className="text-lg font-bold text-white transition hover:text-amber-400"
        >
          All Projects
        </Link>

        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-2">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="
                rounded-xl px-4 py-2 text-sm font-medium text-neutral-300
                transition-all duration-200
                hover:bg-neutral-800 hover:text-white
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}