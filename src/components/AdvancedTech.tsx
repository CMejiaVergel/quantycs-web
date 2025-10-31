import { Eye, BarChart3, Sparkles } from "lucide-react";

const advancedTech = [
  {
    icon: Eye,
    title: "Digital Twins",
    description: "Representaciones virtuales exactas de activos físicos industriales que permiten visualización, monitoreo en tiempo real y simulación de escenarios sin necesidad de acceso físico constante.",
    features: [
      "Mapas interactivos de instalaciones",
      "Monitoreo en tiempo real",
      "Historial y trazabilidad completa"
    ],
    gradient: "from-primary to-secondary"
  },
  {
    icon: BarChart3,
    title: "Dashboard Analytics",
    description: "Consolida métricas operacionales y KPIs de toda la plataforma en visualizaciones interactivas, proporcionando una vista ejecutiva de alto nivel sobre el estado de paradas y recursos del cluster.",
    features: [
      "KPIs consolidados en tiempo real",
      "Visualizaciones interactivas",
      "Análisis predictivo y escenarios"
    ],
    gradient: "from-secondary to-accent"
  },
  {
    icon: Sparkles,
    title: "IA Agent",
    description: "Asistente conversacional de inteligencia artificial que permite consultas en lenguaje natural sobre datos de la plataforma, recibe recomendaciones y obtiene análisis avanzados instantáneamente.",
    features: [
      "Consultas en lenguaje natural",
      "Recomendaciones inteligentes",
      "Análisis de tendencias automático"
    ],
    gradient: "from-accent to-primary"
  }
];

const AdvancedTech = () => {
  return (
    <section id="advanced" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4">
              Tecnología Avanzada
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Potenciado por <span className="bg-gradient-primary bg-clip-text text-transparent">Inteligencia Artificial</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Herramientas avanzadas que complementan la orquestación inteligente del cluster industrial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advancedTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${tech.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTech;
