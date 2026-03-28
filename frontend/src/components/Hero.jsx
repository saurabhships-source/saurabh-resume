import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MapPin, Briefcase, Download, Mail, TrendingUp, Users, Award, Calendar } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {
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

  // Apple-style stagger container
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Smooth Apple easing
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
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden will-change-transform">
      <div className="container mx-auto px-6 lg:px-12">

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <div className="space-y-5">

              <motion.div variants={item}>
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border border-green-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">
                    Immediate Joiner · Open to All Shifts & WFH
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={item}
              >
                Saurabh Mishra
              </motion.h1>

              <motion.h2
                className="text-xl lg:text-2xl font-semibold leading-relaxed text-blue-900"
                variants={item}
              >
                BPO Operations Leader · Customer Retention Specialist · Digital Marketing Coordinator
              </motion.h2>

              <motion.div
                className="flex flex-wrap gap-6 text-gray-600 pt-1"
                variants={item}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <span className="font-medium">Titwala East, Maharashtra</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-blue-900" />
                  <span className="font-medium">9+ Years Experience</span>
                </div>
              </motion.div>

              <motion.div className="flex flex-wrap gap-2 pt-1" variants={item}>
                {['Premium Banking', '5 Yrs @ Accenture', 'NGO Trainer', 'Full Lifecycle'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

            </div>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-blue-900 pl-4"
              variants={item}
            >
              Results-oriented BPO professional and digital marketing coordinator with 9+ years of experience
              spanning customer retention, team coordination, process training, and project delivery.
              Experienced in handling end-to-end client lifecycle including sales, operations, and delivery.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={item}>

              <Button
                onClick={scrollToContact}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>

              <a
                href="/Saurabh_Mishra_Resume.pdf"
                download="Saurabh_Mishra_Resume.pdf"
                className="inline-flex items-center border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>

            </motion.div>

          </div>

          {/* RIGHT IMAGE WITH FLOATING EFFECT */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-100"

              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png"
                alt="Saurabh Mishra"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-900 text-center"

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}

                whileHover={{ y: -6, scale: 1.03 }}
              >
                <Icon className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-900 mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
