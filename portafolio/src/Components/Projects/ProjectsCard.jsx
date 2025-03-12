import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative group bg-white dark:bg-gray-900 rounded-lg overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Imagen con overlay al hacer hover */}
      <div 
        className="relative h-56 overflow-hidden"
        onClick={() => setShowOverlay(!showOverlay)} // Toggle en móviles
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:filter group-hover:brightness-75"
        />

        {/* Overlay con botones */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 
          ${showOverlay ? "opacity-100" : "opacity-0"} 
          md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300`}
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black hover:bg-black hover:text-white p-2 rounded-full"
            aria-label="Ver demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-white text-black hover:bg-black hover:text-white p-2 rounded-full"
            aria-label="Ver código"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Contenido con diseño minimalista */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">{description}</p>

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
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-pink-500 dark:hover:text-purple-400 transition-colors duration-300"
            >
              DEMO
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-pink-500 dark:hover:text-purple-400 transition-colors duration-300"
            >
              CÓDIGO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
