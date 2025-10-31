import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-quantycs.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Quantycs" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              El Desafío
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Nuestra Solución
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Módulos
            </button>
            <button
              onClick={() => scrollToSection("advanced")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Impacto
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 bg-background/95 backdrop-blur-lg border-t border-border/50">
            <button
              onClick={() => scrollToSection("problem")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              El Desafío
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Nuestra Solución
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Módulos
            </button>
            <button
              onClick={() => scrollToSection("advanced")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Tecnología
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Impacto
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mx-4 px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-semibold text-center"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
