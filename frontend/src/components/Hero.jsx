import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MapPin, Briefcase, Download, Mail, TrendingUp, Users, Award, Calendar } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import generateResumePDF from '../utils/generateResumePDF';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = async () => {
    await generateResumePDF();
  };

  const stats = [
    { icon: Calendar, value: 9, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 5, suffix: ' Yrs', label: 'at Accenture' },
    { icon: TrendingUp, value: 3, suffix: '', label: 'Global Clients' },
    { icon: Award, value: 4, suffix: '', label: 'Industries Served' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
                  <span className="text-sm font-semibold text-green-700">Immediate Joiner · Open to All Shifts & WFH</span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={itemVariants}
              >
                Saurabh Mishra
              </motion.h1>

              <motion.h2
                className="text-xl lg:text-2xl font-semibold leading-relaxed text-blue-900"
                variants={itemVariants}
              >
                BPO Operations Leader · Customer Retention Specialist · Digital Marketing Coordinator
              </motion.h2>

              <motion.div
                className="flex flex-wrap gap-6 text-gray-600 pt-1"
                variants={itemVariants}
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

              <motion.div className="flex flex-wrap gap-2 pt-1" variants={itemVariants}>
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
              variants={itemVariants}
            >
              Results-oriented BPO professional and digital marketing coordinator with 9+ years of experience
              spanning customer retention, team coordination, process training, and project delivery.
              Experienced in handling end-to-end client lifecycle including sales, operations, and delivery.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Button
                onClick={scrollToContact}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-100 hover:ring-blue-200 transition-all duration-300">
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

        {/* Key Stats */}
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
                className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-900 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Icon className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-900 mb-1">
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
