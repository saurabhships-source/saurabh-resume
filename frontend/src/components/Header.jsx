import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Menu, X } from 'lucide-react';
import generateResumePDF from '../utils/generateResumePDF';

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

  const handleDownloadResume = async () => {
    await generateResumePDF();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-gradient-to-r from-slate-900/95 to-navy-900/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors ${
            isScrolled ? 'text-navy-900' : 'text-white'
          }`}>
            <span className={isScrolled ? 'text-navy-600' : 'text-blue-400'}>Saurabh</span> Mishra
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-navy-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-navy-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-navy-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-navy-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-navy-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-medium ${
                isScrolled 
                  ? 'text-gray-700 hover:text-navy-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
            <Button
              onClick={handleDownloadResume}
              className={`transition-all ${
                isScrolled
                  ? 'bg-navy-600 hover:bg-navy-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:text-navy-600' 
                : 'text-white hover:text-blue-300'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-navy-600 transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-700 hover:text-navy-600 transition-colors font-medium py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-700 hover:text-navy-600 transition-colors font-medium py-2"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-gray-700 hover:text-navy-600 transition-colors font-medium py-2"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="block w-full text-left text-gray-700 hover:text-navy-600 transition-colors font-medium py-2"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-navy-600 transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Button
              onClick={handleDownloadResume}
              className="w-full bg-navy-600 hover:bg-navy-700 text-white transition-colors mt-2"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
