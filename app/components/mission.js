"use client"

import { useState } from "react"

export default function Mission() {
  const [activeIndex, setActiveIndex] = useState(0)

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      subtitle: "Understanding Your Dream",
      description:
        "We dive deep into your lifestyle, preferences, and aspirations. Through detailed consultations, site visits, and mood boarding sessions, we capture every nuance of your vision.",
      highlights: ["Initial Site Analysis", "Budget Planning", "Vision Mapping"]
    },
    {
      number: "02",
      title: "Design & Development",
      subtitle: "Crafting the Blueprint",
      description:
        "Our award-winning designers transform concepts into detailed 3D visualizations and technical drawings. Every material, texture, and spatial element is carefully curated to reflect your unique style.",
      highlights: ["3D Renderings", "Material Selection", "Design Revisions"]
    },
    {
      number: "03",
      title: "Planning & Permits",
      subtitle: "Laying the Foundation",
      description:
        "We navigate the complex world of permits, regulations, and approvals. Our experienced team ensures all documentation is accurate, compliant, and submitted on time.",
      highlights: ["Permit Acquisition", "Compliance Review", "Timeline Planning"]
    },
    {
      number: "04",
      title: "Construction & Oversight",
      subtitle: "Building Excellence",
      description:
        "With precision execution and rigorous quality control, we bring your project to life. Our project managers provide weekly updates and maintain transparent communication throughout the build.",
      highlights: ["Quality Assurance", "Progress Reports", "On-Site Management"]
    }
  ]

  return (
    <section id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-800 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block text-[color:var(--accent)] text-xs font-bold tracking-widest mb-4 border border-[color:var(--accent)] px-4 py-2 uppercase">
            Our Methodology
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            From Concept to Creation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A meticulously crafted process that transforms ambitious visions into architectural masterpieces
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[color:var(--accent)] to-transparent"></div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content Side */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div
                      className={`group cursor-pointer bg-gradient-to-br ${
                        activeIndex === index 
                          ? "from-[#1a1a1a] to-[#0d0d0d] border-[color:var(--accent)]" 
                          : "from-[#0d0d0d] to-black border-[color:var(--border-color)]"
                      } border-2 p-8 transition-all duration-500 hover:border-[color:var(--accent)] hover:shadow-2xl hover:shadow-[color:var(--accent)]/20`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[color:var(--accent)] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-[color:var(--accent)] font-medium text-sm uppercase tracking-wider">
                            {step.subtitle}
                          </p>
                        </div>
                        <span className="text-6xl font-bold text-[color:var(--accent)] opacity-20 leading-none">
                          {step.number}
                        </span>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Expandable highlights */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-[color:var(--border-color)] pt-4 mt-4">
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Deliverables</p>
                          <div className="flex flex-wrap gap-2">
                            {step.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="text-xs bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--accent)] px-3 py-1 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? "bg-[color:var(--accent)] shadow-lg shadow-[color:var(--accent)]/50 scale-150"
                          : "bg-[color:var(--border-color)]"
                      }`}
                    ></div>
                  </div>

                  {/* Empty Space on Other Side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-gray-400 mb-6">Ready to start your journey?</p>
          <button className="bg-[color:var(--accent)] text-black font-bold px-8 py-4 hover:bg-white transition-all duration-300 transform hover:scale-105">
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  )
}