import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {

  // ✅ PARALLAX EFFECT
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -80]);

  const experiences = [
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Account Retention Manager – Citi Bank',
      period: 'Jul 2024 – Jan 2026',
      duration: '1.5 Yrs',
      location: 'Remote',
      responsibilities: [
        'Managed retention of premium banking customers and improved long-term loyalty.',
        'Identified at-risk accounts and converted exits into positive outcomes.',
        'Resolved escalations with empathy and precision, improving CSAT.',
        'Collaborated with backend teams for SLA-compliant resolutions.',
        'Tracked KPIs like retention rate, quality scores, and FCR.'
      ]
    },
    {
      company: 'Concentrix',
      role: 'Retention Specialist – JP Morgan Chase',
      period: 'Mar 2024 – Jul 2024',
      duration: '4 Months',
      location: 'Remote',
      responsibilities: [
        'Handled high-volume inbound customer interactions professionally.',
        'Reduced churn through structured retention conversations.',
        'Maintained strict service quality and compliance standards.',
        'Demonstrated strong communication and problem-solving skills.'
      ]
    },
    {
      company: 'Accenture',
      role: 'Client Support Associate – Verizon & Facebook',
      period: 'Mar 2019 – Feb 2024',
      duration: '5 Years',
      location: 'Mumbai',
      responsibilities: [
        'Provided multi-channel support for international clients.',
        'Maintained high SLA and customer satisfaction scores.',
        'Handled Facebook operations with accuracy and compliance.',
        'Conducted NGO training sessions.',
        'Mentored team members to improve performance.'
      ]
    },
    {
      company: 'Inventive Cafe (Freelance)',
      role: 'Digital Marketing Coordinator & Client Manager',
      period: '2017 – 2018',
      duration: '~1 Year',
      location: 'Remote',
      responsibilities: [
        'Managed full client lifecycle from lead generation to delivery.',
        'Converted leads through pitching and negotiation.',
        'Coordinated with designers and developers.',
        'Handled feedback, revisions, and payments.',
        'Ensured client satisfaction and repeat business.'
      ]
    },
    {
      company: 'Karvy Digikonnect',
      role: 'Team Leader – Bharti AXA',
      period: 'Aug 2018 – Nov 2018',
      duration: '4 Months',
      location: 'Mumbai',
      responsibilities: [
        'Led a team of 30+ associates.',
        'Achieved KPI/KRA targets consistently.',
        'Handled escalations efficiently.',
        'Improved team performance through coordination.'
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      style={{ y }}
      className="py-20 bg-white will-change-transform"
    >
      <div className="container mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-sm font-bold text-blue-900 uppercase">
            Career Journey
          </h3>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Professional Experience
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            9+ years across BPO, retention, digital marketing, and leadership
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="max-w-6xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg border"

              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 }
              }}

              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              }}

              whileHover={{ y: -6, scale: 1.02 }}
            >

              {/* Header */}
              <div className="flex space-x-4 mb-6 border-b pb-6">
                <div className="w-14 h-14 bg-blue-900 flex items-center justify-center rounded-xl">
                  <Building2 className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-blue-900 font-semibold">{exp.company}</p>

                  <div className="flex gap-4 text-sm text-gray-600 mt-2">
                    <span className="flex items-center">
                      <Calendar className="w-4 mr-1" />
                      {exp.period}
                    </span>

                    <span className="bg-blue-100 px-2 rounded">
                      {exp.duration}
                    </span>

                    <span className="flex items-center">
                      <MapPin className="w-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="space-y-3">
                {exp.responsibilities.map((item, i) => (
                  <div key={i} className="flex space-x-3">
                    <ChevronRight className="text-blue-900 mt-1" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Experience;
