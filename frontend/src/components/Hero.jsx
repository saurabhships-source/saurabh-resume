import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { MapPin, Briefcase, Download, Mail, TrendingUp, Users, Award, Calendar } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Hero = () => {

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { icon: Calendar, value: 9, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 5, suffix: ' Yrs', label: 'at Accenture' },
    { icon: TrendingUp, value: 3, suffix: '+ Domains', label: 'Global Exposure' },
    { icon: Award, value: 4, suffix: '', label: 'Industries Served' }
  ];

  return (
    <motion.section
      style={{ y }}
      className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="space-y-5">

              <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full border border-green-300">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">
                  Immediate Joiner · Open to All Shifts & WFH
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Saurabh Mishra
              </h1>

              <h2 className="text-xl lg:text-2xl font-semibold text-blue-900">
                BPO Operations Leader · Customer Retention Specialist · Digital Marketing Coordinator
              </h2>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <span>Titwala East, Maharashtra</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-blue-900" />
                  <span>9+ Years Experience</span>
                </div>
              </div>

            </div>

            <p className="text-lg text-gray-700 border-l-4 border-blue-900 pl-4">
              Results-oriented BPO professional with 9+ years of experience in customer retention,
              operations, and digital coordination.
            </p>

            <div className="flex gap-4 flex-wrap">

              <Button
                onClick={scrollToContact}
                className="bg-blue-900 text-white px-8 py-3 rounded-xl hover:scale-105 transition"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>

              <a
                href="/Saurabh_Mishra_Resume.pdf"
                download
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-xl hover:bg-blue-50 hover:scale-105 transition flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE (FIXED ✅) */}
          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-md h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-blue-100 flex items-center justify-center bg-white">

              <motion.img
                src="https://customer-assets.emergentagent.com/job_saurabh-ops/artifacts/syafy5uc_ChatGPT%20Image%20Mar%2019%2C%202026%2C%2011_11_39%20PM.png"
                alt="Saurabh Mishra"
                className="w-full h-full object-contain"
                style={{ objectPosition: 'center top' }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                whileHover={{ y: -5 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-blue-900" />
                <div className="text-2xl font-bold text-blue-900">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};

export default Hero;
