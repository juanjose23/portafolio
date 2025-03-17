import { memo } from "react";
import { Code, Database, Server, Activity, BarChart, Layers } from "lucide-react";

// Datos de habilidades fuera del componente para evitar cálculos innecesarios
const skills = [
  { icon: Code, title: "Frontend Development", description: "Desarrollo interfaces modernas con React, Vite y Tailwind CSS para una experiencia óptima." },
  { icon: Server, title: "Backend Development", description: "Construyo APIs robustas y escalables con Flask, Django, Laravel y PHP." },
  { icon: Database, title: "Bases de Datos", description: "Trabajo con SQL (MySQL, PostgreSQL) para almacenar y gestionar datos eficientemente." },
  { icon: Activity, title: "Lenguajes de Programación", description: "Experiencia con JavaScript, Python, PHP y R para desarrollar soluciones eficientes." },
  { icon: BarChart, title: "Análisis de Datos", description: "Utilizo R y Tableau para transformar datos en insights accionables para la toma de decisiones." },
  { icon: Layers, title: "Estrategia y Arquitectura", description: "Planifico arquitecturas eficientes, asegurando escalabilidad y mantenibilidad." },
];

// Componente memoizado para evitar renders innecesarios
const SkillCard = memo(({ icon: Icon, title, description }) => (
  <article className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 
    hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-3" aria-hidden="true" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
  </article>
));

export const About = () => {
  return (
    <section id="about" className="py-10 md:py-16 container mx-auto px-6" aria-labelledby="about-title">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="about-title" className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Sobre mí
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        Desarrollador web, egresado de Ingeniería en Sistemas, especializado en backend con habilidades en frontend y análisis de datos. Enfocado en soluciones escalables, combinando creatividad y pensamiento analítico.
        </p>
      </div>

      {/* Sección de habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};
