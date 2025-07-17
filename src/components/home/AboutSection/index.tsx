import {
  Symbol1,
  Symbol2,
  Symbol3,
  Symbol4,
  Symbol5,
} from '@/components/global/Svg';
import React from 'react';

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
      <span className="absolute bottom-[20px] right-[30px] lg:bottom-[100px] lg:left-[-50px] lg:right-auto">
        <Symbol1 />
      </span>
      <span className="absolute left-[70%] top-[500px] hidden lg:block">
        <Symbol5 />
      </span>
      <span className="absolute right-[30%] top-[300px] hidden lg:block">
        <Symbol2 />
      </span>
      <span className="absolute bottom-[100px] right-[-50px] hidden lg:block">
        <Symbol4 />
      </span>
      <span className="absolute bottom-[200px] right-[35%] hidden lg:block">
        <Symbol2 />
      </span>
      <span className="absolute right-0 top-[300px] hidden lg:block">
        <Symbol3 />
      </span>
    </section>
  );
};

export default AboutSection;
