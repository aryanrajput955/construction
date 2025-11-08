export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-slide-in-left">
          <div className="mb-6">
            <span className="inline-block text-[color:var(--accent)] text-sm font-bold mb-4 border border-[color:var(--accent)] px-3 py-1">
              OUR VISION
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Quality
            <br />
            Construction.
          </h1>

          <div className="border-l-4 border-[color:var(--accent)] pl-6 mb-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              With a high level of experience and versatility at the helm, we partner with owners and design
              professionals to build the highest quality commercial projects.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Servicing the GTA to the Niagara Region, Front Ridge Construction has built relationships with the
              industry's top craftsmen, suppliers, and subcontractors, all of whom adhere to our high standards of
              quality.
            </p>
          </div>

          <button className="bg-[color:var(--accent)] text-black px-8 py-3 font-bold hover:bg-[color:var(--accent-dark)] transition-colors duration-300">
            READ MORE
          </button>
        </div>

        {/* Right Content */}
        <div className="animate-slide-in-right animation-delay-2">
          <div className="mb-8">
            <span className="inline-block text-[color:var(--accent)] text-sm font-bold mb-4 border border-[color:var(--accent)] px-3 py-1">
              OUR MISSION
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">Unparalleled Experience.</h2>

          <p className="text-gray-300 mb-4">
            We deliver excellence through innovation and dedication to every project.
          </p>
        </div>
      </div>
    </section>
  )
}
