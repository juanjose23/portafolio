// import { createContext, useState, useEffect, useContext } from 'react';

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {

//   const [darkMode, setDarkMode] = useState(() => {
//     // Intentar obtener el valor de localStorage
//     const savedDarkMode = localStorage.getItem("darkMode");
//     // Si no existe en localStorage, leer la preferencia del sistema
//     if (savedDarkMode !== null) {
//       return JSON.parse(savedDarkMode);
//     } else {
//       // Si no está en localStorage, usar la preferencia del sistema
//       return window.matchMedia("(prefers-color-scheme: dark)").matches;
//     }
//   });

//   useEffect(() => {
//     // Cambia la clase "dark" en el <html> para aplicar el modo oscuro
//     document.documentElement.classList.toggle("dark", darkMode);

//     // Guarda el estado de darkMode en el localStorage
//     if (typeof window !== "undefined") {
//       localStorage.setItem("darkMode", JSON.stringify(darkMode));
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode((prev) => !prev);

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkMode = () => useContext(DarkModeContext);

// src/context/ThemeContext.jsx

import { createContext } from "react";

// Crear el contexto para el tema
export const ThemeContext = createContext();