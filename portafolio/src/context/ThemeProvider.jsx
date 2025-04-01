// src/context/ThemeProvider.jsx

import { useReducer, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { themeReducer, initialState, SET_THEME } from './useThemeReduce';

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

 
  const setTheme = (theme) => {
    dispatch({ type: SET_THEME, payload: theme });
    localStorage.setItem("theme", theme);
  };


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ theme: state.theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
