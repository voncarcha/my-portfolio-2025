'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  'Frontend Development',
  'UI/UX Design',
  'Responsive Design',
  'Design Systems',
  'Web Animation',
  'Performance Optimization',
];

const EXPERIENCE = [
  { company: 'Cenote', role: 'Frontend Developer' },
  { company: 'Code Ninja', role: 'Web Developer' },
  { company: 'Dotty Digital', role: 'Frontend Developer' },
  { company: 'iStack', role: 'Web Developer' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refs = [headingRef, bodyRef, capRef, expRef];
    refs.forEach((ref) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `clamp(80px, 12vw, 200px) clamp(24px, 5vw, 80px)`,
      }}
    >
      <hr className="v2-hr" style={{ marginBottom: 'clamp(48px, 6vw, 96px)' }} />

      <div className="v2-grid">
        {/* Left column: Label */}
        <div
          ref={headingRef}
          className="opacity-0 max-lg:col-span-full"
          style={{ gridColumn: '1 / span 3' }}
        >
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
            About
          </p>
        </div>

        {/* Right column: Content */}
        <div style={{ gridColumn: '5 / span 8' }} className="max-lg:col-span-full">
          <div ref={bodyRef} className="opacity-0">
            <p
              style={{
                fontFamily: 'var(--v2-font-serif)',
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                color: 'var(--v2-text)',
                marginBottom: 'clamp(20px, 2vw, 32px)',
              }}
            >
              I build refined digital interfaces that balance
              aesthetic precision with technical depth.
            </p>
            <p
              style={{
                fontFamily: 'var(--v2-font-sans)',
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--v2-text-muted)',
                maxWidth: '560px',
              }}
            >
              With years of experience across startups and agencies, I specialize
              in translating design vision into pixel-perfect, performant web
              experiences. Every project is an exercise in restraint, clarity,
              and purposeful motion.
            </p>
          </div>

          {/* Capabilities & Experience Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 'clamp(32px, 4vw, 64px)',
              marginTop: 'clamp(48px, 5vw, 80px)',
            }}
            className="max-md:grid-cols-1"
          >
            {/* Capabilities */}
            <div ref={capRef} className="opacity-0">
              <p
                style={{
                  fontFamily: 'var(--v2-font-sans)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--v2-text-dim)',
                  marginBottom: '24px',
                }}
              >
                Capabilities
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {CAPABILITIES.map((cap) => (
                  <li
                    key={cap}
                    style={{
                      fontFamily: 'var(--v2-font-sans)',
                      fontSize: 'clamp(13px, 1vw, 15px)',
                      fontWeight: 300,
                      color: 'var(--v2-text-muted)',
                      padding: '10px 0',
                      borderBottom: '1px solid var(--v2-border)',
                    }}
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div ref={expRef} className="opacity-0">
              <p
                style={{
                  fontFamily: 'var(--v2-font-sans)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--v2-text-dim)',
                  marginBottom: '24px',
                }}
              >
                Experience
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {EXPERIENCE.map((exp) => (
                  <li
                    key={exp.company}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: '1px solid var(--v2-border)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-sans)',
                        fontSize: 'clamp(13px, 1vw, 15px)',
                        fontWeight: 400,
                        color: 'var(--v2-text)',
                      }}
                    >
                      {exp.company}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--v2-font-sans)',
                        fontSize: '12px',
                        fontWeight: 300,
                        color: 'var(--v2-text-muted)',
                      }}
                    >
                      {exp.role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
