import { ExternalLink, Github } from "lucide-react"

export const Projects=()=> {
  const projects = [
    {
      title: "Proyecto 1",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero eos, rem repellendus ipsam quaerat consequuntur porro sequi eveniet tenetur nemo culpa deleniti. Nemo quia numquam, optio voluptas iure molestiae?",
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Proyecto+1",
      tags: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Proyecto 2",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero eos, rem repellendus ipsam quaerat consequuntur porro sequi eveniet tenetur nemo culpa deleniti. Nemo quia numquam, optio voluptas iure molestiae?",
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Proyecto+2",
      tags: ["React", "Redux", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Proyecto 3",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero eos, rem repellendus ipsam quaerat consequuntur porro sequi eveniet tenetur nemo culpa deleniti. Nemo quia numquam, optio voluptas iure molestiae?",
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Proyecto+3",
      tags: ["React", "flask", "sql"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Proyecto 4",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero eos, rem repellendus ipsam quaerat consequuntur porro sequi eveniet tenetur nemo culpa deleniti. Nemo quia numquam, optio voluptas iure molestiae?",
      image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Proyecto+4",
      tags: ["React ", "Laravel", "Postgresql"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Proyectos</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Una selección de mis proyectos más recientes, mostrando mi experiencia en desarrollo frontend y diseño de
          interfaces.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



