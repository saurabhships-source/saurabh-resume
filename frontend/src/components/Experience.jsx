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
        'Delivered multi-channel support (voice, chat, and email) for international clients — Verizon (telecom) and Facebook (digital) — ensuring high-quality, consistent customer experiences.',
        'Resolved customer queries within strict SLA timelines, maintaining high first-contact resolution and satisfaction scores.',
        'Supported Facebook\'s client-facing operations by handling account, policy, and advertising-related queries with accuracy and compliance.',
        'Assisted in training NGO students — conducting sessions on communication, professional readiness, and workplace confidence as part of Accenture\'s social initiative.',
        'Mentored peers on de-escalation techniques, customer handling, and quality adherence — contributing to improved team performance metrics.'
      ]
    },
    {
      company: 'Inventive Cafe (Freelance)',
      role: 'Digital Marketing Coordinator & Client Manager',
      period: '2017 – 2018',
      duration: '~1 Year',
      location: 'Remote',
      responsibilities: [
        'Independently managed end-to-end client lifecycle — from cold calling and service pitching to onboarding, execution, and final delivery across logo, website, SEO, and social media projects.',
        'Generated and converted leads through targeted outreach and persuasive pitching — negotiating scope and pricing to close deals effectively.',
        'Coordinated with designers and developers to ensure timely, quality-driven project execution aligned with client briefs and expectations.',
        'Handled revision cycles, client feedback, payment collection, and final sign-off — maintaining strong client relationships and driving repeat business.',
        'Demonstrated full ownership of sales and operations lifecycle, independently managing timelines, quality assurance, and client satisfaction.'
      ]
    },
    {
      company: 'Karvy Digikonnect',
      role: 'Customer Service Associate – Bharti AXA',
      period: 'Aug 2018 – Nov 2018',
      duration: '4 Months',
      location: 'Mumbai',
      responsibilities: [
        'Handled inbound customer queries related to insurance policies, renewals, and claims with accuracy and empathy.',
        'Gained foundational exposure to insurance processes, compliance standards, and customer service protocols.',
        'Supported team coordination and consistently met daily KPI/KRA targets set by team leadership.'
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
          <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">Career Journey</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            9+ years across BPO operations, customer retention, digital marketing, and team leadership
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
                  <div className="w-14 h-14 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-lg text-blue-900 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <span className="font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">{exp.duration}</span>
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
                    <ChevronRight className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
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
