import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span className="divider">|</span>
      <button
        className={i18n.language === 'es' ? 'active' : ''}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  );
};
