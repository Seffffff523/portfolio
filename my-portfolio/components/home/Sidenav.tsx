'use client';

import type { IconType } from 'react-icons';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

type NavItem = { id: string; label: string };

const socials: { label: string; href: string; icon: IconType }[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yousef-laurence-abayan-12912b316/',
    icon: FaLinkedinIn,
  },
  { label: 'Personal GitHub', href: 'https://github.com/Seffffff523', icon: FaGithub },
  { label: 'Company GitHub', href: 'https://github.com/Owen-newO', icon: FaGithub },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/youseflaurence.abayan.52',
    icon: FaFacebookF,
  },
];

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
    <aside className="flex h-full flex-col items-start justify-between gap-10">
      <div className="flex w-full flex-col items-start gap-6">
        {/* Avatar + name */}
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-warning ring-offset-base-100 ring-offset-4">
                <img src="/images/profile.png" alt="profile" />
              </div>
            </div>
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-success rounded-full" />
          </div>

          <div>
            <h1 className="text-3xl font-bold leading-tight">Yousef Laurence Abayan</h1>
            <p className="text-lg text-base-content/70 mt-1">Back-End Developer (Aspiring)</p>
          </div>
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
      </div>

      {/* Socials */}
      <div className="flex gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <div key={href} className="tooltip" data-tip={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="btn btn-circle btn-outline btn-sm"
            >
              <Icon className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}