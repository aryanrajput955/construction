// app/services/page.js
export default function ServicesSharp() {
  const services = [
    {
      title: "High-Rise Towers",
      desc: "60+ story structures with seismic bracing, smart MEP, and zero-compromise safety.",
      path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      title: "Medical Centers",
      desc: "OR-ready hospitals built to CDC & JCI standards with modular future-proof wings.",
      path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.204.507 14.978 14.978 0 00-2.764.19m8.687-7.25a2 2 0 100-4 2 2 0 000 4z",
    },
    {
      title: "Net-Zero Warehouses",
      desc: "1M+ sq ft facilities with solar roofs, EV charging, and 100 % recycled steel.",
      path: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4 0v16m4-16v16",
    },
    {
      title: "Retail Flagships",
      desc: "Experiential stores that fuse digital kiosks with bold concrete-and-glass façades.",
      path: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#e55a24] text-white text-xs font-black uppercase tracking-widest px-6 py-2 mb-4">
            CORE DIVISIONS
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            We Build <span className="text-[#e55a24]">Tomorrow</span>
          </h2>
        </div>

        {/* 4 SHARP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 p-8
                         hover:bg-[#e55a24]/5 hover:border-[#e55a24] hover:-translate-y-3
                         transition-all duration-300"
            >
              {/* Orange top bar */}
              <div className="h-1 bg-[#e55a24] mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

              {/* Icon box */}
              <div className="w-14 h-14 border-2 border-[#e55a24] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e55a24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.path} />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                {s.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Hero-style CTA */}
        <div className="mt-16 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-3 bg-[#e55a24] hover:bg-[#c94d1d] text-white font-black px-12 py-5
                       shadow-2xl hover:shadow-[#e55a24]/40 transition-all duration-300"
          >
            START PROJECT
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}