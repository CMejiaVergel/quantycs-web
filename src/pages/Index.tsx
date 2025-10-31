import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import AdvancedTech from "@/components/AdvancedTech";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <Problem />
      <Solution />
      <Services />
      <AdvancedTech />
      <Impact />
      <Team />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
