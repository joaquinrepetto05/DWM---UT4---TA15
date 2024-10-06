import React from 'react';
import { useTheme } from '../ThemeContext/index.jsx';

const ShowTheme = () => {
  const { theme } = useTheme();

  return (
    <p>El tema actual es: {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
  );
};

export default ShowTheme;
