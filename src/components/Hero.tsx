import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal, Cloud, Zap, Award, Shield, Code } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const titles = [
    'DevOps Engineer',
    'Cloud Architect', 
    'Infrastructure Specialist',
    'Automation Expert',
    'Site Reliability Engineer'
  ];

  // Typing animation effect with infinite loop
  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentTitle.length) {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        } else {
          // Wait 2 seconds before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100); // 100ms between letters as requested

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, titles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

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

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        >
          {i % 4 === 0 && <Terminal className="w-4 h-4 text-green-400" />}
          {i % 4 === 1 && <Cloud className="w-3 h-3 text-blue-400" />}
          {i % 4 === 2 && <Code className="w-3 h-3 text-purple-400" />}
          {i % 4 === 3 && <Zap className="w-2 h-2 text-orange-400" />}
        </div>
      ))}
    </div>
  );

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900/10 via-transparent to-orange-900/10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Terminal className="absolute top-32 left-10 text-green-400/30 w-8 h-8 animate-bounce delay-0" />
        <Cloud className="absolute top-44 right-20 text-blue-400/30 w-10 h-10 animate-bounce delay-1000" />
        <Zap className="absolute bottom-32 left-20 text-orange-400/30 w-6 h-6 animate-bounce delay-500" />
        <Code className="absolute bottom-20 right-10 text-purple-400/30 w-8 h-8 animate-bounce delay-1500" />
        <Shield className="absolute top-1/3 left-1/4 text-red-400/20 w-6 h-6 animate-bounce delay-2000" />
        <Award className="absolute top-2/3 right-1/4 text-yellow-400/20 w-7 h-7 animate-bounce delay-2500" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Content - Now Centered */}
          <div className="mb-8">
            {/* Constant Typing Animation Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block mb-2">Hi, I'm Lester</span>
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent min-h-[1.2em] font-mono">
                {typedText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              {t('hero.description')}
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
              {t('hero.tagline')}
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 group">
                <img 
                  src="https://images.credly.com/size/68x68/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" 
                  alt="AWS" 
                  className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm text-gray-300 group-hover:text-orange-400 transition-colors duration-300">AWS Certified</span>
              </div>
              
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                <img 
                  src="https://images.credly.com/size/68x68/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png" 
                  alt="Kubernetes" 
                  className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300">Kubernetes CKA</span>
              </div>
              
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 hover:border-blue-600/50 transition-all duration-300 group">
                <img 
                  src="https://images.credly.com/size/68x68/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCC_badge_IT_Support_1000x1000.png" 
                  alt="Google Cloud" 
                  className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm text-gray-300 group-hover:text-blue-600 transition-colors duration-300">GCP Certified</span>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToProjects}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 overflow-hidden"
            >
              <span className="relative z-10">{t('hero.viewProjects')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="group relative border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">{t('hero.contact')}</span>
              <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/sharker3312"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="text-gray-400 group-hover:text-white w-6 h-6 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://linkedin.com/in/lesterdprez"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="text-gray-400 group-hover:text-blue-400 w-6 h-6 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </a>
            
            <a
              href="mailto:lesterdprez.work@gmail.com"
              className="group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="text-gray-400 group-hover:text-green-400 w-6 h-6 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-400 text-sm mb-2 animate-pulse">Scroll para explorar</div>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <ChevronDown className="text-gray-400 w-6 h-6 mt-2 animate-bounce delay-300" />
      </div>
    </section>
  );
};

export default Hero;