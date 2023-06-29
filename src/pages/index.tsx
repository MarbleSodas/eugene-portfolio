import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      {/* Reposition Bio to below projects and add a skills section above projects */}
      <Hero />
      {/* skills */}
      <Projects />
      <Bio />
      <Header />
      <Contact />
    </>
  );
}