'use client';

import React from 'react';
import {
  Symbol1,
  Symbol2,
  Symbol3,
  Symbol5,
  Symbol6,
} from '@/components/global/Svg';

const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="symbol symbol--breathe absolute bottom-[50px] right-[40px] text-primary md:right-[14%] lg:bottom-[200px] lg:left-[30%] lg:right-auto">
        <Symbol2 />
      </span>
      <span
        className="symbol symbol--float absolute bottom-[120px] left-[-40px] hidden text-secondary opacity-[0.16] lg:block"
        style={{ animationDelay: '1.5s' }}
      >
        <Symbol3 />
      </span>
      <span
        className="symbol symbol--sway absolute right-[56%] top-[600px] hidden text-primary opacity-[0.18] lg:block"
        style={{ animationDelay: '0.6s' }}
      >
        <Symbol1 />
      </span>
      <span className="symbol symbol--spin absolute left-[8%] top-[130px] hidden text-secondary opacity-[0.22] lg:block">
        <Symbol5 />
      </span>
      <span
        className="symbol symbol--drift absolute bottom-[90px] right-[12%] hidden text-app-300 opacity-[0.22] lg:block"
        style={{ animationDelay: '2.4s' }}
      >
        <Symbol6 />
      </span>
    </div>
  );
};

export default Background;
