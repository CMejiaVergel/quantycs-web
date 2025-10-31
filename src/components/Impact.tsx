import { Shield, Clock, DollarSign, Leaf } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Tiempo",
    metrics: [
      { label: "Duración de paradas", value: "-15-25%" },
      { label: "Lead time críticos", value: "-30-50%" },
      { label: "Tiempo de reparación", value: "-20%" }
    ],
    gradient: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "Seguridad",
    metrics: [
      { label: "Incidentes HSEQ", value: "0" },
      { label: "Permisos trazables", value: "100%" },
      { label: "Validaciones automáticas", value: "100%" }
    ],
    gradient: "from-secondary to-primary"
  },
  {
    icon: DollarSign,
    title: "Costos",
    metrics: [
      { label: "Servicios", value: "-10-15%" },
      { label: "Urgencias", value: "-30-40%" },
      { label: "Inventario", value: "-10-15%" }
    ],
    gradient: "from-accent to-secondary"
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    metrics: [
      { label: "Eficiencia energética", value: "+15%" },
      { label: "Reducción residuos", value: "+20%" },
      { label: "Circularidad", value: "Activa" }
    ],
    gradient: "from-secondary to-accent"
  }
];

const Impact = () => {
  return (
    <section className="py-24 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4">
              Resultados Medibles
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Impacto <span className="bg-gradient-primary bg-clip-text text-transparent">Cuantificable</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Resultados concretos en los primeros 12 meses de implementación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${impact.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-6">{impact.title}</h3>
                  
                  <div className="space-y-4">
                    {impact.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent text-center">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground text-center">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-card border border-border/50 rounded-xl p-8">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                360°
              </div>
              <p className="text-muted-foreground">Monitoreo completo</p>
            </div>
            <div className="text-center bg-gradient-card border border-border/50 rounded-xl p-8">
              <div className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Digitalización</p>
            </div>
            <div className="text-center bg-gradient-card border border-border/50 rounded-xl p-8">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Cumplimiento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
