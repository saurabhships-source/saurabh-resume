import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, Globe, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science (B.Sc.)',
      year: '2015',
      description: 'Completed undergraduate degree providing a strong analytical foundation for professional growth across BPO, operations, and client management roles.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC / 12th)',
      year: '2009',
      description: 'Completed higher secondary education, building communication and academic skills that underpin professional success.'
    }
  ];

  const languages = [
    { name: 'English', level: 'Professional Proficiency', pct: 95 },
    { name: 'Hindi', level: 'Native', pct: 100 },
    { name: 'Marathi', level: 'Native', pct: 100 }
  ];

  const softSkills = [
    { name: 'Communication', icon: Globe },
    { name: 'Leadership', icon: Star },
    { name: 'Problem Solving', icon: BookOpen },
    { name: 'Adaptability', icon: Star },
    { name: 'Time Management', icon: Calendar },
    { name: 'Teamwork', icon: Globe }
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
          <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">Academic Background</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Education & Languages
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-900" />
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
                    <div className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="font-semibold">{edu.year}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{lang.name}</h4>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-blue-900 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Star className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-5 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold shadow hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
