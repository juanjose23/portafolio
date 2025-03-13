import { Code, Database, Server, Activity, BarChart, Layers } from "lucide-react"
export const About = () => {


  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "Desarrollo interfaces modernas con React, Vite y Tailwind CSS para una experiencia óptima.",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description: "Construyo APIs robustas y escalables con Flask, Django, Laravel y PHP.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Bases de Datos",
      description: "Trabajo con SQL (MySQL, PostgreSQL) para almacenar y gestionar datos eficientemente.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Lenguajes de Programación",
      description: "Experiencia con JavaScript, Python, PHP y R para desarrollar soluciones eficientes.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Análisis de Datos",
      description: "Utilizo R y Tableau para transformar datos en insights accionables para la toma de decisiones.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Estrategia y Arquitectura",
      description: "Planifico arquitecturas eficientes, asegurando escalabilidad y mantenibilidad.",
    },
  ]
  return (
    <section id="about" className="py-16 md:py-24 container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre mí</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center">
          Soy un desarrollador web con un año de experiencia en el diseño e implementación de soluciones tecnológicas.
          Egresado en Ingeniería en Sistemas, me especializo en desarrollo backend, aunque también cuento con habilidades en frontend y análisis de datos con R. Mi enfoque se centra en crear soluciones eficientes y escalables, combinando creatividad y pensamiento analítico para abordar desafíos complejos.
          Si deseas conocer más sobre los proyectos en los que he trabajado, te invito a explorarlos a continuación.
        </p>


        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-md transition-all duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

