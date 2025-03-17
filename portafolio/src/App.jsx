import { useState, useEffect } from "react";
import { About, Contact, Hero, Modal, Navbar, Projects } from "./Components";
import { FooterComponent } from "./Components/";

export const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || 
           (!("darkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    // Aplicar clase dark al HTML
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Guardar preferencia en localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Modal/>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <FooterComponent />
    </div>
  );
};
