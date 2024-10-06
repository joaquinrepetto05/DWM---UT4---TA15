import React from 'react';
import { useTheme } from '../ThemeContext/index.jsx';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

export default ThemeSwitcher;
