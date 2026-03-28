import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { MapPin, Briefcase, Download, Mail, TrendingUp, Users, Award, Calendar } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {

  // ✅ PARALLAX EFFECT
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { icon: Calendar, value: 9, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 5, suffix: ' Yrs', label: 'at Accenture' },
    { icon: TrendingUp, value: 3, suffix: '+ Domains', label: 'Global Exposure' },
    { icon: Award, value: 4, suffix: '', label: 'Industries Served' }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.section
      style={{ y }}
      className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden will-change-transform"
    >
      <div className="container mx-auto px-6 lg:px-12">

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          {/* LEFT */}
          <div className="space-y-8">

            <div className="space-y-5">

              <motion.div variants={item}>
                <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full border border-green-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">
                    Immediate Joiner · Open to All Shifts & WFH
                  </span>
                </div>
              </motion.div>

              <motion.h1 className="text-5xl lg:text-6xl font-bold text-gray-900" variants={item}>
                Saurabh Mishra
              </motion.h1>

              <motion.h2 className="text-xl lg:text-2xl font-semibold text-blue-900" variants={item}>
                BPO Operations Leader · Customer Retention Specialist · Digital Marketing Coordinator
              </motion.h2>

              <motion.div className="flex flex-wrap gap-6 text-gray-600" variants={item}>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <span>Titwala East, Maharashtra</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-blue-900" />
                  <span>9+ Years Experience</span>
                </div>
              </motion.div>

            </div>

            <motion.p
              className="text-lg text-gray-700 border-l-4 border-blue-900 pl-4"
              variants={item}
            >
              Results-oriented BPO professional with 9+ years of experience in customer retention,
              operations, and digital coordination.
            </motion.p>

            <motion.div className="flex gap-4 flex-wrap" variants={item}>

              <Button
                onClick={scrollToContact}
                className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:scale-105 transition"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>

              <a
                href="/Saurabh_Mishra_Resume.pdf"
                download
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 hover:scale-105 transition flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a>

            </motion.div>

          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-100"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.img
                src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </motion.div>

        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-blue-900" />
                <div className="text-2xl font-bold text-blue-900">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;
