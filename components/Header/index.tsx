"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../lib/constants/app';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


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
        <a href="#home" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Godfrey.dev" className="w-10 h-10" />
          <h1 className="text-xl font-semibold px-4">Godfrey Fernandes</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {Object.values(NAV_LINKS).map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              {link.label}
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
        className={`fixed top-[73px] left-0 right-0 bottom-0 z-40 flex flex-col transition-all duration-300 ease-in-out ${isOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
          }`}
        style={{ background: 'linear-gradient(to bottom right, #e0f2fe, #cffafe, #dbeafe)' }}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 py-8" style={{ background: 'linear-gradient(to bottom right, #e0f2fe, #cffafe, #dbeafe)' }}>
          {Object.values(NAV_LINKS).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
