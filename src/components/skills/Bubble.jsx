import React from 'react';
import { motion } from 'framer-motion';
import './bubble.scss'

const Bubble = ({ size, duration, direction }) => {
    const horizontalVariance = 800 + Math.random() * 100 - 100;
    const Variants = {
        initial: {
          y: '100vh',
          x: 0,
        },
        animate: {
          y: '-100vh',
          x: horizontalVariance,
          transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
          },
        },
      };

  return (
    <motion.div
      className="bubble"
      variants={Variants}
      initial="initial"
      animate="animate"
      style={{ width: size, height: size }}
    >
     <img src={"/facebook.png"} alt="" style={{ width: '100%', height: '100%' }} />
     {/* bubble */}
    </motion.div>
  );
};

export default Bubble;