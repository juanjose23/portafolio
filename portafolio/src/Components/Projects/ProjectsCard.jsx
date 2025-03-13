"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border-0 shadow-lg transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      onHoverStart={() => setIsHovered(true)} // Activamos el hover
      onHoverEnd={() => setIsHovered(false)} // Desactivamos el hover
    >
      {/* Imagen con overlay al hacer hover */}
      <div className="relative h-56 overflow-hidden" onClick={() => setIsHovered(!isHovered)}>
        <motion.img
          src={image || "/placeholder.svg?height=224&width=400"}
          alt={title}
          className="w-full h-full object-cover"
          animate={isHovered ? { scale: 1.1, filter: "brightness(0.75)" } : { scale: 1, filter: "brightness(1)" }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay con botones */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-full"
            aria-label="Ver demo"
            initial={{ y: -20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-full"
            aria-label="Ver código"
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <Github className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Contenido con diseño minimalista */}
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-4"
          animate={isHovered ? { color: "#6366f1" } : { color: "" }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              whileHover={{
                backgroundColor: "#6366f1",
                color: "white",
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Enlaces minimalistas */}
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-gray-400 dark:text-gray-500">PROYECTO</span>
          <div className="flex gap-4">
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white transition-colors duration-300"
              whileHover={{ color: "#6366f1", scale: 1.05 }}
            >
              DEMO
            </motion.a>
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white transition-colors duration-300"
              whileHover={{ color: "#6366f1", scale: 1.05 }}
            >
              CÓDIGO
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
