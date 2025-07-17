'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Symbol2, Symbol3 } from '@/components/global/Svg';

const Background = () => {
  return (
    <>
      <motion.span
        className="absolute bottom-0 right-[50px] md:right-[50%] lg:bottom-[200px] lg:left-[30%] lg:right-auto"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol2 />
      </motion.span>
      <motion.span
        className="absolute bottom-[50px] left-[-50px] hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol3 />
      </motion.span>
    </>
  );
};

export default Background;
