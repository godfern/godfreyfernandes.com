"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import PageDetailsButton from './PageDetailsButton';
import { PAGE_IDS, SECTION_COLOR_MAP } from '../lib/constants/app'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const router = useRouter();


  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id={PAGE_IDS.ABOUT} className="py-10 px-20">
      <motion.div
        ref={ref}
        // initial={{ opacity: 0, y: 10 }}
        // animate={controls}
        // transition={{ duration: 0.6, ease: 'easeOut' }}
        // className="block bg-black border-red-500 text-white shadow-[0_0_15px_#ff1a1a] rounded-xl p-6 hover:shadow-red-400 transition"
        className={`group relative block bg-black border-1 border-${SECTION_COLOR_MAP[PAGE_IDS.ABOUT]}-500 text-white shadow-[0_0_15px_#ff1a1a] rounded-xl p-6 hover:shadow-${SECTION_COLOR_MAP[PAGE_IDS.ABOUT]}-400 transition`}
      // className="max-w-3xl mx-auto p-6 text-center rounded-xl border-4 border-green-500 bg-black text-white shadow-[0_0_20px_#00ff00]"
      >
        {/* Button only visible on hover */}
        <PageDetailsButton path={"/details/about"} />
        {/* <button
          onClick={() => router.push(`/details/about`)}
          // className="absolute inset-y-0 right-0 h-full flex items-center justify-center shadow-lg"
          className="absolute inset-y-0 right-0 h-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="glowing-icon">
            <ChevronRight size={48} strokeWidth={0.5} />
          </span>
        </button> */}
        {/* "Details" Button */}
        {/* <button
          onClick={() => router.push('/details/about')}
          className="absolute top-1/2 right-4 -translate-y-1/2 shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        {/* <p className="text-lg text-gray-700">
          With over 10 years of experience in frontend development, I specialize in React-based architecture,
          design systems, and crafting scalable UI for both startups and enterprise platforms.
        </p> */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-7xl">
          A frontend developer with a passion for startups, always experimenting with product ideas and modern UI technologies. I'm obsessed with crafting pixel-perfect, performant interfaces and love exploring what's next in the web world.
        </p>

        {/* <p className="mt-4 text-lg text-orange-300 max-w-2xl"> */}
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-7xl">
          When I'm not coding, you'll probably find me outdoors — cycling, gardening, fishing, hitting the gym — or jamming on my guitar, dreaming of playing in a band someday.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
