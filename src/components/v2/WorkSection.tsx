'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    name: 'Alowin Partners',
    category: 'Web Development',
    image: '/images/bg-alowin.png',
    link: 'https://alowin.partners/',
  },
  {
    name: 'GraciaPay',
    category: 'Product Design & Development',
    image: '/images/bg-proj-graciapay.png',
    link: 'https://graciapay.com/',
  },
  {
    name: 'Jello Studios',
    category: 'Brand & Web Design',
    image: '/images/bg-proj-jello.png',
    link: 'https://jello-studios.com/',
  },
  {
    name: 'Menelaou Law',
    category: 'Design & Development',
    image: '/images/bg-proj-law.png',
    link: 'https://menelaou-law.com/',
  },
  {
    name: 'Beanstalk Ventures',
    category: 'Web Development',
    image: '/images/bg-proj-beanstalk.png',
    link: 'https://beanstalkventures.ltd/',
  },
  {
    name: 'Sportskasosyo',
    category: 'Web Development',
    image: '/images/bg-sportskasosyo.png',
    link: 'https://sportskasosyo.teamroyale.vip/',
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // Heading reveal
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }

    // Project cards reveal + parallax
    projectRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
          delay: (i % 2) * 0.15,
        }
      );

      // Parallax on the image
      const img = card.querySelector('.v2-project-image');
      if (img) {
        gsap.fromTo(
          img,
          { y: -30 },
          {
            y: 30,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: `clamp(80px, 12vw, 200px) clamp(24px, 5vw, 80px)`,
      }}
    >
      <div ref={headingRef} className="opacity-0" style={{ marginBottom: 'clamp(48px, 6vw, 96px)' }}>
        <p
          style={{
            fontFamily: 'var(--v2-font-sans)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--v2-text-dim)',
            marginBottom: '16px',
          }}
        >
          Selected Work
        </p>
        <h2
          style={{
            fontFamily: 'var(--v2-font-serif)',
            fontSize: 'clamp(36px, 5vw, 80px)',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--v2-text)',
          }}
        >
          Recent projects
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(16px, 2.5vw, 40px)',
        }}
        className="max-lg:grid-cols-1"
      >
        {PROJECTS.map((project, index) => (
          <a
            key={project.name}
            ref={(el) => { projectRefs.current[index] = el; }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-project-card group opacity-0"
            style={{
              display: 'block',
              textDecoration: 'none',
              aspectRatio: index === 0 || index === 3 ? '16 / 11' : '16 / 10',
              borderRadius: '4px',
            }}
          >
            <div className="v2-parallax-container relative h-full w-full overflow-hidden rounded-[4px]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="v2-project-image object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="v2-project-overlay" />
              <div
                className="v2-project-meta absolute bottom-0 left-0 right-0"
                style={{
                  padding: 'clamp(16px, 2vw, 32px)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--v2-font-serif)',
                    fontSize: 'clamp(22px, 2.5vw, 36px)',
                    fontWeight: 400,
                    color: 'var(--v2-text)',
                    lineHeight: 1.1,
                    marginBottom: '6px',
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--v2-font-sans)',
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--v2-text-muted)',
                  }}
                >
                  {project.category}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
