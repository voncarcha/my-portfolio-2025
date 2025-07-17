'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Symbol2, Symbol6 } from '@/components/global/Svg';

const Background = () => {
  return (
    <>
      <motion.span
        className="absolute bottom-[50px] right-[50px] hidden lg:block"
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
        className="absolute right-[20px] md:left-[10%] top-[-50px] md:top-auto md:bottom-[50px] md:right-auto"
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol6 />
      </motion.span>
    </>
  );
};

export default Background;
