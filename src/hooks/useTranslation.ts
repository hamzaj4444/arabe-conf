import { useLanguage } from '@/contexts/LanguageContext';
import { Translation } from '@/data/conferenceData';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (text: Translation): string => {
    return text[language] || text.ar || text.fr || '';
  };

  return { t, language };
};