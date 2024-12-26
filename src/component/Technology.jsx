import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { RiPhpLine } from 'react-icons/ri';
import { FaDatabase } from 'react-icons/fa';
import { FaLaravel } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 mt-10 pb-24">
      <h1 className="by-20 text-center text-4xl "> Technology</h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4 mt-14">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <RiReactjsLine className="text-7xl text-cyan-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <RiPhpLine className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <FaDatabase className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <FaLaravel className="text-7xl text-green-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
