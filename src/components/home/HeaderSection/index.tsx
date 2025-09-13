import { IconEmail, IconPhone, IconPin } from './Icons';
import React from 'react';
import Logo from '@/components/global/Logo';
import Background from './Background';

const HeaderSection = () => {
  return (
    <header className="relative w-full overflow-hidden pb-[100px] lg:pb-[350px]">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      
      <div className="relative z-10 mx-auto max-w-screen-xl">
        <nav aria-label="Contact information" className="hidden items-center gap-[30px] pl-[20px] pt-[20px] text-app-200 lg:flex">
          <ul className="flex items-center gap-[30px]" role="list">
            <li className="flex items-center gap-1">
              <IconPhone />
              <a 
                href="tel:+639549764064" 
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded"
                aria-label="Call Von Carcha at +63 954 976 4064"
              >
                +63 954 976 4064
              </a>
            </li>
            <li className="flex items-center gap-1">
              <IconEmail />
              <a 
                href="mailto:voncarcha@gmail.com" 
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded"
                aria-label="Send email to voncarcha@gmail.com"
              >
                voncarcha@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-1">
              <IconPin />
              <span aria-label="Location: Manila, Philippines">Manila, Philippines</span>
            </li>
          </ul>
        </nav>
        
        <main id="main-content" className="w-full px-[20px] pt-[50px] md:w-1/2 lg:pt-[100px] xl:pt-[250px]">
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
            className="inline-block rounded-md bg-gradient-app-vertical px-6 py-3 text-lg text-white shadow-xl hover:bg-gradient-app-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            role="button"
            aria-describedby="cta-description"
          >
            Let&apos;s Connect
          </a>
          <span id="cta-description" className="sr-only">
            Navigate to contact section to send a message
          </span>
        </main>
      </div>
      <Background />
    </header>
  );
};

export default HeaderSection;
