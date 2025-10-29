import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

const FinalCTASection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Vi a landing page da Pulsar e quero automatizar meu negócio. Podemos conversar?");
    window.open(`https://wa.me/5527997118556?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-6 md:p-10 space-y-6 text-center glow-red animate-fade-in">
          {/* Urgency indicator */}
          <div className="flex justify-center">
            <div className="glass rounded-full px-4 py-2 sm:px-6 sm:py-3 inline-flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Decisão Estratégica</span>
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Você não precisa entender de tecnologia.
            </h2>
            
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Só precisa querer parar de perder <span className="text-destructive font-semibold">tempo</span>, <span className="text-destructive font-semibold">dinheiro</span> e <span className="text-destructive font-semibold">oportunidade</span>.
            </p>
          </div>

          {/* Competitive urgency */}
          <div className="space-y-3 py-4">
            <p className="text-lg md:text-xl font-semibold text-primary">
              Seu concorrente está automatizando agora.
            </p>
            <p className="text-base md:text-lg text-foreground/80">
              Você vai esperar mais quanto?
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6 px-8 flex justify-center">
          <div className="inline-block px-4 py-3 sm:px-6 sm:py-4 rounded-2xl mx-auto">
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


          {/* Trust line */}
          <p className="text-xs sm:text-sm text-muted-foreground pt-4">
            ⚡ Diagnóstico estratégico gratuito • 🎯 Plano de ação personalizado • 🚀 Resultados mensuráveis
          </p>
          
          {/* Blog link */}
          <div className="pt-6 border-t border-white/10">
            <a href="https://blog.pulsarai.com.br/" className="text-white/60 hover:text-primary transition-colors text-xs sm:text-sm font-medium">
              📝 Confira nosso blog com insights semanais →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
