import logoVoltac from "@/assets/logo-voltac.png";
import logoPdi from "@/assets/logo-pdi.png";
import carlosMejia from "@/assets/carlos-mejia.png";
import sergioSanchez from "@/assets/sergio-sanchez.png";
import luisAcosta from "@/assets/luis-acosta.png";

const team = [
  {
    name: "Carlos Mejía",
    role: "CEO VOLTAC SYSTEMS",
    expertise: "Ingeniero Electrónico",
    specialization: "Automatización y Control, Procesos Industriales",
    highlight: "Experto en implementación de soluciones digitales en la industria",
    image: carlosMejia
  },
  {
    name: "Sergio Sánchez",
    role: "CTO PDI ADVANCED",
    expertise: "PhD. Ingeniería",
    specialization: "IA, Machine Learning, Deep Learning",
    highlight: "Investigador y líder científico de desarrollos tecnológicos",
    image: sergioSanchez
  },
  {
    name: "Luis Acosta",
    role: "CEO PDI ADVANCED",
    expertise: "MSc. Ingeniería",
    specialization: "Control Automático, Gestión Industrial",
    highlight: "Experto en implementación de proyectos de mantenimiento, automatización y ciberseguridad industrial",
    image: luisAcosta
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold mb-4">
              Liderazgo Experto
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Experiencia que <span className="bg-gradient-primary bg-clip-text text-transparent">Transforma Industrias</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Líderes con trayectoria comprobada en gestión industrial, transformación digital y desarrollo tecnológico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gradient-card border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto border-4 border-primary/20 group-hover:border-primary/50 transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-1 text-foreground">{member.name}</h3>
                <p className="text-sm text-primary text-center mb-4 font-medium">{member.role}</p>
                
                <div className="space-y-2 text-center">
                  <p className="text-sm font-semibold text-foreground">{member.expertise}</p>
                  <p className="text-xs text-muted-foreground">{member.specialization}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {member.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Companies */}
          <div className="bg-gradient-card border border-border/50 p-10 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Empresas Desarrolladoras</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="flex items-center gap-4">
                <img src={logoVoltac} alt="VOLTAC SYSTEMS" className="h-12 opacity-90" />
                <div>
                  <p className="font-semibold text-foreground">VOLTAC SYSTEMS</p>
                  <p className="text-sm text-muted-foreground">Transformación Digital - Industria 4.0</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="flex items-center gap-4">
                <img src={logoPdi} alt="PDI ADVANCED" className="h-12 opacity-90" />
                <div>
                  <p className="font-semibold text-foreground">PDI ADVANCED</p>
                  <p className="text-sm text-muted-foreground">Desarrollo IA - Soluciones de ingeniería</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
