import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal, Cloud, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden pt-20">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0">
        <Terminal className="absolute top-32 left-10 text-green-400/20 w-8 h-8 animate-bounce delay-0" />
        <Cloud className="absolute top-44 right-20 text-blue-400/20 w-10 h-10 animate-bounce delay-1000" />
        <Zap className="absolute bottom-32 left-20 text-orange-400/20 w-6 h-6 animate-bounce delay-500" />
        <Terminal className="absolute bottom-20 right-10 text-green-400/20 w-8 h-8 animate-bounce delay-1500" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">{t('hero.title')}</span>
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.description')}
              <br />
              <span className="text-lg text-gray-400">
                {t('hero.tagline')}
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              {t('hero.viewProjects')}
            </button>
            
            <button
              onClick={scrollToContact}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.contact')}
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/devops-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/devops-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:contact@devopsengineer.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={28} />
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="mx-auto text-gray-400 w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;