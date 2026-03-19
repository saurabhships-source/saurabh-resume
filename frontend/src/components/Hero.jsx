import React from 'react';
import { Button } from './ui/button';
import { MapPin, Briefcase, Download, Mail, User } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    alert('Resume download functionality will be implemented with backend');
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-navy-100 px-4 py-2 rounded-full">
                <Briefcase className="w-4 h-4 text-navy-600" />
                <span className="text-sm font-medium text-navy-700">Available for Remote Work</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Saurabh Mishra
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-navy-600 font-semibold">
                Virtual Assistant | Operations Manager | Team Leader | Trainer
              </h2>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-navy-500" />
                  <span>Dombivli, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-navy-500" />
                  <span>6+ Years Experience</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Results-driven professional specializing in operations management, team leadership, and business excellence. 
              Proven track record of improving efficiency, driving customer satisfaction, and leading high-performing teams 
              across international corporate environments.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-6 text-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="border-navy-600 text-navy-600 hover:bg-navy-50 px-8 py-6 text-lg transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-navy-100 to-blue-100 flex items-center justify-center shadow-2xl">
                <User className="w-40 h-40 text-navy-300" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-600">6+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
