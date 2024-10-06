import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del idioma
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Estado del idioma ('es' o 'en')

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);