"use client"
import React from 'react';
import { PAGE_IDS } from '../lib/constants/app'

const About = () => {
  return (
    <section id={PAGE_IDS.ABOUT} className="about-section py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
          <h2 className="text-4xl font-extrabold text-center text-brand-navy border-b-4 border-brand-aqua inline-block pb-1">
            About My Craft & Coast
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">


          <div className="p-6 bg-white rounded-2xl shadow-xl border border-brand-aqua/30">
            <h4 className="text-2xl font-bold mb-4 text-brand-aqua flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-brand-aqua"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
              The Developer's Craft
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a <b>Frontend Developer</b> obsessed with turning cutting-edge ideas into pixel-perfect, performant digital experiences. My work is rooted in the startup world, driving me to constantly innovate and explore the <b>next current in web technology</b>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4 border-l-4 border-brand-coral pl-4 bg-brand-sand/10 p-3 rounded-lg">
              Based on the Goan coast, my development philosophy is inspired by the ocean: <b>fluid, resilient, and always moving forward.</b> I thrive on crafting beautiful, stable user interfaces.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-xl border border-brand-aqua/30">
            <h4 className="text-2xl font-bold mb-4 text-brand-aqua flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3 text-brand-aqua">
                <path d="M2 6c.46.225 1.5.75 3 0 1.5-.75 2.5-.25 4 0 1.5.75 2.5.25 4 0 1.5-.75 2.5-.25 4 0 1.5-.75 2.5-.25 3 0 1.5.75 2.5-.25 4 0 1.5.75 2.5-.25 4 0" />
                <path d="M2 18c.46.225 1.5.75 3 0 1.5-.75 2.5-.25 4 0 1.5.75 2.5.25 4 0 1.5-.75 2.5-.25 4 0 1.5-.75 2.5-.25 3 0 1.5.75 2.5-.25 4 0 1.5.75 2.5-.25 4 0" />
              </svg>
              The Rhythm of the Coast
            </h4>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-center">
                <span className="text-2xl mr-3">🚴‍♂️</span>
                <span><b>Outdoors & Active:</b> When I’m not diving deep into the code, you'll find me embracing the active lifestyle of the Goan region—whether that's <b>cycling</b> or hitting the gym.</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🎣</span>
                <span><b>Coastal Calm:</b> I maintain balance through hands-on activities like <b>fishing</b> and tending to my <b>garden</b>.</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🎸</span>
                <span><b>Creative Reset:</b> I find my rhythm jamming on the <b>guitar</b>, always keeping the dream of the ultimate band gig alive.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
