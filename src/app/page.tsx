import Image from "next/image";
import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/navigation/Footer";
import ScrollToTop from "@/components/navigation/ScrollToTop"
export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-surface selection:bg-primary/30 selection:text-on-surface">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop/>
    </main>
  );
}
