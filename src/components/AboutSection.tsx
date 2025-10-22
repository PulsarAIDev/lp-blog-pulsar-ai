import { Building2, Target, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Darker background for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 space-y-12 animate-fade-in">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Sobre a <span className="text-primary">Pulsar.AI</span>
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground">
              Somos <span className="text-primary font-semibold">Especialistas em Arquitetura Operacional AI First</span>, para empresas que querem crescer com <span className="text-accent font-medium">escala</span> e <span className="text-success font-medium">sustentabilidade</span>.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nosso foco é simples: te entregar <span className="text-primary font-medium">ROI</span> e <span className="text-accent font-medium">dados</span> para tomada de decisão consciente e estratégica.
            </p>
          </div>

          {/* Value props */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="glass rounded-xl p-6 space-y-3 text-center hover:bg-card/60 transition-all duration-300">
              <div className="flex justify-center">
                <div className="p-3 glass rounded-lg">
                  <Building2 className="h-8 w-8 text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Foco em PMEs</h3>
              <p className="text-sm text-muted-foreground">Especialistas em empresas tradicionais que querem escalar</p>
            </div>
            
            <div className="glass rounded-xl p-6 space-y-3 text-center hover:bg-card/60 transition-all duration-300">
              <div className="flex justify-center">
                <div className="p-3 glass rounded-lg">
                  <Target className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Resultados Mensuráveis</h3>
              <p className="text-sm text-muted-foreground">ROI comprovado em cada projeto implementado</p>
            </div>
            
            <div className="glass rounded-xl p-6 space-y-3 text-center hover:bg-card/60 transition-all duration-300">
              <div className="flex justify-center">
                <div className="p-3 glass rounded-lg">
                  <TrendingUp className="h-8 w-8 text-success" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Crescimento Sustentável</h3>
              <p className="text-sm text-muted-foreground">Escalabilidade com controle e previsibilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
