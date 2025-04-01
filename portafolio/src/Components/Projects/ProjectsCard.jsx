"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border-0 shadow-lg transition-transform duration-300 will-change-transform"
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Imagen con overlay */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image || "/placeholder.svg?height=224&width=400"}
          alt={title}
          className="w-full h-full object-cover will-change-transform"
          animate={{ scale: isHovered ? 1.05 : 1 }} 
          loading="lazy"
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Overlay con botones */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
         {liveUrl && ( <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-full transition-transform will-change-transform"
            aria-label="Ver demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>)}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-full transition-transform will-change-transform"
            aria-label="Ver código"
          >
            <Github className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Enlaces minimalistas */}
        <div className="flex justify-between items-center text-xs font-medium">
          <span className="text-gray-400 dark:text-gray-500">PROYECTO</span>
          <div className="flex gap-4">
           {liveUrl &&( <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white transition-colors duration-300 hover:text-blue-500"
            >
              DEMO
            </a>)}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white transition-colors duration-300 hover:text-blue-500"
            >
              CÓDIGO
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
