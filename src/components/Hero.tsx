import { ArrowRight, Zap } from "lucide-react";
import logoQuantycs from "@/assets/logo-quantycs.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">El Sistema Nervioso del Cluster Industrial</span>
          </div>

          <img 
            src={logoQuantycs} 
            alt="Quantycs - Soluciones Inteligentes para Industria 4.0" 
            className="w-full max-w-lg mx-auto mb-2"
          />
          
          <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
          
          <h1 className="font-exo2 text-xl md:text-3xl font-bold text-foreground tracking-wide leading-tight max-w-3xl mx-auto">
            Transformamos paradas de planta en<br/>
            <span className="bg-gradient-primary bg-clip-text text-transparent">ventajas competitivas compartidas</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Más que un software, somos la orquesta que transforma la planeación operativa en una sinfonía sincronizada. Anticipamos, orquestamos e impulsamos la sostenibilidad de tu cluster industrial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a 
              href="#solution" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
            >
              Descubre la solución
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-card/50 backdrop-blur-sm border border-border text-foreground rounded-lg font-semibold text-lg hover:bg-card hover:border-primary/50 transition-all duration-300"
            >
              Solicitar Demo
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                12-20%
              </div>
              <div className="text-sm text-muted-foreground">
                Reducción de tiempos de inactividad
              </div>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-secondary/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                8-15%
              </div>
              <div className="text-sm text-muted-foreground">
                Optimización de cadena de suministro
              </div>
            </div>
            <div className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                +20%
              </div>
              <div className="text-sm text-muted-foreground">
                Eficiencia en circularidad
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
