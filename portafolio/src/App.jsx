import { useEffect } from "react";
import { About, Contact, Hero, Navbar, Projects } from "./Components";
import { FooterComponent } from "./Components/";
import {  ThemeContext } from "./context/ThemeContext";
import { useContext } from "react"; 

export const App = () => {
  const { theme } = useContext(ThemeContext); 

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
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


