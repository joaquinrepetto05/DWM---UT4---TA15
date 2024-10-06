import React from 'react';
import { ThemeProvider } from './components/ThemeContext/index.jsx';
import { LanguageProvider } from './components/LanguageContext/index.jsx';
import ThemeSwitcher from './components/ThemeSwitcher/index.jsx';
import StyledComponent from './components/StyledComponent/index.jsx';
import LanguageSwitcher from './components/LanguageSwitcher/index.jsx';
import ShowTheme from './components/ShowTheme/index.jsx';
import ShowLanguage from './components/ShowLanguage/index.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <ThemeSwitcher />
          <StyledComponent />
          <LanguageSwitcher />
          <ShowTheme />
          <ShowLanguage />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;