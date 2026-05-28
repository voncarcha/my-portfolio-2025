import React from 'react';
import {
  Symbol1,
  Symbol2,
  Symbol3,
  Symbol4,
  Symbol5,
} from '@/components/global/Svg';

const Background = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <span className="symbol symbol--sway absolute bottom-[20px] right-[30px] text-primary opacity-[0.18] lg:bottom-[100px] lg:left-[-50px] lg:right-auto">
        <Symbol1 />
      </span>
      <span
        className="symbol symbol--spin absolute left-[70%] top-[500px] hidden text-secondary opacity-[0.22] lg:block"
        style={{ animationDelay: '1s' }}
      >
        <Symbol5 />
      </span>
      <span className="symbol symbol--breathe absolute right-[30%] top-[300px] hidden text-secondary lg:block">
        <Symbol2 />
      </span>
      <span
        className="symbol symbol--float absolute bottom-[100px] right-[-50px] hidden text-primary opacity-[0.22] lg:block"
        style={{ animationDelay: '1.8s' }}
      >
        <Symbol4 />
      </span>
      <span
        className="symbol symbol--breathe absolute bottom-[200px] right-[35%] hidden text-primary lg:block"
        style={{ animationDelay: '2.5s' }}
      >
        <Symbol2 />
      </span>
      <span
        className="symbol symbol--drift absolute right-0 top-[300px] hidden text-app-300 opacity-[0.2] lg:block"
        style={{ animationDelay: '0.5s' }}
      >
        <Symbol3 />
      </span>
    </div>
  );
};

export default Background;
