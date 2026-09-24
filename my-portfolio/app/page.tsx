'use client';

import { useEffect, useMemo, useState } from 'react';
import Sidebar from '@/components/home/Sidenav';
import AboutSection from '@/components/home/About';
import ProjectsSection from '@/components/home/Project';
import ExperienceSection from '@/components/home/Experience';
import ContactSection from '@/components/home/Contact';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ThemeToggle from '@/components/ThemeToggle';


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
    // Ratio-based IntersectionObserver thresholds can never be met by sections
    // taller than the observed band, so the active item is derived from scroll
    // position instead.
    const resolveActive = () => {
      const line = window.innerHeight * 0.3;

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) return navItems[navItems.length - 1].id;

      let current = navItems[0].id;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      return current;
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActiveId(resolveActive()));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [navItems]);

  return (
    
    <main className="min-h-screen bg-base-100 text-base-content scroll-smooth">
      {/* Stays pinned to the top-right corner while the page scrolls */}
      <div className="sticky top-0 z-50 flex h-16 items-center justify-end px-6 md:px-10">
        <ThemeToggle />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16">
        {/* h-16 above is subtracted so the column ends flush with the viewport */}
        <aside className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] self-start lg:pb-12">
          <Sidebar navItems={navItems} activeId={activeId} onNavClick={scrollTo} />
        </aside>

        {/* ✅ no overflow-y-auto here */}
       <section className="space-y-28 pb-34 pt-10 pl-10">
          <ScrollReveal delayMs={40}>
            <AboutSection />
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <ProjectsSection />
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <ExperienceSection />
          </ScrollReveal>

          <ScrollReveal delayMs={160}>
            <ContactSection />
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}