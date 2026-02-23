'use client';

import ThemeToggle from "@/components/ThemeToggle";

type NavItem = { id: string; label: string };

export default function Sidebar({
  navItems,
  activeId,
  onNavClick,
}: {
  navItems: NavItem[];
  activeId: string;
  onNavClick: (id: string) => (e: React.MouseEvent) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-0 flex flex-col items-start gap-6 pt-10">
      {/* Theme Toggle */}
      <div className="absolute top-0 right-[180%]">{<ThemeToggle />}</div>

      {/* Avatar */}
      <div className="relative">
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-warning ring-offset-base-100 ring-offset-4">
            <img src="/images/profile.png" alt="profile" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 w-3 h-3 bg-success rounded-full" />
      </div>

      {/* Name */}
      <div>
        <h1 className="text-3xl font-bold">Yousef Laurence Abayan</h1>
        <p className="text-lg text-base-content/70 mt-1">Front End Developer</p>
      </div>

      {/* Short bio */}
      <p className="text-sm text-base-content/70 leading-relaxed">
        I build modern web applications using tools like React, Next.js, Laravel, and efficient in
        Virtual Tour Development
      </p>


      {/* Navigation */}
      <nav className="mt-6 hidden lg:block w-full">
        <div className="space-y-2 text-sm uppercase tracking-widest">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onNavClick(item.id)}
                className={[
                  'group relative block w-full rounded-lg px-4 py-3',
                  'transition-colors duration-200',
                  isActive
                    ? 'bg-base-200/70 text-base-content'
                    : 'text-base-content/70 hover:text-base-content hover:bg-base-200/40',
                ].join(' ')}
              >
                {/* left indicator (only indicator fades, NOT the whole link) */}
                <span
                  className={[
                    'absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-full bg-warning',
                    'transition-opacity duration-200',
                    isActive ? 'opacity-100' : 'opacity-25 group-hover:opacity-50',
                  ].join(' ')}
                />

                {/* label stays visible always */}
                <span className="inline-block">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
       {/* Socials */}
      <div className="flex gap-4 mt-10">
        <span className="btn btn-circle btn-outline btn-sm">G</span>
        <span className="btn btn-circle btn-outline btn-sm">in</span>
        <span className="btn btn-circle btn-outline btn-sm">gh</span>
        <span className="btn btn-circle btn-outline btn-sm">f</span>
      </div>
    </aside>
  );
}