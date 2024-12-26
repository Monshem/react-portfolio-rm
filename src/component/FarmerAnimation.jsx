import React from 'react';
import { motion } from 'framer-motion';
import { delay } from 'motion';

const FarmerAnimation = () => {
  return (
    <motion.h1
      initial={{ x: -1000 }}
      animate={{ x: [0, 900, 0] }}
      transition={{ transition: '3', delay: '1' }}
      whileHover={{ scale: '0.9', opacipy: 0.4 }}
      >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, similique.
    </motion.h1>
  );
};

export default FarmerAnimation;
