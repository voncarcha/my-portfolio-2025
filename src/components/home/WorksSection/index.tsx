'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { PROJECTS } from './constants';
import IconOpenLink from './IconOpenLink';

const WorksSection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    easing: 'ease-in-out',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerPadding: '100px',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          // centerPadding: '30px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          // centerPadding: '50px',
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          // centerPadding: '100px',
        },
      },
    ],
  };

  return (
    <article
      className="relative w-full overflow-hidden pb-[150px] lg:pb-[250px]"
      id="works"
    >
      <section className="mx-auto max-w-screen-xl px-[20px] pb-10">
        <article className="w-full">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Selected Works
          </p>
          <h2 className="py-6 font-dm-serif-text text-5xl leading-none md:text-6xl">
            A curated{' '}
            <span className="gradient-text">collection of projects</span> where
            I applied both design sensibility and front-end expertise.
          </h2>
        </article>
      </section>

      <aside className="relative mx-auto max-w-[1400px]">
        <button
          className="absolute left-0 top-0 z-10 h-full w-[60px] cursor-pointer bg-gradient-to-r from-white to-transparent"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous"
          title="Previous"
        />
        <button
          className="absolute right-0 top-0 z-10 h-full w-[60px] cursor-pointer bg-gradient-to-l from-white to-transparent"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next"
          title="Next"
        />
        <Slider {...settings} ref={sliderRef}>
          {PROJECTS.map((work) => (
            <div key={work.id} className="">
              <header className="flex w-full items-center justify-center">
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Project"
                  className="flex items-center gap-2 px-6 py-2 hover:underline"
                >
                  <span className="text-center text-lg font-medium uppercase tracking-widest text-app-100">
                    {work.name}
                  </span>
                  <IconOpenLink />
                </a>
              </header>
              <picture className="mx-auto block">
                <Image
                  src={work.image}
                  alt={work.name}
                  width={600}
                  height={600}
                  className="transition-opacity duration-300"
                />
              </picture>
            </div>
          ))}
        </Slider>
      </aside>
    </article>
  );
};

export default WorksSection;
