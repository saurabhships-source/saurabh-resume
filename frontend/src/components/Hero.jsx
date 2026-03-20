import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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

  const handleDownloadResume = () => {
    alert('Resume download functionality will be implemented with backend');
  };

  const stats = [
    { icon: Calendar, value: 6, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 30, suffix: '+', label: 'Team Members Managed' },
    { icon: TrendingUp, value: 35, suffix: '%', label: 'Process Improvements' },
    { icon: Award, value: 94, suffix: '%', label: 'Client Satisfaction' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <motion.div variants={itemVariants}>
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full border border-green-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-700">Open to Opportunities</span>
                </div>
              </motion.div>
              
              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Saurabh Mishra
              </motion.h1>
              
              <motion.h2
                className="text-xl lg:text-2xl text-navy-600 font-semibold leading-relaxed"
                variants={itemVariants}
              >
                Operations Manager | Customer Retention Specialist | Team Leader
              </motion.h2>
              
              <motion.div
                className="flex items-center space-x-6 text-gray-600 pt-2"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-navy-600" />
                  <span className="font-medium">Dombivli, India (Remote)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-navy-600" />
                  <span className="font-medium">6+ Years</span>
                </div>
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-navy-600 pl-4"
              variants={itemVariants}
            >
              I work on improving operations, managing teams, and handling customer retention challenges in fast-paced environments. 
              I have 6+ years of experience across TCS (Citi Bank), Concentrix (JP Morgan Chase), and Accenture, where I've supported 
              process improvements, team coordination, and customer satisfaction initiatives.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-6 text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                size="lg"
                variant="outline"
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Professional Photo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <motion.div
              className="relative"
              animate={floatAnimation}
            >
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-navy-100 hover:ring-navy-200 transition-all duration-300">
                <motion.img
                  src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png"
                  alt="Saurabh Mishra - Professional"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Key Stats Section with Animated Counters */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-navy-600 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Icon className="w-8 h-8 text-navy-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy-600 mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;