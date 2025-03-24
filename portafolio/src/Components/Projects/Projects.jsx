
import { Data } from "../../Data";
import { ProjectCard } from "./ProjectsCard";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCarousel, useVisibility } from "../../hooks";
import { useState } from "react";

export const Projects = () => {
  const [view, setView] = useState("carousel");
  const totalItems = Data.length;

  const itemsPerView = { mobile: 1, tablet: 2, desktop: 3 };

  const {
    activeIndex, nextSlide, prevSlide,
    handleTouchStart, handleTouchMove, handleTouchEnd,
    carouselRef, getItemsPerView
  } = useCarousel(totalItems, itemsPerView);

  const { isVisible, elementRef } = useVisibility("projects");
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-3xl mx-auto">
            Una selección de mis proyectos más recientes, mostrando mi experiencia en desarrollo frontend y diseño de
            interfaces.
          </p>

          <div className="flex justify-center gap-2 mb-8">
            <button
              onClick={() => setView("carousel")}
              className={`flex items-center px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium transition-colors ${view === "carousel"
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Vista carrusel</span>
            </button>
            <button
              onClick={() => setView("grid")}
              className={`flex items-center px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm font-medium transition-colors ${view === "grid"
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="sr-only">Vista cuadrícula</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === "carousel" ? (
            <motion.div
              key="carousel"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div
                ref={carouselRef}
                className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
            <div
  className="flex transition-transform duration-500 ease-out"
  style={{
    transform: `translateX(-${(activeIndex * 100) / getItemsPerView()}%)`,
  }}
  
>


                  {Data.map((project, index) => {
                    const isActive = index >= activeIndex && index < activeIndex + getItemsPerView();
                    return (
                      <div key={index} className={`px-4`} style={{ flex: `0 0 ${100 / getItemsPerView()}%` }}>
                        <div className={`transition-all duration-500 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-50"}`}>
                          <ProjectCard {...project} />
                        </div>
                      </div>
                    );
                  })}

                </div>

              </div>

              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={prevSlide}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    } transition-colors`}
                  aria-label="Anterior"
                  disabled={activeIndex === 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border ${activeIndex >= Math.ceil(Data.length / getItemsPerView()) - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    } transition-colors`}
                  aria-label="Siguiente"
                  disabled={activeIndex >= Math.ceil(Data.length / getItemsPerView()) - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>


              <div className="flex justify-center gap-1 mt-4">
                {Data.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${activeIndex === index ? "bg-gray-800 dark:bg-gray-200 w-4" : "bg-gray-300 dark:bg-gray-700"
                      }`}
                    aria-label={`Ir al proyecto ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {Data.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
