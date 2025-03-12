import { ArrowDown } from "lucide-react"

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Patrón de puntos de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      {/* Círculos decorativos */}
      <div className="absolute bottom-12 left-8 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full opacity-70 z-0"></div>
      <div className="absolute top-20 right-8 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-70 z-0"></div>
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-32 right-1/4 w-20 h-20 bg-yellow-100 dark:bg-yellow-900/30 rounded-full opacity-60 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Hola, soy <span className="text-blue-600 dark:text-blue-400">Juan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Desarrollador Backend
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors duration-300"
            >
              Ver Proyectos
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

