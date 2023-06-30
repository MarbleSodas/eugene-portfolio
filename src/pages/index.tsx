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
      {/* add icons for each project */}
      <Projects />
      <Bio />
      {/* Reorder links in header */}
      <Header />
      <Contact />
    </>
  );
}