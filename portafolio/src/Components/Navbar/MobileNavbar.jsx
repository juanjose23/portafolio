"use client"

import { Home, User, Briefcase, Mail, Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export const MobileNavbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home")

  // Detectar la sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      const sections = [
        { id: "home", element: document.body }, // El hero está al inicio
        { id: "about", element: document.getElementById("about") },
        { id: "projects", element: document.getElementById("projects") },
        { id: "contact", element: document.getElementById("contact") },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (!section.element) continue

        const offsetTop = section.id === "home" ? 0 : section.element.offsetTop

        if (scrollPosition >= offsetTop) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Inicio", icon: <Home className="h-5 w-5" />, href: "#home" },
    { id: "about", label: "Sobre mí", icon: <User className="h-5 w-5" />, href: "#about" },
    { id: "projects", label: "Proyectos", icon: <Briefcase className="h-5 w-5" />, href: "#projects" },
    { id: "contact", label: "Contacto", icon: <Mail className="h-5 w-5" />, href: "#contact" },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="flex flex-col items-center justify-center w-full h-full text-gray-500 dark:text-gray-400"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <>
              <Sun className="h-5 w-5" />
              <span className="text-xs mt-1">Claro</span>
            </>
          ) : (
            <>
              <Moon className="h-5 w-5" />
              <span className="text-xs mt-1">Oscuro</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

