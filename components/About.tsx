"use client"
import React from 'react';
import { motion } from 'framer-motion';
import PageDetailsButton from './PageDetailsButton';
import { PAGE_IDS, SECTION_COLOR_MAP } from '../lib/constants/app'

const About = () => {
  return (
    <section id={PAGE_IDS.ABOUT} className="py-10 px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`group relative block bg-black border-1 border-${SECTION_COLOR_MAP[PAGE_IDS.ABOUT]}-500 text-white shadow-[0_0_15px_#ff1a1a] rounded-xl p-6 hover:shadow-${SECTION_COLOR_MAP[PAGE_IDS.ABOUT]}-400 transition`}
      >
        <PageDetailsButton path={"/details/about"} />
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-7xl"
        >
          A frontend developer with a passion for startups, always experimenting with product ideas and modern UI technologies. I'm obsessed with crafting pixel-perfect, performant interfaces and love exploring what's next in the web world.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl text-gray-200 max-w-7xl"
        >
          When I'm not coding, you'll probably find me outdoors — cycling, gardening, fishing, hitting the gym — or jamming on my guitar, dreaming of playing in a band someday.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
