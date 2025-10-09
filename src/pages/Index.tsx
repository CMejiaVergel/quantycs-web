import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Impact />
      <Team />
      <Partners />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">
            © 2025 Quantycs. Plataforma de gemelos digitales para orquestación industrial.
          </p>
          <p className="text-xs mt-2">
            Desarrollado por VOLTAC SYSTEMS y PDI ADVANCED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
