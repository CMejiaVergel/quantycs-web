import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo-quantycs.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-1">
            <img src={logo} alt="Quantycs" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              El sistema nervioso del cluster industrial. Transformamos paradas de planta en ventajas competitivas compartidas.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("problem")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  El Desafío
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solution")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nuestra Solución
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Módulos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Impacto
                </button>
              </li>
            </ul>
          </div>

          {/* Módulos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Módulos Principales</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>STO360 - Plan Maestro</li>
              <li>SupplySync - Logística 5PL</li>
              <li>HSEQ Gate - Seguridad</li>
              <li>Data Trust Hub - Colaboración</li>
              <li>ScopeX - Inspección</li>
              <li>Quantycs Academy - Talento</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@quantycs.co" className="hover:text-primary transition-colors">
                  info@quantycs.co
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+573001234567" className="hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Cartagena, Colombia</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="w-4 h-4 text-primary" />
                <a
                  href="https://www.linkedin.com/company/quantycs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Quantycs. Hub de soluciones de Transformación Digital para la Industria.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Desarrollado por VOLTAC SYSTEMS y PDI ADVANCED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
