"use client"

import { useState } from "react"

export default function Mission() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const missionItems = [
    {
      title: "CAPTURING YOUR VISION",
      description:
        "We begin by understanding your project goals and requirements. Our team listens carefully to translate your vision into actionable plans.",
    },
    {
      title: "PUTTING YOUR VISION ON PAPER",
      description:
        "Our creative designers will begin producing concept designs and sketches. This is a collaborative process where we work closely with you to develop ideas. Hand-pick materials, fixtures, and fittings with guidance from our experts.",
    },
    {
      title: "PREPARING FOR BUILD",
      description:
        "Once designs are finalized, we prepare detailed construction documents and secure all necessary permits. Our team coordinates logistics for a smooth project launch.",
    },
    {
      title: "DELIVERING OUR PROMISE",
      description:
        "We execute with precision and transparency. Regular updates keep you informed every step of the way until project completion and handover.",
    },
  ]

  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <span className="inline-block text-[color:var(--accent)] text-sm font-bold mb-4 border border-[color:var(--accent)] px-3 py-1">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Turning Vision Into Reality</h2>
        </div>

        <div className="space-y-4">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="border border-[color:var(--border-color)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1a1a1a] transition-colors duration-300"
              >
                <span className="text-left font-bold text-white text-sm">{item.title}</span>
                <span className="text-[color:var(--accent)] text-2xl font-light">
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-4 border-t border-[color:var(--border-color)] bg-[#0a0a0a]">
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
