import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import ScrollSection from "@/components/ScrollSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <ScrollSection />
      <Header />
      <Contact />
    </>
  );
}