import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4">
              Da el Siguiente Paso
            </span>
            <h2 className="font-exo2 text-3xl md:text-5xl font-bold text-foreground mb-6">
              Transforma tu Cluster Industrial <span className="bg-gradient-primary bg-clip-text text-transparent">Hoy</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              No esperes a que la próxima parada sea un desafío. Únete a los líderes industriales que han descubierto el poder de la colaboración inteligente y la anticipación coordinada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Formulario de Contacto */}
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicita una Demostración</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Corporativo</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                    placeholder="Cuéntanos sobre tu cluster industrial y sus desafíos..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitud
                </button>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:info@quantycs.co" className="text-muted-foreground hover:text-primary transition-colors">
                      info@quantycs.co
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <a href="tel:+573001234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Cartagena, Colombia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/company/quantycs" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @quantycs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="relative mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl" />
            <div className="relative bg-gradient-card border border-primary/30 rounded-2xl p-10 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Las Paradas Inteligentes Comienzan con una Conversación
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Cada día que pasa sin coordinación anticipada es una oportunidad perdida. Transforma tus paradas de planta de un problema caótico a una ventaja estratégica. El momento de actuar es ahora.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                >
                  <Send className="w-5 h-5" />
                  Solicitar Demostración Ahora
                </button>
                <a 
                  href="mailto:info@quantycs.co"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-card border-2 border-primary text-foreground rounded-lg font-semibold hover:bg-primary/10 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Contactar Directamente
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Respuesta garantizada en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
