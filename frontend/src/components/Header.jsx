import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg shadow-lg transition-all duration-300 py-4 border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white drop-shadow-lg">
            <span className="text-blue-400">Saurabh</span> Mishra
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-400 transition-colors font-medium drop-shadow-sm"
            >
              Contact
            </button>
            <a
              href="/Saurabh_Mishra_Resume.pdf"
              download="Saurabh_Mishra_Resume.pdf"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 px-4 py-2 rounded-md text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors drop-shadow-sm"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors font-medium py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors font-medium py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors font-medium py-2"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors font-medium py-2"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-blue-400 transition-colors font-medium py-2"
            >
              Contact
            </button>
            <a
              href="/Saurabh_Mishra_Resume.pdf"
              download="Saurabh_Mishra_Resume.pdf"
              className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-colors mt-2 px-4 py-2 rounded-md text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
