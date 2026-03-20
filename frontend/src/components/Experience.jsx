import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TCS (Citi Bank)',
      role: 'Account Retention Manager',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      responsibilities: [
        'Work on customer retention strategies by identifying at-risk accounts and implementing targeted follow-up processes',
        'Handle customer lifecycle management activities including account reviews, feedback collection, and relationship building',
        'Coordinate with cross-functional teams to address customer concerns and improve service delivery',
        'Contributed to reducing account cancellations through proactive outreach and personalized support'
      ]
    },
    {
      company: 'Concentrix (JP Morgan Chase)',
      role: 'Retention Manager',
      period: 'Mar 2024 - Dec 2024',
      location: 'Remote',
      responsibilities: [
        'Managed high-priority customer escalations for premium banking clients, maintaining a 94% satisfaction rate',
        'Worked on resolving complex account issues by coordinating with internal teams and providing timely solutions',
        'Supported retention efforts by analyzing escalation patterns and suggesting process improvements',
        'Handled sensitive customer interactions professionally while balancing customer needs and company policies'
      ]
    },
    {
      company: 'Accenture (Verizon & Facebook)',
      role: 'Client Support Associate & Trainer',
      period: 'Jun 2019 - Feb 2024',
      location: 'Mumbai',
      responsibilities: [
        'Provided multi-channel customer support (voice, chat, email) for Verizon and Facebook client accounts',
        'Trained new team members on processes, tools, and quality standards, helping reduce onboarding time',
        'Worked on process improvement suggestions that were implemented to enhance team efficiency',
        'Maintained consistent quality scores above 95% while handling high volumes of customer interactions',
        'Supported team leads with performance tracking and quality audits'
      ]
    },
    {
      company: 'Vidyalankar',
      role: 'Branch Head',
      period: 'Apr 2018 - May 2019',
      location: 'Mumbai',
      responsibilities: [
        'Managed daily branch operations including sales coordination, administration, and team supervision',
        'Oversaw operational activities such as attendance tracking, payment processing, and staff management',
        'Supported business growth initiatives through local marketing and customer engagement efforts',
        'Worked on improving operational processes to enhance efficiency and customer experience'
      ]
    },
    {
      company: 'Karvy Digikonnect (Bharti AXA)',
      role: 'Team Leader',
      period: 'Jan 2017 - Mar 2018',
      location: 'Mumbai',
      responsibilities: [
        'Led a team of 30 associates, managing daily operations, performance tracking, and quality monitoring',
        'Tracked team KPIs and KRAs, providing regular performance reports to management',
        'Conducted coaching sessions and performance reviews to help team members meet their goals',
        'Worked on improving team productivity through process refinements and motivational initiatives'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-navy-600 uppercase tracking-wide">Career Journey</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            6+ years working in operations, customer support, and team management roles
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-navy-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-lg text-navy-600 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
