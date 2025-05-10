"use client";
import React, { useEffect } from 'react';
import Image from 'next/image'
import portBanner from '../public/port_banner.jpg'
import Header from '../components/Header';
import { useTypewriter } from '../hooks';
import { motion } from 'framer-motion';

const Hero = () => {
  const typedText = useTypewriter("Hey, I'm Godfrey Fernandes.", 100);

  useEffect(() => {
    console.log('Current typed text:', typedText);
  }, [typedText]);

  return (
    <section id="home" className="text-center bg-gradient-to-b from-white to-gray-50">
      <section className="relative w-full min-h-screen">
        <Image
          src={portBanner}
          alt="Portfolio Banner"
          fill // makes it full container size
          className="object-cover"
          priority // loads immediately, good for hero
        />

        <div className="flex flex-col justify-center text-white text-center px-4">
          <Header />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-4 text-white drop-shadow-lg min-h-[3rem]"
            >
              {typedText || ' '}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-lg"
            >
              Frontend Developer - Crafting modern UI experiences.
              {/* I love creating pixel-perfect, performant interfaces and exploring new technologies. */}
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg text-orange-300 max-w-2xl drop-shadow-lg"
            >
              Passionate about startups and turning ideas into products.
            </motion.p>
            {/* <p className="text-lg max-w-xl mx-auto">
          Senior Frontend Developer — crafting performant UI systems with React, TypeScript & Tailwind CSS.
        </p> */}
          </motion.div>
          {/* <h1 className="text-5xl font-bold mb-4">Hi, I'm Godfrey Fernandes</h1> */}
        </div>
      </section>
    </section>
  );
};

export default Hero;
