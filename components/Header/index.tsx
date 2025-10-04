"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="px-6 md:px-12 lg:px-16 py-3 flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src="/logo.png" alt="Godfrey.dev" className="w-10 h-10" />
          <h1 className="text-xl font-semibold px-4">Godfrey Fernandes</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
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
            className="text-gray-700 focus:outline-none px-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-3xl text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
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
