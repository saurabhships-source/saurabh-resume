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
    // Create a simple text version of resume for download
    const resumeContent = `
SAURABH MISHRA
Operations Manager | Customer Retention Specialist | Team Leader

Contact Information:
Email: saurabhmishra33555@gmail.com
Phone: +91 9867179669 / +91 9155361659
Location: Dombivli, India
LinkedIn: https://www.linkedin.com/in/saurabh-mishra-004a98383/
Portfolio: https://bizcontrol.tech

PROFESSIONAL SUMMARY
I work on improving operations, managing teams, and handling customer retention challenges in fast-paced environments. I have 6+ years of experience across TCS (Citi Bank), Concentrix (JP Morgan Chase), and Accenture, where I've supported process improvements, team coordination, and customer satisfaction initiatives.

EXPERIENCE

TCS (Citi Bank) - Account Retention Manager
Jul 2024 - Jan 2026 | Remote
- Work on customer retention strategies by identifying at-risk accounts
- Handle customer lifecycle management activities
- Coordinate with cross-functional teams to address customer concerns
- Contributed to reducing account cancellations through proactive outreach

Concentrix (JP Morgan Chase) - Retention Manager
Mar 2024 - Jul 2024 | Remote
- Managed high-priority customer escalations with 94% satisfaction rate
- Worked on resolving complex account issues
- Supported retention efforts by analyzing escalation patterns

Accenture (Verizon & Facebook) - Client Support Associate & Trainer
Mar 2019 - Feb 2024 | Mumbai
- Provided multi-channel customer support
- Trained new team members
- Maintained quality scores above 95%

Vidyalankar - Branch Head
Dec 2018 - Mar 2019 | Mumbai
- Managed daily branch operations

Karvy Digikonnect - Team Leader
Aug 2018 - Nov 2018 | Mumbai
- Led team of 30 associates

EDUCATION
Bachelor of Science (BSc) - 2015
Higher Secondary Certificate (HSC) - 2009

CERTIFICATIONS
- Business Strategy Masterclass
- Leadership & Management Diploma
- Stakeholder Management
`;

    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Saurabh_Mishra_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
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
              onClick={() => scrollToSection('education')}
              className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
            >
              Education
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
