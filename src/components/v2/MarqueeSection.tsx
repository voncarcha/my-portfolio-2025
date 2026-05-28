'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarqueeSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Continuous scroll animation tied to page scroll
    gsap.to(track, {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: track,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const items = [
    'Frontend Development',
    'UI/UX Design',
    'Web Animation',
    'React & Next.js',
    'Design Systems',
    'Creative Development',
  ];

  const separator = (
    <span
      style={{
        display: 'inline-block',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: 'var(--v2-border-light)',
        margin: '0 clamp(24px, 3vw, 48px)',
        flexShrink: 0,
        verticalAlign: 'middle',
      }}
    />
  );

  return (
    <div
      style={{
        overflow: 'hidden',
        padding: 'clamp(24px, 3vw, 40px) 0',
        borderTop: '1px solid var(--v2-border)',
        borderBottom: '1px solid var(--v2-border)',
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--v2-font-serif)',
                fontSize: 'clamp(24px, 3.5vw, 56px)',
                fontWeight: 300,
                fontStyle: i % 2 === 1 ? 'italic' : 'normal',
                color: i % 2 === 1 ? 'var(--v2-text-dim)' : 'var(--v2-text-muted)',
                letterSpacing: '-0.01em',
              }}
            >
              {item}
            </span>
            {separator}
          </span>
        ))}
      </div>
    </div>
  );
}
