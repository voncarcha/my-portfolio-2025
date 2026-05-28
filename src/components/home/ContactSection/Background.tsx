'use client';

import React from 'react';
import { Symbol2, Symbol3, Symbol5, Symbol6 } from '@/components/global/Svg';

const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="symbol symbol--breathe absolute bottom-[50px] right-[50px] hidden text-primary lg:block">
        <Symbol2 />
      </span>
      <span className="symbol symbol--drift absolute right-[20px] top-[-50px] text-secondary opacity-[0.18] md:bottom-[50px] md:left-[10%] md:right-auto md:top-auto">
        <Symbol6 />
      </span>
      <span
        className="symbol symbol--spin absolute right-[45%] top-[40px] hidden text-secondary opacity-[0.22] lg:block"
        style={{ animationDelay: '1.3s' }}
      >
        <Symbol5 />
      </span>
      <span
        className="symbol symbol--float absolute bottom-[120px] left-[40%] hidden text-primary opacity-[0.18] lg:block"
        style={{ animationDelay: '2s' }}
      >
        <Symbol3 />
      </span>
    </div>
  );
};

export default Background;
