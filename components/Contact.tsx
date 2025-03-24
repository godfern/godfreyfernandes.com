"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <section id="contact" className="py-20 px-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="block bg-black border-2 border-yellow-500 text-white shadow-[0_0_15px_#ffd700] rounded-xl p-6 hover:shadow-yellow-400 transition"
      // className="max-w-3xl mx-auto p-6 text-center rounded-xl border-4 border-green-500 bg-black text-white shadow-[0_0_20px_#00ff00]"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-xl md:text-2xl text-gray-200 max-w-7xl">
          Please schedule a call with me to discuss your project or just to say hi!
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
