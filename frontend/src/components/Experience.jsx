import React from 'react';
import { Building2, Calendar, MapPin, TrendingUp, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TCS (Citi Bank)',
      role: 'Account Retention Manager',
      period: '2024 - 2026',
      location: 'Remote',
      impact: {
        metric: '28% Churn Reduction',
        description: 'Delivered $1.2M+ in retained revenue'
      },
      achievements: [
        {
          title: 'Reduced customer churn by 28%',
          description: 'Designed and executed data-driven retention strategies targeting high-risk accounts, resulting in $1.2M+ retained annual revenue'
        },
        {
          title: 'Optimized customer lifecycle management',
          description: 'Implemented proactive engagement framework reducing reactive escalations by 45% and improving customer lifetime value'
        },
        {
          title: 'Built retention playbook',
          description: 'Created standardized retention workflows adopted across 3 regional teams, increasing save rate from 62% to 84%'
        },
        {
          title: 'Cross-functional collaboration',
          description: 'Partnered with product and service teams to resolve systemic issues causing 60% of cancellations, improving NPS by 18 points'
        }
      ]
    },
    {
      company: 'Concentrix (JP Morgan Chase)',
      role: 'Retention Manager',
      period: '2024',
      location: 'Remote',
      impact: {
        metric: '94% CSAT Rate',
        description: 'Managed 200+ high-value escalations'
      },
      achievements: [
        {
          title: 'Handled 200+ critical escalations with 94% satisfaction rate',
          description: 'Managed high-stakes client issues for premium banking customers, maintaining exceptional service standards under pressure'
        },
        {
          title: 'Recovered at-risk relationships',
          description: 'Successfully retained 78% of escalated accounts through personalized intervention strategies and executive-level communication'
        },
        {
          title: 'Streamlined escalation process',
          description: 'Reduced average resolution time from 72 hours to 24 hours through improved workflows and stakeholder coordination'
        },
        {
          title: 'Provided strategic insights',
          description: 'Analyzed escalation patterns and delivered actionable recommendations that reduced repeat issues by 35%'
        }
      ]
    },
    {
      company: 'Accenture (Verizon & Facebook)',
      role: 'Client Support Associate & Trainer',
      period: '2019 - 2024',
      location: 'Mumbai',
      impact: {
        metric: '35% Productivity Boost',
        description: 'Trained 50+ team members'
      },
      achievements: [
        {
          title: 'Trained 50+ associates, improving productivity by 35%',
          description: 'Designed and delivered comprehensive training programs that reduced onboarding time by 40% and accelerated time-to-competency'
        },
        {
          title: 'Exceeded performance metrics consistently',
          description: 'Maintained 96%+ quality scores while handling complex client support across multiple channels (voice, chat, email)'
        },
        {
          title: 'Led process improvement initiatives',
          description: 'Identified and implemented efficiency improvements that saved 120+ hours monthly across the team, earning Quality Champion award'
        },
        {
          title: 'Managed high-value client relationships',
          description: 'Served as escalation point for VIP clients, maintaining 92% first-contact resolution and strengthening client partnerships'
        }
      ]
    },
    {
      company: 'Vidyalankar',
      role: 'Branch Head',
      period: '2018 - 2019',
      location: 'Mumbai',
      impact: {
        metric: '40% Revenue Growth',
        description: 'Full P&L ownership'
      },
      achievements: [
        {
          title: 'Grew branch revenue by 40% year-over-year',
          description: 'Led complete branch operations including sales, operations, and team management, driving consistent double-digit growth'
        },
        {
          title: 'Managed end-to-end operations',
          description: 'Oversaw daily operations, financial administration, attendance, payroll, and performance management for 15+ staff members'
        },
        {
          title: 'Implemented operational excellence programs',
          description: 'Established SOPs and quality standards that improved service delivery efficiency by 30% and customer satisfaction by 25%'
        },
        {
          title: 'Built high-performing sales team',
          description: 'Recruited, trained, and managed sales team that consistently exceeded monthly targets by 15-20%'
        }
      ]
    },
    {
      company: 'Karvy Digikonnect (Bharti AXA)',
      role: 'Team Leader',
      period: '2017 - 2018',
      location: 'Mumbai',
      impact: {
        metric: '96% KPI Compliance',
        description: 'Led 30-member team'
      },
      achievements: [
        {
          title: 'Led 30-member team achieving 96%+ KPI compliance',
          description: 'Managed daily operations, performance tracking, and goal achievement for large team, maintaining industry-leading metrics'
        },
        {
          title: 'Implemented performance management system',
          description: 'Developed KRA/KPI tracking framework and coaching programs that improved team productivity by 28%'
        },
        {
          title: 'Created data-driven reporting',
          description: 'Built comprehensive analytics dashboards providing real-time visibility into team performance for management decision-making'
        },
        {
          title: 'Reduced team attrition by 35%',
          description: 'Implemented employee engagement initiatives and career development programs that significantly improved retention and morale'
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm font-bold text-navy-600 uppercase tracking-wide">Career Journey</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Proven Track Record of Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            6+ years of delivering measurable results across Fortune 500 organizations
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-navy-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-lg text-navy-600 font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Badge */}
                <div className="mt-4 lg:mt-0 bg-navy-600 text-white rounded-xl p-4 text-center min-w-[200px]">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Award className="w-5 h-5" />
                    <div className="text-2xl font-bold">{exp.impact.metric}</div>
                  </div>
                  <div className="text-sm text-blue-100">{exp.impact.description}</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-navy-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;