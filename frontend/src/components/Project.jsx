import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, ExternalLink, Code2, Users, Target } from 'lucide-react';

const Project = () => {
  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-navy-600 uppercase tracking-wide">Personal Initiative</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Building Real Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Self-driven SaaS platform solving real operational challenges for growing businesses
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <motion.div
                className="relative h-64 lg:h-auto overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png"
                  alt="Saurabh Mishra - BizControl Founder"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-900/60"></div>
              </motion.div>

              {/* Right - Content */}
              <div className="p-8 lg:p-12 bg-white text-gray-900">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-14 h-14 rounded-lg bg-navy-600 flex items-center justify-center">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">BizControl.tech</h3>
                    <p className="text-navy-600 text-sm font-semibold">SaaS Operations Management Platform</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">The Problem</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Most SMBs struggle with scattered task management, inconsistent team productivity, and lack of 
                      operational visibility—leading to missed deadlines, inefficiency, and poor resource utilization.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">The Solution</h4>
                    <p className="text-gray-700 leading-relaxed">
                      BizControl is an all-in-one operations management platform that centralizes task management, 
                      team collaboration, and performance analytics—helping businesses run smoother and scale faster.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <Code2 className="w-5 h-5 text-navy-600" />
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
                        <CheckCircle2 className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-navy-50 rounded-lg p-4 mb-6 border border-navy-100">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 text-navy-600" />
                    <div className="text-sm text-navy-700 font-semibold">Target Users</div>
                  </div>
                  <div className="text-gray-900 font-semibold">SMBs, Operations Managers, Remote Teams, Growing Startups</div>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-lg text-sm border border-green-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-green-700 font-semibold">Active Development</span>
                  </div>
                  <a
                    href="https://bizcontrol.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-navy-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-navy-700 transition-colors shadow-lg"
                  >
                    <span>Visit Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

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
