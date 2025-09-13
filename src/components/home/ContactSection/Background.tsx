'use client';

import React from 'react';
import { Symbol2, Symbol6 } from '@/components/global/Svg';

const Background = () => {
  return (
    <>
      <span className="absolute bottom-[50px] right-[50px] hidden lg:block">
        <Symbol2 />
      </span>
      <span className="absolute right-[20px] md:left-[10%] top-[-50px] md:top-auto md:bottom-[50px] md:right-auto">
        <Symbol6 />
      </span>
    </>
  );
};

export default Background;
