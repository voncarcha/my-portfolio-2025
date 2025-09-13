'use client';

import React from 'react';
import { Symbol2, Symbol3 } from '@/components/global/Svg';

const Background = () => {
  return (
    <>
      <span className="absolute bottom-[50px] right-[50px] md:right-[50%] lg:bottom-[200px] lg:left-[30%] lg:right-auto">
        <Symbol2 />
      </span>
      <span className="absolute bottom-[50px] left-[-50px] hidden lg:block">
        <Symbol3 />
      </span>
    </>
  );
};

export default Background;
