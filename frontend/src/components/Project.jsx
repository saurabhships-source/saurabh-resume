import React from 'react';
import { Rocket, CheckCircle2, ExternalLink, Code2, Users, Target } from 'lucide-react';

const Project = () => {
  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm font-bold text-navy-600 uppercase tracking-wide">Personal Initiative</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Building Real Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Self-driven SaaS platform solving real operational challenges for growing businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-navy-600 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                  alt="BizControl Project"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent"></div>
              </div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">BizControl.tech</h3>
                    <p className="text-blue-200 text-sm font-semibold">SaaS Operations Management Platform</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">The Problem</h4>
                    <p className="text-blue-50 leading-relaxed">
                      Most SMBs struggle with scattered task management, inconsistent team productivity, and lack of 
                      operational visibility—leading to missed deadlines, inefficiency, and poor resource utilization.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">The Solution</h4>
                    <p className="text-blue-50 leading-relaxed">
                      BizControl is an all-in-one operations management platform that centralizes task management, 
                      team collaboration, and performance analytics—helping businesses run smoother and scale faster.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-white flex items-center space-x-2">
                    <Code2 className="w-5 h-5" />
                    <span>Core Capabilities:</span>
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Intelligent Task & Project Management with automation',
                      'Real-time Team Productivity Analytics & Insights',
                      'Customizable Operations Dashboards',
                      'Process Workflow Builder & Optimization Tools',
                      'Integration with existing business tools'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-50 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 text-blue-200" />
                    <div className="text-sm text-blue-100">Target Users</div>
                  </div>
                  <div className="text-white font-semibold">SMBs, Operations Managers, Remote Teams, Growing Startups</div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-white font-medium">Active Development</span>
                  </div>
                  <a
                    href="https://bizcontrol.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-navy-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-navy-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-navy-600">Why This Matters:</strong> This project demonstrates my entrepreneurial mindset 
              and ability to identify real business problems. It showcases technical understanding, product thinking, and 
              my passion for building solutions that improve operational efficiency—skills that translate directly into 
              value for any organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
