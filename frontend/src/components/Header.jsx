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

  const handleDownloadResume = () => {
    // Mock PDF download
    alert('Resume download functionality will be implemented with backend');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-navy-900">
            <span className="text-navy-600">Saurabh</span> Mishra
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('certifications')}
              className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
            >
              Certifications
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={handleDownloadResume}
              className="bg-navy-600 hover:bg-navy-700 text-white transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-navy-600 transition-colors"
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
