import { Shield, Clock, DollarSign, Leaf } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Tiempo",
    metrics: [
      { label: "Duración de paradas", value: "-15-25%" },
      { label: "Lead time críticos", value: "-30-50%" },
      { label: "Tiempo Medio de Reparación", value: "-20%" }
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
      { label: "Mano de obra y servicios", value: "-10-15%" },
      { label: "Urgencias logísticas", value: "-30-40%" },
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
      { label: "Simbiosis industrial", value: "Activa" }
    ],
    gradient: "from-secondary to-accent"
  }
];

const Impact = () => {
  return (
    <section className="py-20 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Impacto <span className="bg-gradient-primary bg-clip-text text-transparent">Medible</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Resultados concretos en los primeros 12 meses de implementación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div 
                  key={index}
                  className="bg-background/70 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all group"
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

          {/* Value Proposition */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                360°
              </div>
              <p className="text-muted-foreground">Monitoreo completo de operaciones</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Integración de tecnologías de última generación</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-muted-foreground">Cumplimiento normativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
