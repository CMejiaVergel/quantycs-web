import { AlertTriangle, TrendingUp, Target } from "lucide-react";

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              El Desafío Industrial
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La industria enfrenta retos críticos que impactan directamente la competitividad y sostenibilidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Problema Crítico</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span>Altos costos por falta de anticipación en la demanda</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span>Exigencia máxima de seguridad industrial</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span>Alta complejidad operativa y costos elevados</span>
                </li>
              </ul>
            </div>

            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-secondary/50 transition-all group">
              <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Brecha Tecnológica</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                  <span>Fragmentación de la información entre actores</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                  <span>Bajo aprovechamiento de transformación digital</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2" />
                  <span>Falta de integración entre sistemas</span>
                </li>
              </ul>
            </div>

            <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-accent/50 transition-all group">
              <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Oportunidad</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Integración del ecosistema completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Anticipación de demanda basada en datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>Simbiosis industrial y economía circular</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
