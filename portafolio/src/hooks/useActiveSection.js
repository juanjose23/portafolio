import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const sections = [
        { id: "home", element: document.getElementById("home") },
        { id: "about", element: document.getElementById("about") },
        { id: "projects", element: document.getElementById("projects") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section.element) continue;

        const { top } = section.element.getBoundingClientRect();
        const offsetTop = window.scrollY + top;

        if (scrollPosition >= offsetTop) {
          setActiveSection(section.id); // Actualiza la sección activa
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};