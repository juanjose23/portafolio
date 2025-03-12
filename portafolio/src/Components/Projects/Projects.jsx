
import { projects } from "../../Data/projects ";
import { ProjectCard } from "./ProjectsCard";

export const Projects = () => (
  <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Proyectos</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
        Una selección de mis proyectos más recientes, mostrando mi experiencia en desarrollo frontend y diseño de interfaces.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
)