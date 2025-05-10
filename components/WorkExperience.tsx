"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import PageDetailsButton from './PageDetailsButton';

const WorkExperience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id="work-experience" className="py-10 px-20">
      <motion.div
        ref={ref}
        // initial={{ opacity: 0, y: 30 }}
        // animate={controls}
        // transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group relative block bg-black border-1 border-blue-500 text-white shadow-[0_0_15px_#00bfff] rounded-xl p-6 hover:shadow-blue-400 transition"
      >
        <PageDetailsButton key="work-experience" path={"/details/work-experience"} />
        {/* <button
          onClick={() => router.push(`/details/work-experience`)}
          className="absolute inset-y-0 right-0 h-full flex items-center justify-center shadow-lg"
        >
          <span className="glowing-icon">
            <ChevronRight size={40} />
          </span>
        </button> */}
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
