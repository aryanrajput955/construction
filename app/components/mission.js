"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

function ScrollTriggeredCard({ step, index, activeIndex, setActiveIndex }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { 
    margin: "-40% 0px -40% 0px",
    amount: 0.5
  })

  useEffect(() => {
    if (isInView && activeIndex !== index) {
      setActiveIndex(index)
    }
  }, [isInView, index, activeIndex, setActiveIndex])

  return (
    <div
      ref={cardRef}
      className={`relative ${
        index % 2 === 0 ? "md:text-right" : "md:text-left"
      }`}
    >
      <motion.div 
        className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Content Side */}
        <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
          <motion.div
            className="group bg-gradient-to-br from-[#0d0d0d] to-black border-2 p-8 relative overflow-hidden"
            animate={{
              borderColor: activeIndex === index ? "var(--accent)" : "var(--border-color)",
              boxShadow: activeIndex === index 
                ? "0 20px 60px rgba(var(--accent-rgb, 255, 215, 0), 0.2)" 
                : "0 0 0 rgba(0, 0, 0, 0)"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              borderColor: "var(--accent)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-transparent opacity-0"
              animate={{
                opacity: activeIndex === index ? 1 : 0
              }}
              transition={{ duration: 0.4 }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold mb-1 transition-colors"
                    animate={{ 
                      color: activeIndex === index ? "var(--accent)" : "#ffffff"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-[color:var(--accent)] font-medium text-sm uppercase tracking-wider">
                    {step.subtitle}
                  </p>
                </div>
                <motion.span 
                  className="text-6xl font-bold text-[color:var(--accent)] leading-none"
                  animate={{ 
                    opacity: activeIndex === index ? 0.5 : 0.2,
                    scale: activeIndex === index ? 1.15 : 1
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {step.number}
                </motion.span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Expandable highlights */}
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                  marginTop: activeIndex === index ? 16 : 0
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="overflow-hidden"
              >
                <div className="border-t border-[color:var(--border-color)] pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Deliverables</p>
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((highlight, i) => (
                      <motion.span
                        key={i}
                        className="text-xs bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--accent)] px-3 py-1.5 rounded-full"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0,
                          scale: activeIndex === index ? 1 : 0.8,
                          y: activeIndex === index ? 0 : 10
                        }}
                        transition={{ 
                          duration: 0.3, 
                          delay: activeIndex === index ? i * 0.1 : 0,
                          ease: "easeOut"
                        }}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Center Circle - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            className="w-4 h-4 rounded-full relative"
            animate={{
              backgroundColor: activeIndex === index ? "var(--accent)" : "var(--border-color)",
              scale: activeIndex === index ? 1.75 : 1
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activeIndex === index && (
              <motion.div
                className="absolute inset-0 rounded-full bg-[color:var(--accent)]"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
            )}
          </motion.div>
        </div>

        {/* Empty Space on Other Side */}
        <div className="hidden md:block md:w-1/2"></div>
      </motion.div>
    </div>
  )
}

export default function Mission() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

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
    <section ref={sectionRef} id="mission" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-800 opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-800 opacity-5 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[color:var(--accent)] text-xs font-bold tracking-widest mb-4 border border-[color:var(--accent)] px-4 py-2 uppercase">
            Our Methodology
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            From Concept to Creation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A meticulously crafted process that transforms ambitious visions into architectural masterpieces
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical Line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[color:var(--accent)] to-transparent opacity-30"></div>

          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, index) => (
              <ScrollTriggeredCard
                key={index}
                step={step}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-6 text-lg">Ready to start your journey?</p>
          <motion.button 
            className="bg-[color:var(--accent)] text-black font-bold px-10 py-4 hover:bg-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            SCHEDULE A CONSULTATION
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}