'use client';

import React from 'react';
import { Symbol2, Symbol4, Symbol5, Symbol6 } from '@/components/global/Svg';

const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="symbol symbol--drift absolute right-[250px] top-[-100px] hidden text-primary opacity-[0.18] lg:block">
        <Symbol6 />
      </span>
      <span
        className="symbol symbol--float absolute bottom-[100px] right-[40%] hidden text-secondary opacity-[0.18] lg:block"
        style={{ animationDelay: '1.4s' }}
      >
        <Symbol6 />
      </span>
      <span
        className="symbol symbol--spin absolute bottom-[100px] right-[50px] hidden text-secondary opacity-[0.22] lg:block"
        style={{ animationDelay: '0.8s' }}
      >
        <Symbol5 />
      </span>
      <span
        className="symbol symbol--sway absolute left-[-40px] top-[120px] hidden text-primary opacity-[0.22] lg:block"
        style={{ animationDelay: '2.2s' }}
      >
        <Symbol4 />
      </span>
      <span
        className="symbol symbol--breathe absolute left-[45%] top-[40px] hidden text-secondary lg:block"
        style={{ animationDelay: '1.1s' }}
      >
        <Symbol2 />
      </span>
    </div>
  );
};

export default Background;
