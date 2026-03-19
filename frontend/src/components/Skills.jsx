import React from 'react';
import { 
  Settings, 
  Users, 
  Headphones, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2,
  Lightbulb,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Settings,
      title: 'Operations Management',
      skills: ['Process Improvement', 'Workflow Optimization', 'Resource Planning', 'Performance Tracking']
    },
    {
      icon: Users,
      title: 'Team Leadership',
      skills: ['Team Management', 'Performance Coaching', 'Talent Development', 'Conflict Resolution']
    },
    {
      icon: Headphones,
      title: 'Virtual Assistance',
      skills: ['Administrative Support', 'Calendar Management', 'Email Management', 'Document Preparation']
    },
    {
      icon: TrendingUp,
      title: 'Sales & Growth',
      skills: ['Client Acquisition', 'Customer Retention', 'Revenue Growth', 'Sales Strategy']
    },
    {
      icon: Target,
      title: 'Training & Development',
      skills: ['Onboarding Programs', 'Skill Training', 'Knowledge Transfer', 'Performance Improvement']
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      skills: ['Client Relations', 'Stakeholder Management', 'Presentation Skills', 'Cross-functional Collaboration']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      skills: ['KPI Tracking', 'Performance Reports', 'Data Analysis', 'CRM Management']
    },
    {
      icon: Shield,
      title: 'Problem Solving',
      skills: ['Escalation Handling', 'Critical Thinking', 'Decision Making', 'Crisis Management']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Core Competencies</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning operations, leadership, and business development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-lg bg-navy-600 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-navy-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Key Strengths */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-8 h-8 text-navy-600" />
            <h3 className="text-2xl font-bold text-gray-900">Personal Strengths</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-navy-600 mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Excellent Communication</h4>
                <p className="text-sm text-gray-600">Strong interpersonal and presentation abilities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-navy-600 mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Leadership Excellence</h4>
                <p className="text-sm text-gray-600">Proven team management and motivation skills</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-navy-600 mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Business Acumen</h4>
                <p className="text-sm text-gray-600">Sales mindset with strategic thinking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-navy-600 mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Calm Under Pressure</h4>
                <p className="text-sm text-gray-600">Patient and composed in challenging situations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-navy-600 mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Professional Attitude</h4>
                <p className="text-sm text-gray-600">Reliable and dedicated to excellence</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-navy-600 mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Complex Problem Solver</h4>
                <p className="text-sm text-gray-600">Analytical approach to challenging scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
