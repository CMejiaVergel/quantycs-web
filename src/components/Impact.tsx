import { Shield, Clock, Network, Leaf } from "lucide-react";

const impacts = [
  {
    icon: Clock,
    title: "Anticipación",
    metrics: [
      { label: "Reducción de inactividad", value: "12-20%" },
      { label: "Lead time optimizado", value: "30-50%" },
      { label: "Coordinación anticipada", value: "100%" }
    ],
    gradient: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "Seguridad",
    metrics: [
      { label: "Trazabilidad de permisos", value: "100%" },
      { label: "Certificaciones validadas", value: "100%" },
      { label: "Reducción de incidentes", value: "+85%" }
    ],
    gradient: "from-secondary to-primary"
  },
  {
    icon: Network,
    title: "Colaboración",
    metrics: [
      { label: "Optimización cadena suministro", value: "8-15%" },
      { label: "Compras coordinadas", value: "10-18%" },
      { label: "Talento local disponible", value: "+40%" }
    ],
    gradient: "from-accent to-secondary"
  },
  {
    icon: Leaf,
    title: "Circularidad",
    metrics: [
      { label: "Aprovechamiento de excedentes", value: "+20%" },
      { label: "Reducción de desperdicios", value: "15-25%" },
      { label: "Economía circular activa", value: "100%" }
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
              Valor <span className="bg-gradient-primary bg-clip-text text-transparent">de la Colaboración Inteligente</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Resultados medibles que demuestran el poder de la anticipación y coordinación del cluster industrial
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
