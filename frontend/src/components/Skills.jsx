import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Target,
  MessageSquare,
  BarChart3,
  Shield,
  Megaphone,
  Wrench
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: 'Core Competencies',
      skills: [
        'Team Coordination',
        'Customer Retention',
        'Training Support',
        'Escalation Handling',
        'KPI / KRA Monitoring',
        'Sales & Communication'
      ]
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      skills: [
        'Client Acquisition & Sales',
        'Cold Calling & Lead Gen.',
        'SEO – On-Page Basics',
        'Canva Graphic Design',
        'Website Design (Basic)',
        'Social Media Handling',
        'Project Coordination'
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        'Asana · Trello · ClickUp',
        'Slack · Zoom',
        'Excel · Gmail · Canva',
        'CRM Systems',
        'Multi-channel Support',
        'Reporting & Documentation'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Soft Skills',
      skills: [
        'Communication',
        'Leadership',
        'Problem Solving',
        'Adaptability',
        'Time Management',
        'Teamwork'
      ]
    },
    {
      icon: Users,
      title: 'Industries Served',
      skills: [
        'Banking (Citi, JP Morgan)',
        'Telecom (Verizon)',
        'Social Media (Facebook)',
        'Insurance (Bharti AXA)',
        'Digital Marketing',
        'BPO / KPO'
      ]
    },
    {
      icon: TrendingUp,
      title: 'What I Bring',
      skills: [
        'Client-First Mindset',
        'Team Coordination & Mentoring',
        'Full Lifecycle Ownership',
        'Adaptability Across Roles',
        'SLA & Compliance Focused',
        'Immediate Joiner – WFH Ready'
      ]
    },
    {
      icon: Target,
      title: 'Training Exposure',
      skills: [
        'NGO Student Training (Accenture)',
        'Communication Skills Sessions',
        'Professional Readiness Programs',
        'Peer Escalation Mentoring',
        'Voice & Email Best Practices',
        'Workplace Confidence Building'
      ]
    },
    {
      icon: BarChart3,
      title: 'Languages',
      skills: [
        'English (Professional)',
        'Hindi (Native)',
        'Marathi (Native)',
        'Multi-channel Written Comm.',
        'Voice & Chat Support',
        'Client-facing Communication'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-blue-900 uppercase tracking-wide">Core Competencies</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning BPO operations, customer retention, digital marketing, and team leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-lg bg-blue-900 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-gray-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-1.5 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
