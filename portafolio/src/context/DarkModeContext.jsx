import { createContext, useState, useEffect, useContext } from "react";


const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
  );

 
  useEffect(() => {
    // Cambia la clase "dark" en el <html> para aplicar el modo oscuro
    document.documentElement.classList.toggle("dark", darkMode);
    // Guarda el estado de darkMode en el localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};



export const useDarkMode = () => useContext(DarkModeContext);