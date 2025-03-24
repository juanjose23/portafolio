import { useEffect } from "react";
import { About, Contact, Hero, Modal, Navbar, Projects } from "./Components";
import { FooterComponent } from "./Components/";
import { useDarkMode } from "./context/DarkModeContext"; // Asegúrate de importar el hook

export const App = () => {
 
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Modal />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <FooterComponent />
    </div>
  );
};
