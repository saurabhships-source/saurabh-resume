import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Zap, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    'Contributed to improving customer retention rates through targeted follow-up strategies and account management',
    'Managed and coordinated teams of up to 30 members, tracking KPIs and supporting performance goals',
    'Worked on process optimization initiatives that helped reduce response times and improve workflow efficiency',
    'Handled 200+ customer escalations with a 94% satisfaction rate by providing timely resolutions',
    'Trained new team members on processes and quality standards, helping reduce onboarding time'
  ];

  const coreStrengths = [
    {
      icon: Target,
      title: 'Operations Management',
      description: 'Support day-to-day operations, process improvements, and workflow coordination across teams'
    },
    {
      icon: TrendingUp,
      title: 'Customer Retention',
      description: 'Work on retention strategies, account management, and initiatives to reduce customer churn'
    },
    {
      icon: Shield,
      title: 'Problem Resolution',
      description: 'Handle escalations professionally, working to resolve issues and maintain customer satisfaction'
    },
    {
      icon: Zap,
      title: 'Team Coordination',
      description: 'Support and guide team members, track performance, and help achieve operational targets'
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
                Experienced in Operations, Retention, and Team Management
              </h2>
            </motion.div>

            <motion.div className="space-y-5 text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
              <p>
                I have over 6 years of experience working in operations and customer support roles across organizations 
                like <strong>TCS (Citi Bank)</strong>, <strong>Concentrix (JP Morgan Chase)</strong>, and <strong>Accenture</strong>.
              </p>
              <p>
                My work has focused on supporting teams, handling customer escalations, improving processes, and contributing 
                to retention initiatives. I've worked in fast-paced environments where attention to detail, clear communication, 
                and problem-solving are essential.
              </p>
              <p>
                I'm comfortable managing daily operations, coordinating with cross-functional teams, and working on initiatives 
                that help improve efficiency and customer satisfaction. I also have experience training new team members and 
                supporting their development.
              </p>
              <p className="text-navy-600 font-semibold">
                I'm looking for roles where I can apply my experience in operations management, customer retention, and team 
                coordination to help organizations run smoothly and achieve their goals.
              </p>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl p-6 border-l-4 border-navy-600"
              variants={itemVariants}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">Key Contributions</h4>
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
              alt="Professional Team Collaboration"
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
