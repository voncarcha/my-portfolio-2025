'use client';

import React from 'react';
import Background from './Background';

const AboutSection = () => {
  return (
    <section className="relative w-full overflow-hidden pb-[100px] lg:pb-[250px]">
      <section className="mx-auto max-w-screen-xl">
        <article className="w-full px-[20px] lg:w-1/2">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            ABOUT ME
          </p>
          <h2 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            <span className="gradient-text">10+ years experience</span> as a
            developer & designer
          </h2>
          <p className="mb-8 text-xl font-light leading-relaxed">
            I combine clean code with strong design sensibility to deliver
            responsive, accessible, and scalable digital experiences.
          </p>
          <p className="mb-8 text-xl font-light leading-relaxed">
            Proficient in React, TypeScript, Next.js, TailwindCSS, and modern
            UI/UX best practices. I&apos;m known for translating ideas into
            polished, production-ready interfaces—quickly and efficiently.
            Framework-flexible and detail-oriented, I care deeply about
            performance, accessibility, and developer experience.
          </p>
          <p className="mb-8 text-xl font-light leading-relaxed">
            Over the years, I’ve helped startups, agencies, and small businesses
            build their online presence. I&apos;m always exploring new tools and
            technologies to stay ahead and deliver work that lasts.
          </p>
        </article>
      </section>
      <Background />
    </section>
  );
};

export default AboutSection;
