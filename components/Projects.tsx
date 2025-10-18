"use client"
import React from 'react';
import { PAGE_IDS } from '../lib/constants/app';

const Projects = () => {
  return (
    <section id={PAGE_IDS.PROJECTS} className="py-20 px-4 bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-brand-sand border-b-4 border-brand-aqua inline-block pb-1">
          Projects
        </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PROJECT CARD 1: Flipkart Seller Platform */}
          <div className="project-card bg-brand-navy/80 p-6 rounded-2xl border-t-4 border-brand-aqua shadow-2xl hover:scale-[1.02] transition duration-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-sand">Enterprise Scale</span>
            <h4 className="text-3xl font-bold mt-2 mb-2 text-white">Flipkart Seller Platform</h4>
            <p className="text-brand-aqua mb-4 font-mono text-sm">seller.flipkart.com</p>
            <p className="text-gray-300 mb-6">
              Key contributor to the mission-critical UI systems (Order & Payment Management) for one of India's largest e-commerce platforms, focusing on performance, state management, and scalability using React/GraphQL.
            </p>
            <a href="https://seller.flipkart.com" target="_blank" className="text-brand-aqua hover:text-brand-sand font-semibold flex items-center">
              View Project Scope
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M7 7h10v10M7 17l10-10" /></svg>
            </a>
          </div>

          {/* PROJECT CARD 2: St. Rita Chapel (Community) */}
          <div className="project-card bg-brand-navy/80 p-6 rounded-2xl border-t-4 border-brand-sand shadow-2xl hover:scale-[1.02] transition duration-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-coral">Goan Community Project</span>
            <h4 className="text-3xl font-bold mt-2 mb-2 text-white">St. Rita Chapel Carona</h4>
            <p className="text-brand-sand mb-4 font-mono text-sm">stritachapelcarona.in</p>
            <p className="text-gray-300 mb-6">
              Designed and developed a responsive community website for the local chapel. Focused on showcasing details about the history of the chapel, activities, clear information about the chapel.
            </p>
            <a href="https://stritachapelcarona.in" target="_blank" className="text-brand-sand hover:text-brand-aqua font-semibold flex items-center">
              Visit Live Site
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M7 7h10v10M7 17l10-10" /></svg>
            </a>
          </div>

          {/* PROJECT CARD 3: Auxilium Carona (Community) */}
          <div className="project-card bg-brand-navy/80 p-6 rounded-2xl border-t-4 border-brand-coral shadow-2xl hover:scale-[1.02] transition duration-300">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-aqua">Educational Outreach</span>
            <h4 className="text-3xl font-bold mt-2 mb-2 text-white">Auxilium Carona</h4>
            <p className="text-brand-coral mb-4 font-mono text-sm">auxiliumcarona.org</p>
            <p className="text-gray-300 mb-6">
              Developed the platform for a local educational organization. Emphasis was placed on accessibility, clear information about the educational organization.
            </p>
            <a href="https://auxiliumcarona.org" target="_blank" className="text-brand-coral hover:text-brand-sand font-semibold flex items-center">
              Visit Live Site
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M7 7h10v10M7 17l10-10" /></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
