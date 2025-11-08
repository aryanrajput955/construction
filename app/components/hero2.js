// app/page.js
import Image from "next/image";

export default function ConstructionHero() {
  return (
    <>
      {/* HERO SECTION – Full Viewport */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"></div>

        {/* Background Image – put your photo in /public/construction-site.jpg */}
        <Image
          src="/img1.jpg"
          alt="Construction site at golden hour"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />

        {/* MAIN CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center">

      

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Building the Future,
            <br />
            <span className="text-[#e55a24]">One Project at a Time</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Precision engineering, safety-first execution, and on-time completion for high-rise towers and sustainable residential complexes.
          </p>

          {/* CTA Buttons – 100% Tailwind */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-3 bg-[#e55a24] hover:bg-[#d14d1f] text-white font-bold px-10 py-5 text-lg transition-all duration-300 shadow-2xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Get Free Quote
            </a>

            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-5 text-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (555) 123-4567
            </a>
          </div>

          {/* Trust Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              { value: "1,247+", label: "Projects Completed" },
              { value: "38", label: "Safety Awards" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "97%", label: "On-Time Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-[#e55a24]">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll-down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
}