"use client"

import { useState, useEffect } from "react"
import { Mail, ExternalLink, Copy, Check, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for the gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText("contacto@juanhuete.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      user:"Juan Huete",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/juan-huete-615b60168/",
      color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "GitHub",
      user:"juanjose23",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/juanjose23",
      color:
        "bg-gray-800/10 text-gray-800 dark:text-gray-200 dark:bg-gray-200/10 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-800",
    },
    {
      name: "Twitter",
      user:"Juan65010138",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://x.com/Juan65010138",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white",
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-70"
          style={{
            backgroundPosition: `${mousePosition.x / 50}px ${mousePosition.y / 50}px`,
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(79, 70, 229, 0.1)" />
                <stop offset="100%" stopColor="rgba(79, 70, 229, 0)" />
              </radialGradient>
            </defs>
            <circle
              cx={(mousePosition.x / window.innerWidth) * 100}
              cy={(mousePosition.y / window.innerHeight) * 100}
              r="30"
              fill="url(#gradient)"
            />
          </svg>
        </div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Conectemos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajar en nuevos proyectos y
            colaboraciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Left side - Email card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                    <Mail className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">Envíame un correo</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    La forma más directa de contactarme para discutir tu proyecto
                  </p>

                  <div className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-between mb-6">
                    <span className="font-mono text-blue-600 dark:text-blue-400">juanhuete052@gmail.com</span>
                    <button
                      onClick={copyEmail}
                      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Copiar email"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  <a
                    href="mailto:contacto@juanhuete052.com"
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Abrir en mi cliente de correo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Sígueme en redes</h3>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${link.color}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80">{link.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-medium">{link.name}</h4>
                      <p className="text-sm opacity-80">{link.user}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-70" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Disponible para proyectos
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>
      </div>
    </section>
  )
}

