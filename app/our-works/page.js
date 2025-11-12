"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function WorkCard({ work, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden bg-card border border-border rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${work.image})`,
            filter: "brightness(0.75)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{work.description}</p>
      </div>

      {/* Decorative corners (same as ServiceCard) */}
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-20 border-t-4 border-l-4 border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 border-b-4 border-r-4 border-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  )
}

export default function OurWorkPage() {
  const works = [
    {
      title: "Skyline Corporate Tower",
      description:
        "A 32-storey LEED-certified office building featuring cutting-edge smart systems and panoramic city views.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      title: "Lakeside Luxury Residences",
      description:
        "Exclusive waterfront community with bespoke villas, private docks, and sustainable energy solutions.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      title: "Heritage Museum Restoration",
      description:
        "Painstaking restoration of a 19th-century landmark, preserving historic details while adding modern amenities.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    },
    {
      title: "GreenTech Industrial Park",
      description:
        "Eco-friendly manufacturing campus with solar arrays, rainwater harvesting, and modular construction.",
      image: "https://images.unsplash.com/photo-1655184310368-f39517c7d169?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className="min-h-screen bg-background py-24 px-4">
      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
          Our <span className="text-accent">Works</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          A selection of landmark projects that demonstrate our commitment to quality, innovation, and client satisfaction.
        </p>
      </motion.div>

      {/* Work Cards Grid */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2">
        {works.map((work, i) => (
          <WorkCard key={i} work={work} index={i} />
        ))}
        </div>
      </div>
    </div>
  )
}