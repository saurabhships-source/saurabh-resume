import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Briefcase, Users, Globe, Zap } from 'lucide-react';

const Certifications = () => {
  const careerHighlights = [
    {
      icon: Briefcase,
      title: '5 Years',
      subtitle: 'Longest Tenure',
      org: 'Accenture',
      color: 'bg-blue-900'
    },
    {
      icon: Globe,
      title: "Int'l Clients",
      subtitle: 'Global Experience',
      org: 'Chase · Citi · Verizon',
      color: 'bg-teal-700'
    },
    {
      icon: Users,
      title: 'NGO Trainer',
      subtitle: 'Training Impact',
      org: 'Comm. Skills',
      color: 'bg-indigo-700'
    },
    {
      icon: Zap,
      title: 'Full Stack',
      subtitle: 'Client Ownership',
      org: 'Sales → Delivery',
      color: 'bg-slate-700'
    }
  ];

  const whatIBring = [
    {
      title: 'Client First',
      description: 'Deep experience managing premium clients across banking, telecom, and digital domains with empathy, precision, and consistent results.',
      icon: '🎯'
    },
    {
      title: 'Team Mindset',
      description: 'Ability to coordinate teams, mentor peers, share knowledge, and drive collective improvement through structured support.',
      icon: '🤝'
    },
    {
      title: 'Full Lifecycle',
      description: 'End-to-end ownership from first contact to final delivery — across client acquisition, operations, and project management.',
      icon: '🔄'
    },
    {
      title: 'Adaptable',
      description: 'Proven effectiveness across BPO operations, digital marketing, training, and coordination roles with consistent quality output.',
      icon: '⚡'
    }
  ];

  const industriesServed = ['Banking', 'Telecom', 'Social Media', 'Insurance', 'Digital Mktg', 'BPO / KPO'];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Professional Profile</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Career Highlights & Value Proposition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets Saurabh apart — key milestones, industries served, and value delivered
          </p>
        </motion.div>

        {/* Career Highlights */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {careerHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`${item.color} text-white rounded-2xl p-6 text-center shadow-lg`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <div className="text-2xl font-bold mb-1">{item.title}</div>
                <div className="text-sm opacity-80 mb-1">{item.subtitle}</div>
                <div className="text-xs opacity-70 font-medium">{item.org}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* What I Bring to the Table */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {whatIBring.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries Served</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {industriesServed.map((industry, index) => (
              <motion.span
                key={index}
                className="px-5 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ scale: 1.08 }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
