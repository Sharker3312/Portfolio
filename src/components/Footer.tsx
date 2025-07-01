import React from 'react';
import { Heart, Code, Terminal } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DE</span>
              </div>
              <span className="ml-3 text-white font-semibold text-lg">{t('footer.brand')}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                  {t('nav.experience')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Focus */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.specialties')}</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'Ansible'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-xs hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 sm:mb-0">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              <span>{t('footer.and')}</span>
              <Code className="w-4 h-4 text-green-400 mx-1" />
              <span>{t('footer.by')}</span>
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <Terminal className="w-4 h-4 mr-2" />
              <span>{t('footer.copyright')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;