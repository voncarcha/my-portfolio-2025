'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate each line of the headline
    const lines = headlineRef.current?.querySelectorAll('.hero-line');
    if (lines) {
      tl.fromTo(
        lines,
        { opacity: 0, y: 80, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.4,
          ease: 'power4.out',
          stagger: 0.12,
        }
      );
    }

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power4.out' },
      '-=0.6'
    );

    tl.fromTo(
      metaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      '-=0.8'
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `0 clamp(24px, 5vw, 80px)`,
        paddingBottom: 'clamp(60px, 10vh, 120px)',
      }}
    >
      <h1
        ref={headlineRef}
        style={{
          fontFamily: 'var(--v2-font-serif)',
          fontSize: 'clamp(48px, 9vw, 160px)',
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          color: 'var(--v2-text)',
        }}
      >
        <span className="hero-line block overflow-hidden">
          <span className="inline-block">Designing</span>
        </span>
        <span className="hero-line block overflow-hidden">
          <span className="inline-block" style={{ color: 'var(--v2-text-muted)' }}>
            with intent,
          </span>
        </span>
        <span className="hero-line block overflow-hidden">
          <span className="inline-block">building</span>
        </span>
        <span className="hero-line block overflow-hidden">
          <span className="inline-block" style={{ color: 'var(--v2-accent)' }}>
            with craft
          </span>
        </span>
      </h1>

      <div
        ref={lineRef}
        className="v2-hr"
        style={{
          marginTop: 'clamp(32px, 4vw, 56px)',
          marginBottom: 'clamp(20px, 2.5vw, 32px)',
          transformOrigin: 'left',
        }}
      />

      <div
        ref={metaRef}
        className="opacity-0"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--v2-font-sans)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--v2-text-muted)',
          }}
        >
          Frontend Developer &mdash; UI/UX Designer
        </p>
        <p
          style={{
            fontFamily: 'var(--v2-font-sans)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--v2-text-dim)',
          }}
        >
          Based in Philippines &mdash; Available Worldwide
        </p>
      </div>
    </section>
  );
}
