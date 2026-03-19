import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Business Strategy Masterclass',
      description: 'Comprehensive training in strategic planning, business development, and competitive analysis',
      skills: ['Strategic Planning', 'Market Analysis', 'Business Development', 'Competitive Strategy']
    },
    {
      title: 'Leadership & Management Diploma',
      description: 'Advanced leadership principles, team dynamics, and organizational management',
      skills: ['Team Leadership', 'Organizational Behavior', 'Change Management', 'Decision Making']
    },
    {
      title: 'Stakeholder Management',
      description: 'Expert-level stakeholder engagement, communication, and relationship building',
      skills: ['Communication', 'Relationship Building', 'Conflict Resolution', 'Negotiation']
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wide">Professional Development</h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Certifications & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development in business, leadership, and management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full bg-navy-600 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Areas:</h4>
                {cert.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-navy-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{skill}</span>
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

export default Certifications;
