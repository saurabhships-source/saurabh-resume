import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Account Retention Manager – Citi Bank',
      period: 'Jul 2024 – Jan 2026',
      duration: '1.5 Yrs',
      location: 'Remote',
      responsibilities: [
        'Managed retention of premium banking customers by understanding concerns and delivering tailored financial solutions to strengthen long-term loyalty.',
        'Implemented targeted retention strategies — identifying at-risk accounts, handling objections effectively, and converting potential exits into positive outcomes.',
        'Resolved high-priority escalations with empathy and precision, improving CSAT scores and reducing repeat complaint volumes.',
        'Collaborated with backend teams to ensure seamless, SLA-compliant issue resolution across all customer touchpoints.',
        'Monitored and reported on key KPIs including retention rate, quality scores, and first-call resolution to continuously improve performance.'
      ]
    },
    {
      company: 'Concentrix',
      role: 'Retention Specialist – JP Morgan Chase',
      period: 'Mar 2024 – Jul 2024',
      duration: '4 Months',
      location: 'Remote',
      responsibilities: [
        'Handled high-volume inbound customer interactions for a leading global financial institution with accuracy and professionalism.',
        'Managed structured retention conversations, identifying pain points and providing solutions that reduced churn and improved satisfaction.',
        'Maintained strict service quality and compliance standards throughout all customer engagements.',
        'Demonstrated strong active listening, empathy, and problem-solving skills in every interaction.'
      ]
    },
    {
      company: 'Accenture',
      role: 'Client Support Associate – Verizon & Facebook',
      period: 'Mar 2019 – Feb 2024',
      duration: '5 Years',
      location: 'Mumbai',
      responsibilities: [
        'Delivered multi-channel support (voice, chat, and email) for international clients — Verizon and Facebook — ensuring high-quality customer experiences.',
        'Resolved customer queries within SLA timelines, maintaining strong satisfaction scores.',
        'Supported Facebook operations with accuracy and compliance.',
        'Assisted in NGO training sessions focused on communication and professional readiness.',
        'Mentored peers on escalation handling and quality improvement.'
      ]
    },
    {
      company: 'Inventive Cafe (Freelance)',
      role: 'Digital Marketing Coordinator & Client Manager',
      period: '2017 – 2018',
      duration: '~1 Year',
      location: 'Remote',
      responsibilities: [
        'Managed end-to-end client lifecycle — from lead generation to final delivery.',
        'Converted leads through effective pitching and negotiation.',
        'Coordinated with designers and developers for project execution.',
        'Handled feedback, revisions, and payment closure.',
        'Maintained client relationships and ensured satisfaction.'
      ]
    },
    {
      company: 'Karvy Digikonnect',
      role: 'Team Leader – Bharti AXA',
      period: 'Aug 2018 – Nov 2018',
      duration: '4 Months',
      location: 'Mumbai',
      responsibilities: [
        'Led a team of 30+ associates, ensuring smooth operations.',
        'Achieved KPI/KRA targets while maintaining service quality.',
        'Handled escalations and supported team in complex cases.',
        'Coordinated with management for performance improvement.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
            Career Journey
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            9+ years across BPO operations, customer retention, digital marketing, and team leadership
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-200"

              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}

              whileHover={{ y: -8, scale: 1.02 }}
            >

              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-900 font-semibold mb-2">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                        {exp.duration}
                      </span>

                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-blue-900 mt-1" />
                    <p className="text-gray-700">{responsibility}</p>
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
