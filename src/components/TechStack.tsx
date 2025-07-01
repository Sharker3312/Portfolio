import React from 'react';
import { Code, Server, Cloud, Monitor, Wrench, Terminal } from 'lucide-react';
import { techCategories } from '../data/portfolio';
import { useTranslation } from '../hooks/useTranslation';

const TechStack: React.FC = () => {
  const { t } = useTranslation();

  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Cloud Platforms': <Cloud className="w-6 h-6" />,
      'Container & Orchestration': <Server className="w-6 h-6" />,
      'Infrastructure as Code': <Code className="w-6 h-6" />,
      'CI/CD Tools': <Wrench className="w-6 h-6" />,
      'Monitoring & Observability': <Monitor className="w-6 h-6" />,
      'Programming & Scripting': <Terminal className="w-6 h-6" />
    };
    return icons[categoryName] || <Code className="w-6 h-6" />;
  };

  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('techStack.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('techStack.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center mr-4 group-hover:from-green-500 group-hover:to-blue-500 transition-all duration-300">
                  <div className="text-white">
                    {getCategoryIcon(category.name)}
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${category.color} group-hover:text-white transition-colors duration-300`}>
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-gray-700 rounded-lg px-3 py-2 text-center hover:bg-gray-600 transition-colors duration-200 group/tech"
                  >
                    <span className="text-gray-300 text-sm font-medium group-hover/tech:text-white transition-colors duration-200">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('techStack.philosophy')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-white w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{t('techStack.automation')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('techStack.automationDesc')}
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="text-white w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{t('techStack.observability')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('techStack.observabilityDesc')}
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-white w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{t('techStack.scalability')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('techStack.scalabilityDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;