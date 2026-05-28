'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(
      nav,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.8 }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 opacity-0 transition-colors duration-700 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md' : ''
      }`}
      style={{ transitionTimingFunction: 'var(--v2-ease-out)' }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1440px',
          padding: 'clamp(20px, 3vw, 40px) clamp(24px, 5vw, 80px)',
        }}
      >
        <a
          href="#"
          className="v2-nav-link"
          style={{
            fontFamily: 'var(--v2-font-serif)',
            fontSize: 'clamp(20px, 2vw, 26px)',
            fontWeight: 300,
            letterSpacing: '0.02em',
            color: 'var(--v2-text)',
            textDecoration: 'none',
          }}
        >
          Von Carcha
        </a>

        <div className="hidden items-center md:flex" style={{ gap: 'clamp(24px, 3vw, 48px)' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="v2-nav-link"
              style={{
                fontFamily: 'var(--v2-font-sans)',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: 'var(--v2-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.4s var(--v2-ease-out)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--v2-text)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--v2-text-muted)')
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
