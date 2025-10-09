import { Network, Brain, Eye } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              La Solución <span className="bg-gradient-primary bg-clip-text text-transparent">Quantycs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plataforma no-code que representa el inventario de activos físicos en forma de Gemelo Digital 
              como lo define la normativa ISO/IEC 30173:2023
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Integración Total</h3>
              <p className="text-muted-foreground text-center text-sm">
                Conecta todos los eslabones operativos en tiempo real con retroalimentación desde campo
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-secondary/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">IA Predictiva</h3>
              <p className="text-muted-foreground text-center text-sm">
                Análisis predictivos potenciados por IA y datos históricos para decisiones estratégicas
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">War Room</h3>
              <p className="text-muted-foreground text-center text-sm">
                Visualización en tiempo real de avance, riesgos y restricciones para toma de decisiones
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card/90 to-background/90 backdrop-blur-sm p-10 rounded-3xl border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Tecnología DPP - Digital Passport Product</h3>
            <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-6">
              Sistema de identificación única mediante placas NFC con blockchain que permite a cada equipo y máquina 
              tener su gemelo digital. Los trabajadores escanean el DPP para confirmar inicio de actividades, 
              gestionar etiquetado LOTO, y tener una trazabilidad de cualquier evento relacionado a los activos.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Validación Automática</h4>
                  <p className="text-sm text-muted-foreground">
                    El sistema da luz verde solo si permisos y documentación HSEQ están completos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Trazabilidad Total</h4>
                  <p className="text-sm text-muted-foreground">
                    Registro inmutable de eventos, cambios de estado y documentación con blockchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
