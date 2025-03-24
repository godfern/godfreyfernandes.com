"use client";
import React from 'react';
import Image from 'next/image'
import portBanner from '../public/port_banner.jpg'
import Header from '../components/Header';
import { useTypewriter } from '../hooks';

const Hero = () => {
  const typedText = useTypewriter("Hey, I'm Godfrey Fernandes.", 70);
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-5xl font-bold mb-4">{typedText}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Frontend Developer - Crafting modern UI experiences.
              {/* I love creating pixel-perfect, performant interfaces and exploring new technologies. */}
            </p>
            <p className="mt-4 text-lg text-orange-300 max-w-2xl">
              Passionate about startups and turning ideas into products.
            </p>
            {/* <p className="text-lg max-w-xl mx-auto">
          Senior Frontend Developer — crafting performant UI systems with React, TypeScript & Tailwind CSS.
        </p> */}
          </div>
          {/* <h1 className="text-5xl font-bold mb-4">Hi, I'm Godfrey Fernandes</h1> */}

        </div>
      </section>
    </section>
  );
};

export default Hero;
