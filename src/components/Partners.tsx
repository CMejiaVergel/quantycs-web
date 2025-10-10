import logoEconova from "@/assets/logo-econova.png";
import logoGim from "@/assets/logo-gim.png";
import logoCluster from "@/assets/logo-cluster.png";
import logoCamara from "@/assets/logo-camara.png";

const Partners = () => {
  return (
    <section className="py-16 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-muted-foreground">
            Desarrollado con el acompañamiento de
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <img
              src={logoEconova}
              alt="Red Econova"
              className="h-15 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img
              src={logoGim}
              alt="GIM Institute"
              className="h-15 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img
              src={logoCluster}
              alt="Cluster PQP e IXL Center"
              className="h-20 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img
              src={logoCamara}
              alt="Cámara de Comercio de Cartagena"
              className="h-25 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
