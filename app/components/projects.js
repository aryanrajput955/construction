export default function Projects() {
  const projects = [
    {
      title: "Commercial Complex",
      category: "Commercial",
      image: "/img1.jpg",
    },
    {
      title: "Residential Tower",
      category: "Residential",
      image: "/img2.jpg",
    },
    {
      title: "Industrial Facility",
      category: "Industrial",
      image: "/img3.jpg",
    },
    {
      title: "Retail Center",
      category: "Commercial",
      image: "/img4.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <span className="inline-block text-[color:var(--accent)] text-sm font-bold mb-4 border border-[color:var(--accent)] px-3 py-1">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden bg-[#1a1a1a] h-80 mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[color:var(--accent)] text-xs font-bold block mb-2">
                    {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[color:var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-[color:var(--accent)] text-2xl font-light group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up animation-delay-4">
          <button className="border-2 border-[color:var(--accent)] text-[color:var(--accent)] px-12 py-3 font-bold hover:bg-[color:var(--accent)] hover:text-black transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  )
}
