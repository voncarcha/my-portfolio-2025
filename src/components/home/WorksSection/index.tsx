'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { PROJECTS } from './constants';

const WorksSection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'ease-in-out',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '100px',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerPadding: '100px',
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
            A curated collection of projects where I applied both design
            sensibility and front-end expertise.
          </h2>
        </article>
      </section>

      <Slider {...settings} ref={sliderRef}>
        {PROJECTS.map((work) => (
          <div key={work.id}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <picture className="mx-auto block overflow-hidden px-[10px]">
                <Image
                  src={work.image}
                  alt={work.name}
                  width={600}
                  height={600}
                  className="rounded-[15px] transition-opacity duration-300 hover:opacity-100 md:opacity-85"
                />
              </picture>
            </a>
          </div>
        ))}
      </Slider>
    </article>
  );
};

export default WorksSection;
