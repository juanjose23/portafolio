import { useEffect } from "react";
import { About, Contact, Hero, Navbar, Projects } from "./Components";
import { FooterComponent } from "./Components/";
import { useDarkMode } from "./context/DarkModeContext";
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
    
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <FooterComponent />
    </div>
  );
};
