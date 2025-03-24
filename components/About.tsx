"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id="about" className="py-20 px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="block bg-black border-2 border-red-500 text-white shadow-[0_0_15px_#ff1a1a] rounded-xl p-6 hover:shadow-red-400 transition"
        // className="max-w-3xl mx-auto p-6 text-center rounded-xl border-4 border-green-500 bg-black text-white shadow-[0_0_20px_#00ff00]"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        {/* <p className="text-lg text-gray-700">
          With over 10 years of experience in frontend development, I specialize in React-based architecture,
          design systems, and crafting scalable UI for both startups and enterprise platforms.
        </p> */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-7xl">
          A frontend developer with a passion for startups, always experimenting with product ideas and modern UI technologies. I’m obsessed with crafting pixel-perfect, performant interfaces and love exploring what’s next in the web world.
        </p>

        {/* <p className="mt-4 text-lg text-orange-300 max-w-2xl"> */}
        <p className="mt-4 text-xl md:text-2xl  text-gray-200 max-w-7xl">
          When I’m not coding, you’ll probably find me outdoors — cycling, gardening, fishing, hitting the gym — or jamming on my guitar, dreaming of playing in a band someday.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
