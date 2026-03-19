import React from 'react';
import { Button } from './ui/button';
import { MapPin, Briefcase, Download, Mail, TrendingUp, Users, Award, Target } from 'lucide-react';

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

  const stats = [
    { icon: Briefcase, value: '6+', label: 'Years Experience' },
    { icon: Users, value: '100+', label: 'Team Members Led' },
    { icon: TrendingUp, value: '35%', label: 'Avg. Efficiency Gain' },
    { icon: Award, value: '95%+', label: 'Client Satisfaction' }
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border border-green-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">Available for Immediate Hire</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Saurabh Mishra
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-navy-600 font-bold leading-relaxed">
                Operations & Retention Excellence Leader | 6+ Years Driving Business Growth | Ex-Citi, JP Morgan, Accenture
              </h2>
              
              <div className="flex items-center space-x-6 text-gray-600 pt-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-navy-600" />
                  <span className="font-medium">India (Remote)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-navy-600" />
                  <span className="font-medium">Operations Manager</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-navy-600 pl-4">
              Proven operations leader who transforms underperforming teams into high-achievers and reduces churn through 
              data-driven retention strategies. Delivered <strong className="text-navy-600">$2M+ in retained revenue</strong> across 
              Fortune 500 clients.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-6 text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-6 text-lg font-semibold transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-navy-100">
                <img
                  src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png"
                  alt="Saurabh Mishra - Professional"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-navy-600 text-center hover:-translate-y-1 transition-transform">
                <Icon className="w-8 h-8 text-navy-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;