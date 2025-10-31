import logoEconova from "@/assets/logo-econova.png";
import logoGim from "@/assets/logo-gim.png";
import logoCluster from "@/assets/logo-cluster.png";
import logoCamara from "@/assets/logo-camara.png";

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-card/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-sm font-semibold mb-4">
              Ecosistema de Innovación
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Construido con <span className="bg-gradient-primary bg-clip-text text-transparent">Socios Estratégicos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Alianzas estratégicas que potencian la transformación digital del cluster industrial
            </p>
          </div>

          <div className="bg-gradient-card border border-border/50 rounded-2xl p-12">
            <h3 className="text-xl font-semibold text-center mb-10 text-muted-foreground">
              Desarrollado con el acompañamiento de
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
              <div className="flex flex-col items-center gap-3 group">
                <img
                  src={logoEconova}
                  alt="Red Econova"
                  className="h-12 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Red Econova
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <img
                  src={logoGim}
                  alt="GIM Institute"
                  className="h-16 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  GIM Institute
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <img
                  src={logoCluster}
                  alt="Cluster PQP e IXL Center"
                  className="h-20 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Cluster PQP
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 group">
                <img
                  src={logoCamara}
                  alt="Cámara de Comercio de Cartagena"
                  className="h-20 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
                <span className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Cámara de Comercio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
