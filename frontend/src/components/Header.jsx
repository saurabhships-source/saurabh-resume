import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = ['about', 'skills', 'experience', 'education', 'certifications', 'contact'];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = 'about';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 120;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-lg shadow-md border-b'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <h1 className="text-xl font-bold text-blue-900">
            Saurabh
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium relative">

            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-gray-700 hover:text-blue-900 transition"
              >
                {item.toUpperCase()}

                {/* UNDERLINE ANIMATION */}
                {active === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-900"
                  />
                )}
              </button>
            ))}

            <a
              href="/Saurabh_Mishra_Resume.pdf"
              download
              className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center hover:scale-105 transition"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>

          </nav>

          {/* MOBILE */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-blue-900"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4 space-y-3 shadow-lg">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </motion.header>

      {/* CURSOR GLOW */}
      <CursorGlow />
    </>
  );
};

export default Header;


const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl z-0"
      animate={{
        x: pos.x - 80,
        y: pos.y - 80,
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  );
};
