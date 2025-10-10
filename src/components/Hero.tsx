import { ArrowRight } from "lucide-react";
import logoQuantycs from "@/assets/logo-quantycs.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <img 
            src={logoQuantycs} 
            alt="Quantycs" 
            className="h-32 md:h-48 mx-auto mb-4 opacity-90"
          />
          
          <h1 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground tracking-wider leading-tight">
            SOLUCIONES INTELIGENTES PARA<br/>INDUSTRIA 4.0
          </h1>
          
          <div className="h-1 w-full max-w-2xl mx-auto bg-gradient-primary" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a 
              href="#solution" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
            >
              Descubre la solución
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                15-25%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Reducción en tiempo de paradas
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
                0
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Incidentes HSEQ
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                30-40%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Reducción en urgencias logísticas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
