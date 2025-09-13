'use client';

import React, { useRef, useEffect } from 'react';
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    focusOnSelect: true,
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target && (e.target as HTMLElement).closest('#works')) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          sliderRef.current?.slickPrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          sliderRef.current?.slickNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <article
      className="relative w-full overflow-hidden pb-[150px] lg:pb-[250px]"
      id="works"
    >
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

      <section 
        className="relative mx-auto max-w-[1400px]"
        aria-label="Portfolio projects carousel"
        role="region"
      >
        <button
          className="absolute left-0 top-[52px] z-10 h-[calc(100%-52px)] w-[35px] md:w-[60px] cursor-pointer bg-gradient-to-r from-white to-transparent hover:from-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="View previous project"
          title="Previous project (Left arrow key)"
        />
        <button
          className="absolute right-0 top-[52px] z-10 h-[calc(100%-52px)] w-[35px] md:w-[60px] cursor-pointer bg-gradient-to-l from-white to-transparent hover:from-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="View next project"
          title="Next project (Right arrow key)"
        />
        
        <div 
          role="group" 
          aria-roledescription="carousel"
          aria-label={`Portfolio projects, ${PROJECTS.length} total`}
        >
          <Slider {...settings} ref={sliderRef}>
            {PROJECTS.map((work, index) => (
              <div key={work.id} className="">
                <article 
                  aria-roledescription="slide"
                  aria-label={`Project ${index + 1} of ${PROJECTS.length}: ${work.name}`}
                >
                  <header className="flex w-full items-center justify-center py-1">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View ${work.name} project (opens in new tab)`}
                      className="flex items-center gap-2 px-6 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded"
                      aria-describedby={`project-desc-${work.id}`}
                    >
                      <span className="text-center text-lg font-medium uppercase tracking-widest text-app-100">
                        {work.name}
                      </span>
                      <IconOpenLink />
                      <span id={`project-desc-${work.id}`} className="sr-only">
                        Opens in new tab
                      </span>
                    </a>
                  </header>
                  <figure className="mx-auto block">
                    <Image
                      src={work.image}
                      alt={`Screenshot of ${work.name} project showing the web application interface`}
                      width={600}
                      height={600}
                      className="focus:outline-none"
                    />
                  </figure>
                </article>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Use left and right arrow keys to navigate between projects
        </div>
      </section>
    </article>
  );
};

export default WorksSection;
