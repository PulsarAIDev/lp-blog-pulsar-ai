import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import pulsarLogo from "@/assets/pulsar-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Problema", id: "problema" },
    { label: "Benefícios", id: "beneficios" },
    { label: "Como Funciona", id: "como-funciona" },
    { label: "Sobre", id: "sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={pulsarLogo} 
              alt="Pulsar.AI" 
              className="h-8 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://blog.pulsarai.com.br/"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              Blog
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5527997118556?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Pulsar%20e%20quero%20automatizar%20meu%20neg%C3%B3cio.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="sm">
                Falar com especialista
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/10 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white/70 hover:text-white transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://blog.pulsarai.com.br/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white/70 hover:text-white transition-colors py-2"
            >
              Blog
            </a>
            <div className="pt-4">
              <a 
                href="https://wa.me/5527997118556?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Pulsar%20e%20quero%20automatizar%20meu%20neg%C3%B3cio.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="hero" className="w-full">
                  Falar com especialista
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
