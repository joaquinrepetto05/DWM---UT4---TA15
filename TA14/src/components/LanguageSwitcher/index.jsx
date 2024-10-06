import React from 'react';
import { useLanguage } from '../LanguageContext/index.jsx';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      Cambiar a {language === 'es' ? 'inglés' : 'español'}
    </button>
  );
};

export default LanguageSwitcher;
