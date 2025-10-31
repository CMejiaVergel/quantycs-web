import { 
  Gauge, 
  Shield, 
  TruckIcon, 
  Radar, 
  Network,
  Brain 
} from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "STO360",
    subtitle: "Plan Maestro + Orchestrator",
    description: "Integra la planeación existente de cada organización, la potencia mediante modelos predictivos y la orquesta en tiempo real para generar decisiones coordinadas.",
    gradient: "from-primary to-accent",
    features: [
      "Consolidación de alertas tiempo real",
      "Estimación predictiva de terminación",
      "Recomendaciones inteligentes con IA"
    ]
  },
  {
    icon: TruckIcon,
    title: "SupplySync",
    subtitle: "Control Tower Logística 5PL",
    description: "Sincroniza la cadena de suministro del cluster mediante compras coordinadas, anticipación de demanda y aprovechamiento de excedentes entre empresas.",
    gradient: "from-accent to-secondary",
    features: [
      "8-15% optimización cadena suministro",
      "30-50% reducción lead times críticos",
      "15-25% ahorro por circularidad"
    ]
  },
  {
    icon: Shield,
    title: "HSEQ Gate",
    subtitle: "Digital Passport Product",
    description: "Gestión digital de permisos de trabajo, procedimientos LOTO y certificaciones con trazabilidad completa. Asegura que la seguridad sea una condición de diseño desde la planeación.",
    gradient: "from-secondary to-primary",
    features: [
      "100% permisos trazables",
      "Validación automática de certificaciones",
      "Gestión digital de procedimientos LOTO"
    ]
  },
  {
    icon: Network,
    title: "Data Trust Hub",
    subtitle: "Hub del Cluster Industrial",
    description: "Plataforma de colaboración segura con calendario compartido, heatmaps de demanda y programas de economía circular. Visibilidad agregada sin comprometer información competitiva.",
    gradient: "from-secondary to-accent",
    features: [
      "Coordinación interempresarial segura",
      "ISO 27001 certificado",
      "Heatmaps de demanda agregada"
    ]
  },
  {
    icon: Radar,
    title: "ScopeX",
    subtitle: "Inspección Autónoma",
    description: "Drones y robots con IA para inspecciones automatizadas que detectan anomalías, validan condiciones y actualizan estados de activos antes y durante las paradas.",
    gradient: "from-primary to-secondary",
    features: [
      "Detección temprana de problemas",
      "Inspecciones sin riesgo humano",
      "Actualización automática de estados"
    ]
  },
  {
    icon: Brain,
    title: "Quantycs Academy",
    subtitle: "Gestión de Talento",
    description: "Identifica brechas de competencias con anticipación, activa programas de formación coordinada y gestiona certificaciones digitales para disponibilidad oportuna de personal especializado.",
    gradient: "from-accent to-primary",
    features: [
      "Cierre anticipado de brechas de talento",
      "Pasaportes digitales de certificación",
      "Programas de formación coordinada"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Módulos de la Plataforma
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ecosistema <span className="bg-gradient-primary bg-clip-text text-transparent">Interoperable</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada módulo actúa como un instrumento al servicio de la orquestación inteligente. Todos comparten datos, interoperan y se retroalimentan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
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

          {/* Interoperability Note */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl" />
            <div className="relative bg-gradient-card border border-primary/30 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Principio de Interoperabilidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Los módulos no operan aislados. Comparten datos consistentes, se retroalimentan mutuamente y operan con una única fuente de verdad. Cualquier cambio en la planeación se propaga automáticamente a todos los módulos relevantes.
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

export default Services;
