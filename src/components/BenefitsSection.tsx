import { TrendingUp, Zap, Shield, Clock, BarChart3, Rocket } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais vendas sem contratar mais gente",
    description: "Automatize processos e escale sem aumentar custos fixos",
    color: "text-success"
  },
  {
    icon: Zap,
    title: "Processos que funcionam 24/7 sem erro",
    description: "IA e automação não dormem, não erram, não cansam",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Redução de retrabalho e falhas humanas",
    description: "Menos erros, mais qualidade, clientes mais satisfeitos",
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "Tempo livre para focar no estratégico",
    description: "Deixe o operacional com a IA, você pensa no futuro",
    color: "text-success"
  },
  {
    icon: BarChart3,
    title: "Visão clara e em tempo real da operação",
    description: "Dados precisos para decisões inteligentes",
    color: "text-primary"
  },
  {
    icon: Rocket,
    title: "Escalabilidade com controle e previsibilidade",
    description: "Cresça rápido sem perder o comando do negócio",
    color: "text-accent"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            O que você ganha ao automatizar com a <span className="text-primary">Pulsar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais para empresas que querem crescer de forma sustentável
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 space-y-4 hover:bg-card/60 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${benefit.color} transition-transform duration-300 group-hover:scale-110`}>
                <benefit.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-semibold leading-snug">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
