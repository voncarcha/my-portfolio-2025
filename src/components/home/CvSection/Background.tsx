'use client';

import React from 'react';
import { Symbol5, Symbol6 } from '@/components/global/Svg';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <>
      <motion.span
        className="absolute right-[250px] top-[-100px] hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol6 />
      </motion.span>
      <motion.span
        className="absolute bottom-[100px] right-[40%] hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol6 />
      </motion.span>
      <motion.span
        className="absolute bottom-[100px] right-[50px] hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol5 />
      </motion.span>
    </>
  );
};

export default Background;
