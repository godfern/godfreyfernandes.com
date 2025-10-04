"use client";

// import React from 'react';
// import styles from './Header.module.css';

// const Header = () => (
//   <header className="relative w-full py-4 px-6">
//     <nav className="max-w-6xl mx-auto flex justify-between items-center">
//       <h1 className="text-xl font-bold">Godfrey.dev</h1>
//       <ul className="flex space-x-6 text-sm text-gray-700">
//         <li><a href="#projects" className="hover:underline">Projects</a></li>
//         <li><a href="#about" className="hover:underline">About</a></li>
//         <li><a href="#contact" className="hover:underline">Contact</a></li>
//       </ul>
//     </nav>
//   </header >
// );

// export default Header;
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MorphingLogo from '../MorphingLogo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header className="sticky top-0 z-50">
      <div className=" px-4 py-3 flex items-center">
        <img src="/logo.png" alt="Godfrey.dev" className="w-10 h-10" />
        <h1 className="text-xl font px-4 py-3 flex justify-start">Godfrey Fernandes</h1>
        {/* <h1 className="text-xl font-bold px-4 py-3 flex justify-start"><MorphingLogo /></h1> */}
        {/* <div className="text-xl font-bold text-primary">MyPortfolio</div> */}

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex gap-6 text-accent items-center">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-primary transition">
              {link}
            </a>
          ))}
        </nav> */}

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-accent focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-white transition-all duration-300 ease-in-out ${isOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex justify-end py-3 px-6">
          <button
            className="text-accent focus:outline-none px-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-2xl text-accent hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
