'use client';

import { useEffect, useMemo, useState } from 'react';
import Sidebar from '@/components/home/Sidenav';
import AboutSection from '@/components/home/About';
import ProjectsSection from '@/components/home/Project';
import ExperienceSection from '@/components/home/Experience';
import ContactSection from '@/components/home/Contact';


export default function HomePage() {
  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const [activeId, setActiveId] = useState('about');

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);
  };

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const id = visible[0]?.target?.id;
        if (id) setActiveId(id);
      },
      { threshold: [0.15, 0.25, 0.35, 0.5, 0.65], rootMargin: '-20% 0px -55% 0px' }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navItems]);

  return (
    <main className="min-h-screen bg-base-100 text-base-content scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16">
        <aside className="lg:sticky lg:top-8 self-start">
          <Sidebar navItems={navItems} activeId={activeId} onNavClick={scrollTo} />
        </aside>

        {/* ✅ no overflow-y-auto here */}
        <section className="space-y-24 pb-24 pt-10 pl-10">
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </section>
      </div>
    </main>
  );
}