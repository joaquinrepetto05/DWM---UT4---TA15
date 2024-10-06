import React from 'react';
import { useTheme } from '../ThemeContext/index.jsx';
import styles from './index.module.css';

const StyledComponent = () => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.styledComponent} ${styles[theme]}`}>
      <h1>Este es un componente estilizado según el tema {theme}</h1>
    </div>
  );
};

export default StyledComponent;
