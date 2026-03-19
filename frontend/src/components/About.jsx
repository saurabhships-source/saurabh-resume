import React from 'react';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const strengths = [
    {
      icon: Target,
      title: 'Strategic Operations',
      description: 'Expert in optimizing business processes and improving operational efficiency'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Proven ability to manage, train, and motivate high-performing teams'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Drive revenue growth through sales strategies and customer retention'
    },
    {
      icon: Award,
      title: 'Excellence Mindset',
      description: 'Calm, composed professional with strong problem-solving abilities'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1622675205169-901710ac8643"
              alt="Professional Team"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-navy-600 uppercase tracking-wide">About Me</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Driving Business Excellence Through Operations & Leadership
              </h2>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With over 6 years of experience across leading organizations like TCS, Concentrix, and Accenture, 
                I specialize in transforming business operations, leading diverse teams, and delivering exceptional results.
              </p>
              <p>
                My approach combines strategic thinking with hands-on execution. Whether managing complex operations, 
                training new talent, or driving customer retention strategies, I bring a calm, patient, and results-oriented 
                mindset to every challenge.
              </p>
              <p>
                I excel in high-pressure environments, handle escalations with professionalism, and have a proven track 
                record of improving team performance, reducing churn, and enhancing customer satisfaction across 
                international corporate settings.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-navy-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{strength.title}</h4>
                    <p className="text-sm text-gray-600">{strength.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
