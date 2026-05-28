'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from './constants';

const WorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <article
      className="relative w-full overflow-hidden pb-[150px] lg:pb-[250px]"
      id="works"
      ref={sectionRef}
    >
      {/* Section header */}
      <section className="mx-auto max-w-screen-xl px-[20px] pb-10">
        <header className="w-full">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Selected Works
          </p>
          <h2 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            A curated{' '}
            <span className="gradient-text">collection of projects</span> where
            I applied both design sensibility and front-end expertise.
          </h2>
        </header>
      </section>

      {/* Projects grid */}
      <section
        className="relative mx-auto max-w-screen-xl px-[20px]"
        aria-label="Portfolio projects"
      >
        <div className="works-grid">
          {PROJECTS.map((work, index) => (
            <a
              key={index}
              data-index={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${work.name} project (opens in new tab)`}
              className={`works-card group ${visibleCards.has(index) ? 'works-card--visible' : ''}`}
              style={{
                transitionDelay: visibleCards.has(index)
                  ? `${(index % 3) * 120}ms`
                  : '0ms',
              }}
            >
              {/* Image */}
              <Image
                src={work.image}
                alt={`Screenshot of ${work.name} project showing the web application interface`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="works-card__image"
              />

              {/* Dark overlay that intensifies on hover */}
              <div className="works-card__overlay" />

              {/* Bottom content - always visible */}
              <div className="works-card__content">
                {/* Service tags */}
                <div className="works-card__tags">
                  {work.services.map((service) => (
                    <span key={service} className="works-card__tag">
                      {service}
                    </span>
                  ))}
                </div>

                {/* Project name + arrow */}
                <div className="works-card__title-row">
                  <h3 className="works-card__title">{work.name}</h3>
                  <svg
                    className="works-card__arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
          <a
            href="#contact"
            data-index={PROJECTS.length}
            className={`works-card works-card--cta group ${visibleCards.has(PROJECTS.length) ? 'works-card--visible' : ''}`}
            style={{
              transitionDelay: visibleCards.has(PROJECTS.length)
                ? `${(PROJECTS.length % 3) * 120}ms`
                : '0ms',
            }}
          >
            <div className="works-card__cta-inner">
              <h3 className="works-card__cta-title">
                Want to see more?
              </h3>
              <p className="works-card__cta-text">
                Get in touch and I&apos;d be happy to share additional work.
              </p>
              <span className="works-card__cta-btn">
                Let&apos;s Talk
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>
    </article>
  );
};

export default WorksSection;
