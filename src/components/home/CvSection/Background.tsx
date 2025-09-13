'use client';

import React from 'react';
import { Symbol5, Symbol6 } from '@/components/global/Svg';

const Background = () => {
  return (
    <>
      <span className="absolute right-[250px] top-[-100px] hidden lg:block">
        <Symbol6 />
      </span>
      <span className="absolute bottom-[100px] right-[40%] hidden lg:block">
        <Symbol6 />
      </span>
      <span className="absolute bottom-[100px] right-[50px] hidden lg:block">
        <Symbol5 />
      </span>
    </>
  );
};

export default Background;
