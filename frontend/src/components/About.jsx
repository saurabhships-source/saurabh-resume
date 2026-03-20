import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    'Reduced customer churn by 28% at Citi Bank through data-driven retention strategies',
    'Led teams of 30+ members achieving consistent 96%+ KPI compliance',
    'Improved operational efficiency by 35% through process optimization initiatives',
    'Managed 200+ high-value escalations with 94% client satisfaction rate',
    'Trained 50+ associates, accelerating team productivity and reducing onboarding time by 40%'
  ];

  const coreStrengths = [
    {
      icon: Target,
      title: 'Operations Excellence',
      description: 'Transform chaotic processes into streamlined, scalable operations that drive measurable business growth'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Retention',
      description: 'Proven track record of reducing churn and retaining $2M+ in revenue through strategic customer lifecycle management'
    },
    {
      icon: Shield,
      title: 'Crisis Management',
      description: 'Handle high-pressure escalations with composure, turning dissatisfied clients into brand advocates'
    },
    {
      icon: Zap,
      title: 'Team Leadership',
      description: 'Build and coach high-performing teams that consistently exceed targets and maintain top-tier performance'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }
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
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-sm font-bold text-navy-600 uppercase tracking-wide">About Me</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                I Don't Just Manage Operations—I Transform Them
              </h2>
            </motion.div>

            <motion.div className="space-y-5 text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
              <p className="font-semibold text-gray-900">
                I'm not your typical operations manager. I'm the person companies call when they need someone who can 
                walk into chaos and create order—fast.
              </p>
              <p>
                Over 6 years, I've worked with <strong>TCS (Citi Bank)</strong>, <strong>Concentrix (JP Morgan Chase)</strong>, 
                and <strong>Accenture</strong>—leading teams, fixing broken processes, and driving retention strategies that 
                saved millions in revenue.
              </p>
              <p>
                I thrive in high-pressure environments. Whether it's managing escalations from Fortune 500 clients, 
                coaching underperforming teams into top performers, or building systems that scale—I deliver results 
                that matter to the bottom line.
              </p>
              <p className="text-navy-600 font-semibold">
                If you need someone who can hit the ground running, lead with confidence, and make an immediate impact—
                let's talk.
              </p>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl p-6 border-l-4 border-navy-600"
              variants={itemVariants}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Key Career Achievements</h4>
              <ul className="space-y-3">
                {achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3"
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={achievementVariants}
                  >
                    <CheckCircle className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1622675205169-901710ac8643"
              alt="Professional Team Leadership"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

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
                      className="w-12 h-12 rounded-lg bg-navy-600 flex items-center justify-center mb-4"
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
