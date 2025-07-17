import React from 'react';
import { motion } from 'framer-motion';
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
      <motion.span
        className="absolute bottom-[20px] right-[30px] lg:bottom-[100px] lg:left-[-50px] lg:right-auto"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol1 />
      </motion.span>
      <motion.span
        className="absolute left-[70%] top-[500px] hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol5 />
      </motion.span>
      <motion.span
        className="absolute right-[30%] top-[300px] hidden lg:block"
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
        className="absolute bottom-[100px] right-[-50px] hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Symbol4 />
      </motion.span>
      <motion.span
        className="absolute bottom-[200px] right-[35%] hidden lg:block"
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
        className="absolute right-0 top-[300px] hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
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
