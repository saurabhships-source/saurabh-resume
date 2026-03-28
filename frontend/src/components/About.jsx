import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, CircleCheck as CheckCircle } from 'lucide-react';

const About = () => {

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  const highlights = [
    'Premium Banking – Retention Expert with hands-on experience at Citi Bank (TCS) and JP Morgan Chase (Concentrix)',
    '5 Years at Accenture – International client support for Verizon (telecom) and Facebook (digital)',
    'NGO Trainer – Facilitated communication and professional skills sessions under Accenture’s social initiative',
    'Full Lifecycle Ownership – Client acquisition, onboarding, operations, and final delivery at Inventive Cafe',
    'Multi-channel expertise – Voice, chat, and email support with high SLA & CSAT'
  ];

  const coreStrengths = [
    {
      icon: Target,
      title: 'Customer Retention',
      description: 'Handling objections and converting potential exits into positive outcomes'
    },
    {
      icon: TrendingUp,
      title: 'KPI / KRA Monitoring',
      description: 'Tracking performance metrics to drive continuous improvement'
    },
    {
      icon: Shield,
      title: 'Escalation Handling',
      description: 'Resolving high-priority issues with empathy and precision'
    },
    {
      icon: Zap,
      title: 'Full Client Lifecycle',
      description: 'From acquisition to delivery with complete ownership'
    }
  ];

  return (
    <motion.section
      id="about"
      style={{ y }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                Professional Summary
              </h3>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                9+ Years Across Retention, Operations & Digital Marketing
              </h2>
            </div>

            <div className="space-y-5 text-lg text-gray-700">

              <p>
                Results-oriented professional with 9+ years of experience in
                <strong> customer retention, operations, training, and delivery</strong>.
              </p>

              <p>
                Experienced in handling end-to-end client lifecycle across
                <strong> banking and digital domains</strong>.
              </p>

              <p>
                Skilled in managing premium clients, improving processes, and delivering results
                with strong communication and ownership mindset.
              </p>

              <p className="text-blue-900 font-semibold">
                Immediate joiner — open to all shifts & WFH
              </p>

            </div>

            {/* Highlights */}
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-900">
              <h4 className="font-bold mb-4">Career Highlights</h4>

              <ul className="space-y-3">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-900" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* ✅ FIXED IMAGE */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/d2zk4mih_ChatGPT%20Image%20Mar%2020%2C%202026%2C%2012_48_16%20PM.png"
                alt="Saurabh"
                className="w-full h-full object-cover aspect-[3/4]"
                style={{ objectPosition: "center top" }}
              />
            </motion.div>

            {/* Strengths */}
            <div className="grid sm:grid-cols-2 gap-6">
              {coreStrengths.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-12 h-12 bg-blue-900 flex items-center justify-center rounded-lg mb-4">
                      <Icon className="text-white w-6 h-6" />
                    </div>

                    <h4 className="font-bold mb-2">{s.title}</h4>
                    <p className="text-sm text-gray-600">{s.description}</p>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default About;
