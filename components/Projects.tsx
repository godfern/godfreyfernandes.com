import React from 'react';

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-gray-100">
    <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-2">Retailer Hub Dashboard</h3>
        <p className="text-sm text-gray-600">Dynamic, permission-based dashboard built with React for Flipkart.</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-2">Claim Management System</h3>
        <p className="text-sm text-gray-600">Config-driven forms to manage workflows from scratch.</p>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
        <p className="text-sm text-gray-600">This site! Built with Next.js and Tailwind CSS.</p>
      </div>
    </div>
  </section>
);

export default Projects;
