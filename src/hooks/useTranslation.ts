import { useLanguage } from './useLanguage';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { t, language };
};