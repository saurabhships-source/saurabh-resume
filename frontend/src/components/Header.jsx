import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-md border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="text-xl font-bold text-blue-900 tracking-wide">
            Saurabh Mishra
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">

            <button onClick={() => scrollToSection('about')} className="hover:text-blue-900 transition">
              About
            </button>

            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-900 transition">
              Skills
            </button>

            <button onClick={() => scrollToSection('experience')} className="hover:text-blue-900 transition">
              Experience
            </button>

            <button onClick={() => scrollToSection('education')} className="hover:text-blue-900 transition">
              Education
            </button>

            <button onClick={() => scrollToSection('certifications')} className="hover:text-blue-900 transition">
              Certifications
            </button>

            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-900 transition">
              Contact
            </button>

            {/* BUTTON */}
            <a
              href="/Saurabh_Mishra_Resume.pdf"
              download="Saurabh_Mishra_Resume.pdf"
              className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-blue-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-4 space-y-3"
          >
            {['about', 'skills', 'experience', 'education', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-700 hover:text-blue-900 py-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <a
              href="/Saurabh_Mishra_Resume.pdf"
              download="Saurabh_Mishra_Resume.pdf"
              className="w-full inline-flex items-center justify-center bg-blue-900 text-white px-4 py-2 rounded-lg mt-2"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </motion.div>
        )}

      </div>
    </motion.header>
  );
};

export default Header;
