import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const allElements = document.querySelectorAll('html *');

    if (isDarkMode) {
      // Agrega la clase "dark-mode" a cada elemento
      allElements.forEach(element => {
        element.classList.add('dark-mode');
      });
    } else {
      // Remueve la clase "dark-mode" de cada elemento
      allElements.forEach(element => {
        element.classList.remove('dark-mode');
      });
    }
  }, [isDarkMode]);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
