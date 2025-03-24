"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id="projects" className="py-20 px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="block bg-black border-2 border-green-500 text-white shadow-[0_0_15px_#00ff00] rounded-xl p-6 hover:shadow-green-400 transition"
      // className="max-w-3xl mx-auto p-6 text-center rounded-xl border-4 border-green-500 bg-black text-white shadow-[0_0_20px_#00ff00]"
      >
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-xl md:text-2xl text-gray-200 max-w-7xl">
          I have worked on scalable frontend applications across e-commerce, dynamic forms, and claim management systems.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-7xl">
          At Flipkart Retailer Hub, I built a Claim Management System with role-based UI permissions, global search, and performance optimizations, while also leading unit & automation testing.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-7xl">
          I also developed a Dynamic Form Renderer, a schema-driven low-code solution that integrates with multiple backends and supports custom validation and conditional rendering.
        </p>
        <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-7xl">
          Additionally, I contributed to Flipkart’s Seller & Wholesale Hub, optimizing the seller dashboard, payments, inventory, and onboarding workflows.
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
