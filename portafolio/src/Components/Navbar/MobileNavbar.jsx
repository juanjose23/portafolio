import { useContext } from 'react'; 
import { Home, User, Briefcase, Mail, Moon, Sun } from 'lucide-react';
import { useActiveSection } from '../../hooks';
import { ThemeContext } from '../../context/ThemeContext';

export const MobileNavbar = () => {
  const { theme, setTheme } = useContext(ThemeContext); 
  const activeSection = useActiveSection(); 

  const navItems = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "about", label: "Sobre mí", icon: User },
    { id: "projects", label: "Proyectos", icon: Briefcase },
    { id: "contact", label: "Contacto", icon: Mail },
  ];

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleNavigation(id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeSection === id
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-500 dark:text-gray-400"
              }`}
            aria-current={activeSection === id ? "page" : undefined}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
        <button
          onClick={toggleDarkMode}  // Usa la función toggleDarkMode definida arriba
          className="flex flex-col items-center justify-center w-full h-full py-1 px-2 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-indigo-500" />}
          <span className="text-xs font-medium mt-1">{theme === "dark" ? "Claro" : "Oscuro"}</span>
        </button>
      </div>
    </div>
  );
};
