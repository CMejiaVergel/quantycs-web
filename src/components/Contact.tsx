import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-secondary opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transformemos <span className="bg-gradient-primary bg-clip-text text-transparent">Juntos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos listos para llevar su operación industrial al siguiente nivel
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-10 rounded-3xl border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:contacto@quantycs.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contacto@quantycs.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <a href="tel:+573137297257" className="text-muted-foreground hover:text-primary transition-colors">
                    +57 313 729 7257
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Cartagena de Indias, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">LinkedIn</h3>
                  <a href="https://linkedin.com/company/quantycs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    /company/quantycs
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50 text-center">
              <p className="text-lg mb-4 font-semibold">
                ¿Listo para oprimizar su industria a través de la digitalización?
              </p>
              <p className="text-muted-foreground">
                Contáctenos hoy y descubra cómo Quantycs puede revolucionar sus operaciones 
                con tecnología de gemelos digitales e inteligencia artificial.
              </p>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-2xl border border-primary/30">
            <p className="text-2xl font-bold mb-2">
              Reducción comprobada de 15-25% en tiempos de parada
            </p>
            <p className="text-muted-foreground">
              Con cero incidentes de seguridad y optimización total de la cadena de suministro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
