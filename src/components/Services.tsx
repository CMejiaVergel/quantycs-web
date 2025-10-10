import { 
  Gauge, 
  Shield, 
  TruckIcon, 
  Radar, 
  Network 
} from "lucide-react";

const services = [
  {
    icon: Gauge,
    title: "STO 360 - Plan Maestro + War Room",
    description: "Servicio de orquestación de paradas y War Room con dashboards de datos clave para la ejecución de las actividades.",
    gradient: "from-primary to-accent",
    features: [
      "Reducción 15-25% duración de parada",
      "Decisiones estratégicas basadas en datos",
      "Anticipación de demanda de servicios"
    ]
  },
  {
    icon: TruckIcon,
    title: "SupplySync - Control Tower Logística 5PL",
    description: "Mediante el uso de modelos de Big Data e Inteligencia Artificial analiza las tendencias del mercado y predice con precisión las necesidades futuras de bienes y suministros, permitiendo una gestión de inventario más eficiente y una respuesta ágil a los cambios del mercado.",
    gradient: "from-accent to-secondary",
    features: [
      "Lead time críticos -30-50%",
      "Urgencias -30-40%",
      "Disponibilidad Bienes >90%"
    ]
  },
  {
    icon: Shield,
    title: "HSEQ Gate - Digital Passport Product (DPP)",
    description: "Workflow móvil de permisos y etiquetado LOTO con trazabilidad blockchain mediante DPP.",
    gradient: "from-secondary to-primary",
    features: [
      "Cero incidentes de seguridad",
      "100% permisos trazables",
      "Validación automática HSEQ"
    ]
  },
  {
    icon: Network,
    title: "PQP Data Trust",
    description: "Hub del Clúster con data-sharing en base a la ISO 27001 para generación de calendario interempresa, bolsa de talento certificada y repositorio de crecimiento.",
    gradient: "from-secondary to-accent",
    features: [
      "Coordinación de agendas",
      "Skills certificadas visibles",
      "Simbiosis industrial"
    ]
  },
  {
    icon: Radar,
    title: "ScopeX - Inspección por Visión Computacional",
    description: "Drones y Robots autónomos para realizar inspecciones periodicas y obtener datos de seguridad, seguimiento de actividades y estado de equipos mediante visión computacional en tiempo real",
    gradient: "from-primary to-secondary",
    features: [
      "Seguimiento de actividades",
      "Genera alertas críticas de seguridad",
      "Conocer condiciones del terreno/equipos"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Servicios <span className="bg-gradient-primary bg-clip-text text-transparent">Integrados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solución end-to-end que integra todos los aspectos críticos de las paradas de planta, mantenimientos y cualquier actividad en campo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02]"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
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

          {/* Integration Note */}
          <div className="mt-12 bg-gradient-to-br from-card/90 to-background/90 backdrop-blur-sm p-8 rounded-2xl border border-primary/30">
            <p className="text-center text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Integración Total:</span> Todos los servicios 
              funcionan como un ecosistema unificado, compartiendo datos en tiempo real para maximizar 
              la eficiencia operativa y la toma de decisiones estratégicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
