import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full text-destructive text-sm font-semibold mb-4">
              El Problema
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Paradas no coordinadas = <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-destructive to-primary bg-clip-text text-transparent">Oportunidades perdidas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Las paradas de planta son eventos críticos y costosos. La planeación aislada genera competencia destructiva, desperdicio de recursos y pérdida de millones en oportunidades no aprovechadas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                  <Clock className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Descoordinación Operativa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Múltiples empresas compitiendo por los mismos recursos simultáneamente: materiales, servicios y personal especializado en ventanas de tiempo similares.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                  <TrendingDown className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Recursos Desperdiciados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Excedentes de materiales, capacidades de mantenimiento y talento certificado sin aprovechar, mientras otras empresas pagan sobrecostos.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                  <AlertTriangle className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Reacción sin Anticipación</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Picos de demanda imprevistos sorprenden a proveedores y contratistas, generando escasez temporal, precios inflados y retrasos costosos.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-card border border-border/50 rounded-xl p-8 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                  <Users className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Silos de Información</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada empresa opera en su propio sistema, sin visibilidad de interdependencias ni oportunidades de colaboración en el clúster.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-destructive/20 via-primary/20 to-destructive/20 blur-xl" />
            <div className="relative bg-gradient-card border border-destructive/30 rounded-2xl p-10 text-center">
              <p className="text-2xl md:text-3xl text-foreground font-bold mb-3">
                El sector es experto en <span className="text-destructive">reaccionar al caos</span>
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pero carece de instrumentos para <span className="text-primary font-semibold">anticipar, coordinar y optimizar</span> colectivamente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
