export default function Projects() {
  const projects = [
    { title: "Commercial Complex", category: "Commercial", image: "/img1.jpg" },
    { title: "Residential Tower",   category: "Residential", image: "/img2.jpg" },
    { title: "Industrial Facility", category: "Industrial",  image: "/img3.jpg" },
    { title: "Retail Center",       category: "Commercial", image: "/img4.jpg" },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <span className="inline-block text-[color:var(--accent)] text-sm font-bold mb-4 border border-[color:var(--accent)] px-3 py-1">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden bg-[#1a1a1a] h-80 animate-scale-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay + Text (hidden → visible on hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 group-hover:bg-black/60 transition-all duration-500">
                <div className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <span className="block text-[color:var(--accent)] text-xs font-bold mb-2">
                    {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Arrow (still visible on the right) */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[color:var(--accent)] text-3xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                →
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-4">
          <button className="border-2 border-[color:var(--accent)] text-[color:var(--accent)] px-12 py-3 font-bold hover:bg-[color:var(--accent)] hover:text-black transition-all duration-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}