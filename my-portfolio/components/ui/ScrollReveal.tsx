'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function ScrollReveal({ children, className = '', delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    if (reduce) {
      setShow(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        // ✅ toggle on/off so it re-animates when you come back
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        'transition-all duration-700 ease-out will-change-transform',
        show
          ? 'opacity-100 translate-y-0 blur-0'
          : 'opacity-0 translate-y-6 blur-[2px]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}