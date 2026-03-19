import React from 'react';
import { Rocket, CheckCircle2, ExternalLink, Code2 } from 'lucide-react';

const Project = () => {
  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Personal Initiative</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Featured Project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Self-driven innovation to solve real-world business challenges
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
                    <p className="text-blue-200 text-sm">Productivity & Operations Management Tool</p>
                  </div>
                </div>

                <p className="text-lg text-blue-50 mb-6 leading-relaxed">
                  A self-initiated project built to solve real business challenges in productivity, task management, 
                  and workflow efficiency. This platform demonstrates my deep understanding of operations, systems, 
                  and business processes.
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-white flex items-center space-x-2">
                    <Code2 className="w-5 h-5" />
                    <span>Key Features:</span>
                  </h4>
                  <div className="space-y-2">
                    {[
                      'Task Management & Workflow Automation',
                      'Team Productivity Tracking',
                      'Operations Dashboard & Analytics',
                      'Business Process Optimization Tools'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-white font-medium">Currently Under Development</span>
                </div>

                <a
                  href="https://bizcontrol.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 mt-6 text-white hover:text-blue-200 transition-colors font-medium"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-navy-600">Why This Matters:</strong> This project showcases my entrepreneurial mindset, 
              technical understanding, and ability to identify and solve real business problems. It reflects my passion for 
              improving operational efficiency and demonstrates initiative beyond traditional work responsibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
