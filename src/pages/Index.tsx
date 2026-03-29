import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { HighlightWorks } from "@/components/portfolio/HighlightWorks";
import { Experience } from "@/components/portfolio/Experience";
import { Awards } from "@/components/portfolio/Awards";
// import { Gallery } from "@/components/portfolio/Gallery";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <HighlightWorks />
        <Experience />
        <Awards />
        {/* <Gallery /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
