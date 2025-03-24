"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkExperience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id="work-experience" className="py-20 px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="block bg-black border-2 border-blue-500 text-white shadow-[0_0_15px_#00bfff] rounded-xl p-6 hover:shadow-blue-400 transition"
      >
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        {/* <p className="text-lg text-gray-700">
          With over 10 years of experience in frontend development, I specialize in React-based architecture,
          design systems, and crafting scalable UI for both startups and enterprise platforms.
        </p> */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-7xl">
          With over 10 years of experience in frontend development, I specialize in React-based architecture,
          design systems, and crafting scalable UI for both startups and enterprise platforms.
        </p>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
