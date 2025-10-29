import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Vi a landing page da Pulsar e quero automatizar meu negócio. Podemos conversar?");
    window.open(`https://wa.me/5527997118556?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in pt-16">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Sua operação está travando o crescimento da sua empresa.
          </h1>
          
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            A Pulsar.AI é o braço direito tecnológico para empresas que querem <span className="text-primary font-medium">escalar</span>, <span className="text-accent font-medium">vender mais</span> e <span className="text-success font-medium">recuperar tempo</span>.
          </p>
        </div>

        {/* CTA Button with glass container */}
        <div className="pt-6">
          <div className="glass inline-block px-4 py-3 sm:px-6 sm:py-4 rounded-2xl glow-red">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleCTA}
              className="text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 h-auto"
            >
              Quero automatizar o meu negócio já
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span>ROI Mensurável</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Implementação Rápida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Suporte Especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
