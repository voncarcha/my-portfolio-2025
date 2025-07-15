import React from 'react';
import { ITEMS } from './constants';
import Item from './Item';
import { Symbol5, Symbol6 } from '@/components/global/Svg';

const CvSection = () => {
  return (
    <article className="relative w-full pb-[100px] lg:pb-[200px]">
      <section className="mx-auto max-w-screen-xl px-[20px]">
        <article className="w-full">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Curriculum Vitae
          </p>
          <h2 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            I’ve worked on{' '}
            <span className="gradient-text">more than 100 websites</span> for
            great organizations
          </h2>
        </article>

        <article className="flex w-full flex-col justify-between gap-[20px] pt-2 lg:flex-row lg:pt-10">
          <ul className="w-full lg:w-1/2">
            {ITEMS.map((item) => (
              <Item key={item.company} item={item} />
            ))}
          </ul>
          <section className="w-full lg:w-[500px]">
            <span className="block pt-6 text-sm font-semibold text-app-300">
              Education
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              Lyceum of the Philippines University, Cavite
              <br /> Bachelor of Science in Information Technology (2008-2013)
            </span>
            <span className="block pt-6 text-sm font-semibold text-app-300">
              What I do
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              Front-end developer (primary), Web Designer
            </span>
            <span className="block pt-6 text-sm font-semibold text-app-300">
              Languages / Frameworks
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              TypeScript, JavaScript, React, Next.js, Node.js, HTML, CSS
            </span>
            <span className="block pt-6 text-sm font-semibold text-app-300">
              Styling / UI Libraries
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              TailwindCSS, Ant Design, Material UI, shadcn, styled-components
            </span>
            <span className="block pt-6 text-sm font-semibold text-app-300">
              Content Management Systems
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              Strapi, Wordpress, Saleor, Shopify
            </span>
            <span className="block pt-6 text-sm font-semibold text-app-300">
              State Management
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              Redux, React Query, Zustand, Context API
            </span>
            <span className="block pt-6 text-sm font-semibold text-app-300">
              Other Tools
            </span>
            <span className="text-md block pt-1 font-semibold text-app-100">
              Storybook, Docker, Git, Figma, and many more...
            </span>
          </section>
        </article>
      </section>

      <span className="absolute right-[250px] top-[-100px] hidden lg:block">
        <Symbol6 />
      </span>
      <span className="absolute bottom-[100px] right-[40%] hidden lg:block">
        <Symbol6 />
      </span>
      <span className="absolute bottom-[100px] right-[50px] hidden lg:block">
        <Symbol5 />
      </span>
    </article>
  );
};

export default CvSection;
