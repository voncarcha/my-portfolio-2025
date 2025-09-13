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
    <>
      <span className="absolute bottom-[20px] right-[30px] lg:bottom-[100px] lg:left-[-50px] lg:right-auto">
        <Symbol1 />
      </span>
      <span className="absolute left-[70%] top-[500px] hidden lg:block">
        <Symbol5 />
      </span>
      <span className="absolute right-[30%] top-[300px] hidden lg:block">
        <Symbol2 />
      </span>
      <span className="absolute bottom-[100px] right-[-50px] hidden lg:block">
        <Symbol4 />
      </span>
      <span className="absolute bottom-[200px] right-[35%] hidden lg:block">
        <Symbol2 />
      </span>
      <span className="absolute right-0 top-[300px] hidden lg:block">
        <Symbol3 />
      </span>
    </>
  );
};

export default Background;
