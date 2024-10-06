import React from 'react';
import { useLanguage } from '../LanguageContext/index.jsx';

const ShowLanguage = () => {
  const { language } = useLanguage();

  return (
    <p>El idioma actual es: {language === 'es' ? 'Español' : 'Inglés'}</p>
  );
};

export default ShowLanguage;
