import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="font-bold text-xl text-blue-900">
          Saurabh
        </h1>

        <div className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#experience" className="hover:text-blue-900 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-900 transition">Contact</a>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
