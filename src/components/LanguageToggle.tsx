import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 border border-gray-700 hover:border-gray-600"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <div className="flex items-center space-x-1">
        {language === 'es' ? (
          <>
            <span className="text-lg">🇪🇸</span>
            <span className="text-sm text-gray-300 hidden sm:block">ES</span>
          </>
        ) : (
          <>
            <span className="text-lg">🇺🇸</span>
            <span className="text-sm text-gray-300 hidden sm:block">EN</span>
          </>
        )}
      </div>
    </button>
  );
};

export default LanguageToggle;