'use client'
import Hero from "./components/hero";
import Mission from "./components/mission";
import Projects from "./components/projects";
import Footer from "./components/footer"; 
import HeroSection from "./components/hero2";
export default function Home() {
  return (
   <>
   <HeroSection />
   <Hero />
   <Mission />
    <Projects />
    <Footer />
   </>
  );
}
