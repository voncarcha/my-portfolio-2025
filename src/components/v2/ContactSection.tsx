'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.contact-word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }

    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `clamp(80px, 15vw, 280px) clamp(24px, 5vw, 80px)`,
        textAlign: 'center',
      }}
    >
      <hr className="v2-hr" style={{ marginBottom: 'clamp(60px, 8vw, 140px)' }} />

      <h2
        ref={headlineRef}
        style={{
          fontFamily: 'var(--v2-font-serif)',
          fontSize: 'clamp(40px, 7vw, 120px)',
          fontWeight: 300,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: 'var(--v2-text)',
        }}
      >
        <span className="contact-word inline-block">Let&rsquo;s&nbsp;</span>
        <span className="contact-word inline-block" style={{ color: 'var(--v2-accent)' }}>
          create&nbsp;
        </span>
        <span className="contact-word inline-block">something&nbsp;</span>
        <br className="hidden md:inline" />
        <span className="contact-word inline-block" style={{ fontStyle: 'italic' }}>
          together
        </span>
      </h2>

      <div ref={ctaRef} className="opacity-0" style={{ marginTop: 'clamp(40px, 5vw, 72px)' }}>
        <a
          href="mailto:voncarcha@gmail.com"
          className="v2-nav-link"
          style={{
            fontFamily: 'var(--v2-font-sans)',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--v2-text-muted)',
            textDecoration: 'none',
            display: 'inline-block',
            padding: '16px 0',
            borderBottom: '1px solid var(--v2-border)',
            transition: 'color 0.5s var(--v2-ease-out), border-color 0.5s var(--v2-ease-out)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--v2-text)';
            e.currentTarget.style.borderColor = 'var(--v2-text)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--v2-text-muted)';
            e.currentTarget.style.borderColor = 'var(--v2-border)';
          }}
        >
          voncarcha@gmail.com
        </a>
      </div>
    </section>
  );
}
