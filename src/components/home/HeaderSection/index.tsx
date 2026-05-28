'use client';

import { IconEmail, IconPhone, IconPin } from './Icons';
import React from 'react';
import Logo from '@/components/global/Logo';
import Background from './Background';
import MobileNav from './MobileNav';
import useGlobalStore from '@/hooks/useGlobalStore';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const HeaderSection = () => {
  const { setNavOpen } = useGlobalStore();

  return (
    <header className="relative w-full overflow-hidden pb-[90px] pt-4 lg:pb-[220px]">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <MobileNav />

      <div className="relative z-10 mx-auto max-w-screen-xl px-5">
        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-between rounded-[8px] border border-app-500/80 bg-white/70 px-5 py-4 shadow-[0_20px_80px_rgba(24,110,242,0.08)] backdrop-blur lg:flex"
        >
          <ul
            className="flex items-center gap-6 text-sm text-app-200"
            role="list"
          >
            <li className="flex items-center gap-1">
              <IconPhone />
              <a
                href="tel:+639549764064"
                className="rounded hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Call Von Carcha at +63 954 976 4064"
              >
                +63 954 976 4064
              </a>
            </li>
            <li className="flex items-center gap-1">
              <IconEmail />
              <a
                href="mailto:voncarcha@gmail.com"
                className="rounded hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-label="Send email to voncarcha@gmail.com"
              >
                voncarcha@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-1">
              <IconPin />
              <span aria-label="Location: Manila, Philippines">
                Manila, Philippines
              </span>
            </li>
          </ul>

          <ul className="flex items-center gap-2" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-[6px] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-app-200 transition hover:bg-app-500/70 hover:text-app-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end lg:hidden">
          <button
            onClick={() => setNavOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-app-200 transition hover:bg-app-500/50 hover:text-app-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="7" x2="20" y2="7"></line>
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="17" x2="20" y2="17"></line>
            </svg>
          </button>
        </div>

        <section
          id="main-content"
          className="relative grid lg:min-h-[calc(100vh-120px)] lg:items-center gap-12 pt-0 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.72fr)] xl:pt-24"
          aria-labelledby="hero-heading"
        >
          <span className="pointer-events-none absolute left-[100%] top-[45px] -z-10 flex -translate-x-1/2 justify-center opacity-[0.055] md:left-auto md:right-[-340px] md:top-[-130px] md:translate-x-0 lg:right-[-420px] lg:top-[-260px] xl:right-[-620px]">
            <Logo />
          </span>

          <div className="max-w-[760px]">
            <p className="text-xl text-app-200 md:text-2xl">
              Hi, I am <strong className="text-app-100">Von Carcha</strong>,
            </p>
            <h1
              id="hero-heading"
              className="max-w-[820px] py-6 font-dm-serif-text text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.9] text-app-100"
            >
              <span className="gradient-text">Front-end Developer</span> &{' '}
              <span className="gradient-text">Web Designer</span>
            </h1>
            <p className="max-w-2xl text-lg font-light leading-relaxed text-app-200 md:text-2xl">
              Blending front-end expertise with design sensibility to build
              faster, smarter user experiences with the finish of a product team
              and the pace of a senior freelancer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[8px] bg-gradient-app-vertical px-6 py-3 text-base font-semibold text-white shadow-[0_18px_45px_rgba(109,24,239,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gradient-app-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-describedby="cta-description"
              >
                Let&apos;s Connect
              </a>
              <a
                href="/#works"
                className="inline-flex min-h-[52px] items-center justify-center rounded-[8px] border border-app-400 bg-white/75 px-6 py-3 text-base font-semibold text-app-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                View Work
              </a>
            </div>
            <span id="cta-description" className="sr-only">
              Navigate to contact section to send a message
            </span>

            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-[8px] border border-app-500 bg-white/65 p-4 backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-app-300">
                  Years
                </dt>
                <dd className="pt-1 font-dm-serif-text text-4xl leading-none text-app-100">
                  10+
                </dd>
              </div>
              <div className="rounded-[8px] border border-app-500 bg-white/65 p-4 backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-app-300">
                  Websites
                </dt>
                <dd className="pt-1 font-dm-serif-text text-4xl leading-none text-app-100">
                  100+
                </dd>
              </div>
              <div className="rounded-[8px] border border-app-500 bg-white/65 p-4 backdrop-blur">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-app-300">
                  Focus
                </dt>
                <dd className="pt-1 font-dm-serif-text text-4xl leading-none text-app-100">
                  UI/UX
                </dd>
              </div>
            </dl>
          </div>

          <aside className="hidden self-end justify-self-end lg:block">
            <div className="w-[360px] rounded-[8px] border border-app-500 bg-white/70 p-5 shadow-[0_32px_90px_rgba(39,39,39,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-app-300">
                Current craft stack
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm font-medium text-app-100">
                {[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'TailwindCSS',
                  'UI/UX',
                  'Motion',
                ].map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-app-400 bg-white px-3 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-app-200">
                I turn ambiguous product ideas into clean interfaces, production
                components, and responsive experiences that feel considered.
              </p>
            </div>
          </aside>
        </section>
      </div>
      <Background />
    </header>
  );
};

export default HeaderSection;
