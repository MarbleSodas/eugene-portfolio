import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Skills /> */}
      <Projects />
      <Bio />
      {/* rewrite this part */}
      <Header />
      <Contact />
    </>
  );
}