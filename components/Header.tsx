import React from 'react';

const Header = () => (
  <header className="w-full py-4 px-6 bg-white shadow">
    <nav className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Godfrey.dev</h1>
      <ul className="flex space-x-6 text-sm text-gray-700">
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
