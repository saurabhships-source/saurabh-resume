import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, CircleCheck as CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Premium Banking – Retention Expert with hands-on experience at Citi Bank (TCS) and JP Morgan Chase (Concentrix)',
    '5 Years at Accenture – International client support for Verizon (telecom) and Facebook (digital)',
    "NGO Trainer \u2013 Facilitated communication and professional skills sessions under Accenture\u2019s social initiative",
    'Full Lifecycle Ownership – Client acquisition, onboarding, operations, and final delivery at Inventive Cafe',
    'Multi-channel expertise – Voice, chat, and email support with consistently high SLA and CSAT scores'
  ];

  const coreStrengths = [
    {
      icon: Target,
      title: 'Customer Retention',
      description: 'Identifying at-risk accounts, handling objections, and converting potential exits into positive outcomes'
    },
    {
      icon: TrendingUp,
      title: 'KPI / KRA Monitoring',
      description: 'Tracking retention rate, quality scores, and first-call resolution to continuously improve performance'
    },
    {
      icon: Shield,
      title: 'Escalation Handling',
      description: 'Resolving high-priority issues with empathy and precision, improving CSAT and reducing repeat complaints'
    },
    {
      icon: Zap,
      title: 'Full Client Lifecycle',
      description: 'End-to-end ownership from cold calling and pitching to onboarding, execution, and final delivery'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' }
    })
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">Professional Summary</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                9+ Years Across Retention, Operations & Digital Marketing
              </h2>
            </motion.div>

            <motion.div className="space-y-5 text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
              <p>
                Results-oriented BPO professional and digital marketing coordinator with 9+ years of experience
                spanning <strong>customer retention, team coordination, process training, and project delivery</strong>.
              </p>
              <p>
                Experienced in handling end-to-end client lifecycle including sales, operations, and delivery.
                Handled end-to-end ownership of client interactions from acquisition to delivery across{' '}
                <strong>banking and digital domains</strong>.
              </p>
              <p>
                Adept at managing premium banking clients, supporting cross-functional teams, and independently
                driving client acquisition and fulfilment with consistent quality. Languages: <strong>English, Hindi, Marathi</strong>.
              </p>
              <p className="text-blue-900 font-semibold">
                Immediate joiner — open to all shifts & WFH. Banking · Telecom · Insurance · Digital Mktg · BPO / KPO
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border-l-4 border-blue-900"
              variants={itemVariants}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Career Highlights</h4>
              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3"
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={achievementVariants}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right - Image & Strengths */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="rounded-2xl shadow-2xl overflow-hidden w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/d2zk4mih_ChatGPT%20Image%20Mar%2020%2C%202026%2C%2012_48_16%20PM.png"
                alt="Saurabh Mishra - Professional at Work"
                className="w-full h-[400px] object-cover object-top"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {coreStrengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-blue-900 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-900 mb-2">{strength.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{strength.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
