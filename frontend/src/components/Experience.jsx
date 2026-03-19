import React from 'react';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TCS (Citi Bank)',
      role: 'Account Retention Manager',
      period: '2024 - 2026',
      location: 'Remote',
      highlights: [
        'Developed and executed retention strategies resulting in significant reduction in customer churn',
        'Managed complete customer lifecycle from acquisition to long-term retention',
        'Analyzed customer behavior patterns to implement proactive retention initiatives',
        'Delivered measurable business impact through improved customer satisfaction scores',
        'Collaborated with cross-functional teams to enhance service delivery'
      ]
    },
    {
      company: 'Concentrix (JP Morgan Chase)',
      role: 'Retention Manager',
      period: '2024',
      location: 'Remote',
      highlights: [
        'Successfully handled complex escalations with professionalism and efficiency',
        'Built and maintained strong customer relationships in high-stakes financial environment',
        'Demonstrated exceptional performance under pressure in fast-paced operations',
        'Implemented customer retention tactics that exceeded organizational targets',
        'Provided strategic insights to improve overall customer experience'
      ]
    },
    {
      company: 'Accenture (Verizon & Facebook)',
      role: 'Client Support Associate & Trainer',
      period: '2019 - 2024',
      location: 'Mumbai',
      highlights: [
        'Delivered exceptional client support across multiple communication channels',
        'Trained and mentored new hires, improving team competency and performance',
        'Contributed to process improvement initiatives that enhanced operational efficiency',
        'Demonstrated strong sales understanding through client interactions and conversions',
        'Performed transcription work with high accuracy and attention to detail',
        'Recognized for consistently exceeding performance metrics and quality standards'
      ]
    },
    {
      company: 'Vidyalankar',
      role: 'Branch Head',
      period: '2018 - 2019',
      location: 'Mumbai',
      highlights: [
        'Managed end-to-end branch operations including sales, administration, and team management',
        'Oversaw daily operations, attendance tracking, payment processing, and staff performance',
        'Led business growth initiatives that increased revenue and market presence',
        'Developed and implemented operational strategies for improved efficiency',
        'Built and led a high-performing team focused on delivering excellence'
      ]
    },
    {
      company: 'Karvy Digikonnect (Bharti AXA)',
      role: 'Team Leader',
      period: '2017 - 2018',
      location: 'Mumbai',
      highlights: [
        'Led and managed a team of 30 associates, ensuring optimal performance and productivity',
        'Responsible for KRA/KPI tracking, performance monitoring, and goal achievement',
        'Created comprehensive reports and analytics for management decision-making',
        'Implemented team development programs that improved overall performance',
        'Successfully managed team operations while maintaining high quality standards'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Career Journey</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6+ years of progressive experience across leading international organizations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-navy-600 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                        <p className="text-lg text-navy-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-navy-500" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-navy-500" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-navy-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
