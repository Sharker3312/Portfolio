import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { useTranslation } from '../hooks/useTranslation';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-500 to-orange-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-800 z-10"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl group w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <MapPin size={16} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-400 bg-gray-800 px-4 py-2 rounded-full">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">
                        {exp.startDate} - {exp.endDate === 'Present' ? t('experience.present') : exp.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight size={16} className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-sm mb-3">{t('experience.technologies')}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs hover:bg-gray-600 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            {t('experience.footer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;