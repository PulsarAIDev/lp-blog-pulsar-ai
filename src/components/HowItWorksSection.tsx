import { MessageCircle, Search, FileText, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você clica no botão e fala direto com a gente no WhatsApp",
    description: "Sem formulários intermináveis. Conversamos de verdade.",
    color: "border-primary/30 hover:border-primary"
  },
  {
    number: "02",
    icon: Search,
    title: "A gente faz um diagnóstico completo dos gargalos da sua operação",
    description: "Identificamos exatamente onde você está perdendo tempo e dinheiro.",
    color: "border-accent/30 hover:border-accent"
  },
  {
    number: "03",
    icon: FileText,
    title: "Entregamos um plano com as automações que resolvem esses gargalos",
    description: "Transparência total: você sabe o que vai receber e quanto vai custar.",
    color: "border-success/30 hover:border-success"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Você começa a operar com menos esforço, mais vendas e mais controle",
    description: "Implementação rápida. Resultados mensuráveis. ROI comprovado.",
    color: "border-primary/30 hover:border-primary"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Como funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simples, direto e sem complicação técnica
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`glass rounded-2xl p-8 md:p-10 border-2 ${step.color} transition-all duration-300 hover:bg-card/60 group`}>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number and Icon */}
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-5xl md:text-6xl font-bold text-muted-foreground/30" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {step.number}
                    </div>
                    <div className="p-4 glass rounded-xl group-hover:bg-card/80 transition-all duration-300">
                      <step.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
