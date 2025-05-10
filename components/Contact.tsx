"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import PageDetailsButton from './PageDetailsButton';
import { PAGE_IDS, SECTION_COLOR_MAP } from '../lib/constants/app';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id="contact" className="py-10 px-20">
      <motion.div
        ref={ref}
        // initial={{ opacity: 0, y: 30 }}
        // animate={controls}
        // transition={{ duration: 0.6, ease: 'easeOut' }}
        // className="relative block bg-black border-1 border-yellow-500 text-white shadow-[0_0_15px_#ffd700] rounded-xl p-6 transition hover:shadow-yellow-400 before:absolute before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:animate-twinkle"
        // className="relative block bg-black border-2 border-yellow-500 text-white shadow-[0_0_15px_#ffd700] rounded-xl p-6 transition hover:shadow-yellow-400 before:absolute before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:animate-twinkle"

        // className="block bg-black border-2 border-yellow-500 text-white shadow-[0_0_15px_#ffd700] rounded-xl p-6 hover:shadow-yellow-400 transition"
        // className="group relative block bg-black border-1 border-yellow-500 text-white shadow-[0_0_15px_#ffd700] rounded-xl p-6 hover:shadow-yellow-400 transition"
        className={`group relative block bg-black border-1 border-${SECTION_COLOR_MAP[PAGE_IDS.CONTACT]}-500 text-white shadow-[0_0_15px_#ffd700] rounded-xl p-6 hover:shadow-${SECTION_COLOR_MAP[PAGE_IDS.CONTACT]}-400 transition`}

      // className="max-w-3xl mx-auto p-6 text-center rounded-xl border-4 border-green-500 bg-black text-white shadow-[0_0_20px_#00ff00]"
      >
        <PageDetailsButton path={"/details/contact"} />
        {/* <button
          onClick={() => router.push(`/details/contact`)}
          className="absolute inset-y-0 right-0 h-full flex items-center justify-center shadow-lg"
        >
          <span className="glowing-icon">
            <ChevronRight size={40} />
          </span> */}
        {/* </button> */}
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-xl md:text-2xl text-gray-200 max-w-7xl">
          Please schedule a call with me to discuss your project or just to say hi!
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
