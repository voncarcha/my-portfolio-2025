'use client';

import React from 'react';
import Background from './Background';

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden pb-[100px] lg:pb-[250px]" id="about" aria-labelledby="about-heading">
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <article className="w-full px-[20px] lg:w-1/2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            ABOUT ME
          </p>
          <h2 id="about-heading" className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            <span className="gradient-text">10+ years experience</span> as a
            developer & designer
          </h2>
          <div className="space-y-8">
            <p className="text-xl font-light leading-relaxed">
              I combine clean, maintainable code with a strong eye for design to
              deliver interfaces that are responsive, accessible, and built to
              scale.
            </p>
            <p className="text-xl font-light leading-relaxed">
              I work day to day in React, TypeScript, Next.js, and TailwindCSS,
              turning designs and ideas into polished, production-ready
              interfaces. Framework-flexible and detail-oriented, I focus on
              performance, accessibility, and the quality of the code I leave
              behind.
            </p>
            <p className="text-xl font-light leading-relaxed">
              Over the years I&apos;ve helped startups, agencies, and small
              businesses establish and grow their presence online. I keep
              learning new tools and approaches so the work I deliver stays
              current and holds up over time.
            </p>
          </div>
        </article>
      </div>
      <Background />
    </section>
  );
};

export default AboutSection;
