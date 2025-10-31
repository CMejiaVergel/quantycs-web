import { Network, Brain, Eye, Activity, Zap, Shield } from "lucide-react";

const Solution = () => {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4">
              La Solución
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Quantycs</span> — El Sistema Nervioso del Cluster
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transformamos paradas industriales de un problema caótico a una ventaja estratégica mediante integración, anticipación y orquestación inteligente.
            </p>
          </div>

          {/* Value Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Anticipamos Escenarios</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Reducimos tiempos de inactividad en un 12-20% y optimizamos la cadena de suministro en un 8-15% mediante modelos predictivos.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Zap className="w-4 h-4" />
                <span>Análisis predictivo con IA</span>
              </div>
            </div>

            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/10 transition-all">
              <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Orquestamos Recursos</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desde agendas compartidas hasta logística y talento, todo fluye porque está planificado, no improvisado.
              </p>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <Zap className="w-4 h-4" />
                <span>Coordinación en tiempo real</span>
              </div>
            </div>

            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 transition-all">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Impulsamos Sostenibilidad</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Menos desperdicio, más circularidad y un impacto positivo en la comunidad local del cluster industrial.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent">
                <Zap className="w-4 h-4" />
                <span>Economía circular activa</span>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">¿Cómo Funciona?</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Integración de Planeación Existente</h4>
                    <p className="text-sm text-muted-foreground">
                      No reemplazamos tus sistemas. Integramos la planeación que ya existe y la potenciamos con IA.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Consolidación del Cluster</h4>
                    <p className="text-sm text-muted-foreground">
                      Agregamos información de todas las empresas para generar una visión consolidada del ecosistema.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Modelos Predictivos</h4>
                    <p className="text-sm text-muted-foreground">
                      IA analiza patrones, predice desviaciones y genera recomendaciones inteligentes de coordinación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Orquestación en Tiempo Real</h4>
                    <p className="text-sm text-muted-foreground">
                      Durante la ejecución, consolidamos alertas, estimamos terminación y priorizamos acciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-center text-foreground font-semibold">
                <Eye className="inline-block w-5 h-5 mr-2 text-primary" />
                Resultado: Cada parada se ejecuta con mayor eficiencia gracias a la coordinación anticipada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
