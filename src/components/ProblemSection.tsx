import { AlertCircle, TrendingDown, Clock } from "lucide-react";

const ProblemSection = () => {
  return (
    <section id="problema" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 space-y-8 animate-slide-up">
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Se sua empresa ainda depende de <span className="text-primary">planilhas</span>, pessoas refazendo tarefas todos os dias e decisões no <span className="text-destructive">instinto</span>...
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Você está perdendo <span className="text-destructive font-semibold">dinheiro</span>, <span className="text-destructive font-semibold">clientes</span> e <span className="text-destructive font-semibold">energia</span>.
            </p>
            
            <p className="text-lg text-foreground/80 italic">
              E o pior: você sabe disso, mas não sabe por onde começar.
            </p>
          </div>

          {/* Visual indicators */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="glass rounded-xl p-6 space-y-3 hover:bg-card/60 transition-all duration-300">
              <TrendingDown className="h-8 w-8 text-destructive" />
              <h3 className="font-semibold text-lg">Perdendo Receita</h3>
              <p className="text-sm text-muted-foreground">Processos lentos custam oportunidades</p>
            </div>
            
            <div className="glass rounded-xl p-6 space-y-3 hover:bg-card/60 transition-all duration-300">
              <Clock className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-lg">Desperdício de Tempo</h3>
              <p className="text-sm text-muted-foreground">Retrabalho consome seu time</p>
            </div>
            
            <div className="glass rounded-xl p-6 space-y-3 hover:bg-card/60 transition-all duration-300">
              <AlertCircle className="h-8 w-8 text-accent" />
              <h3 className="font-semibold text-lg">Decisões no Escuro</h3>
              <p className="text-sm text-muted-foreground">Sem dados, sem previsibilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
