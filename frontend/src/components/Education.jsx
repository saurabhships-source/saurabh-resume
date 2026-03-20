import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science (BSc)',
      year: '2015',
      description: 'Completed undergraduate degree with focus on analytical thinking and problem-solving'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      year: '2009',
      description: 'Completed higher secondary education'
    }
  ];

  const professionalQualities = [
    {
      title: 'Self-Motivated & Proactive',
      description: 'Take initiative in identifying and solving problems without waiting for direction'
    },
    {
      title: 'Strong Interpersonal Skills',
      description: 'Build positive relationships with colleagues, clients, and stakeholders across all levels'
    },
    {
      title: 'Versatile Team Player',
      description: 'Comfortable working as a team member, team leader, trainer, or virtual assistant based on organizational needs'
    },
    {
      title: 'Team Spirit & Collaboration',
      description: 'Believe team collaboration is integral to productivity and achieving shared goals'
    },
    {
      title: 'Client Engagement & Advisory',
      description: 'Experience in client engagement, providing advisory support, and managing customer relationships'
    },
    {
      title: 'Communication Excellence',
      description: 'Clear and professional communication across channels, ensuring understanding and alignment'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-navy-600 uppercase tracking-wide">Education & Professional Qualities</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Academic Background & Work Approach
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-8 h-8 text-navy-600" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-lg bg-navy-600 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{edu.year}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-navy-600 text-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-2">Professional Approach</h3>
              <p className="text-blue-100 leading-relaxed">
                I'm self-motivated with strong interpersonal and communication skills. I take responsibility seriously 
                and adapt to different roles—whether working as a team member, team leader, trainer, or virtual assistant. 
                I believe team spirit is integral to productivity and success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalQualities.map((quality, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="w-3 h-3 rounded-full bg-navy-600 mb-3"></div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{quality.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;