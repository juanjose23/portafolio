"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ]

  // Smooth scroll function for navigation
  const handleNavigation = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId.replace("#", ""))

    if (targetElement) {
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false)

      // Smooth scroll to target section
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without causing page jump
      window.history.pushState(null, "", targetId)
    }
  }

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={(e) => handleNavigation(e, "#home")}
          >
            Portafolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group"
                onClick={(e) => handleNavigation(e, link.href)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-indigo-500" />}
            </button>
          </nav>

          
        </div>

        
      </header>

      {/* Mobile Navbar (estilo Airbnb) */}
      <MobileNavbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  )
}

