import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

const FinalCTASection = () => {
  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Vi a landing page da Pulsar e quero automatizar meu negócio. Podemos conversar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-20 space-y-10 text-center glow-red animate-fade-in">
          {/* Urgency indicator */}
          <div className="flex justify-center">
            <div className="glass rounded-full px-6 py-3 inline-flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">Decisão Estratégica</span>
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Você não precisa entender de tecnologia.
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Só precisa querer parar de perder <span className="text-destructive font-semibold">tempo</span>, <span className="text-destructive font-semibold">dinheiro</span> e <span className="text-destructive font-semibold">oportunidade</span>.
            </p>
          </div>

          {/* Competitive urgency */}
          <div className="space-y-4 py-6">
            <p className="text-xl md:text-2xl font-semibold text-primary">
              Seu concorrente está automatizando agora.
            </p>
            <p className="text-lg md:text-xl text-foreground/80">
              Você vai esperar mais quanto?
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleCTA}
              className="text-xl px-12 py-8 h-auto group"
            >
              Quero automatizar o meu negócio já
              <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground pt-6">
            ⚡ Diagnóstico gratuito • 🎯 Sem compromisso • 🚀 Resultados mensuráveis
          </p>
          
          {/* Blog link */}
          <div className="pt-8 border-t border-white/10">
            <a href="/blog" className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
              📝 Confira nosso blog com insights semanais →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
