import { IconEmail, IconPhone, IconPin } from './Icons';
import React from 'react';
import LogoBg from '@/components/global/Logo/LogoBg';
import { Symbol2, Symbol3, Symbol5 } from '@/components/global/Svg';
import Logo from '@/components/global/Logo';

const HeaderSection = () => {
  return (
    <header className="relative w-full overflow-hidden pb-[100px] lg:pb-[350px]">
      <section className="relative z-10 mx-auto max-w-screen-xl">
        <ul className="hidden items-center gap-[30px] pl-[20px] pt-[20px] text-app-200 lg:flex">
          <li className="flex items-center gap-1">
            <IconPhone />
            <a href="tel:+639549764064" className="hover:underline">
              +63 954 976 4064
            </a>
          </li>
          <li className="flex items-center gap-1">
            <IconEmail />
            <a href="mailto:voncarcha@gmail.com" className="hover:underline">
              voncarcha@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-1">
            <IconPin />
            <span>Manila, Philippines</span>
          </li>
        </ul>
        <article className="w-full px-[20px] pt-[50px] md:w-1/2 lg:pt-[100px] xl:pt-[250px]">
          <span className="mb-5 flex items-center justify-center md:absolute md:right-[-250px] md:top-[-100px] md:mb-0 lg:right-[-320px] lg:top-[-150px] xl:right-[-500px] xl:top-[-200px] 2xl:right-[-500px] 2xl:top-[-350px]">
            <Logo />
          </span>
          <p className="text-2xl">
            👋 Hi, I am <strong>Von Carcha</strong>,
          </p>
          <h1 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            <span className="gradient-text">Front-end Developer</span> &{' '}
            <span className="gradient-text">Web Designer</span>
          </h1>
          <p className="mb-8 text-xl font-light leading-relaxed">
            Blending front-end expertise with design sensibility to build
            faster, smarter user experiences.
          </p>
          <a
            href="/#contact"
            className="rounded-md bg-gradient-app-vertical px-6 py-3 text-lg text-white shadow-xl hover:bg-gradient-app-hover"
          >
            Let&apos;s Connect
          </a>
        </article>
      </section>

      {/* <span className="absolute right-0 top-0 hidden md:block">
        <LogoBg />
      </span> */}
      <span className="absolute bottom-0 right-[50px] lg:bottom-[200px] lg:left-[30%] md:right-[50%] lg:right-auto">
        <Symbol2 />
      </span>
      <span className="absolute bottom-[50px] left-[-50px] hidden lg:block">
        <Symbol3 />
      </span>
    </header>
  );
};

export default HeaderSection;
