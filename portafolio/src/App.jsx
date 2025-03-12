"use client"

import { useState, useEffect } from "react"
import { About, Hero, Navbar, Projects } from "./Components"
import { Footer } from "./Components/footer"


export const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedMode !== null) {
      setDarkMode(savedMode === "true")
    } else {
      setDarkMode(prefersDark)
    }
  }, [])


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return <>

    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  </>
}


