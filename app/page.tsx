import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import Skills from "@/features/skill/Skills";
import Projects from "@/features/project/Projects";
import Experience from "@/features/experience/Experience";
import Contact from "@/features/contact/Contact";
import Scene from "@/components/models/Scene";

export default function Home() {
  return (
    <>
      <Scene />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer className="relative z-10" />
    </>
  );
}
