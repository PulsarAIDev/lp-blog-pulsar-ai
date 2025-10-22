import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import NotFound from "./NotFound";

// Mock data - será substituído por dados do n8n
const blogPosts = {
  "como-ia-transforma-operacoes": {
    title: "Como a IA está transformando operações empresariais em 2025",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Automação",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    content: `
      <p>A Inteligência Artificial deixou de ser uma promessa futurista para se tornar uma ferramenta essencial nas operações do dia a dia de empresas de todos os portes.</p>

      <h2>O que mudou em 2025</h2>
      <p>Diferente de anos anteriores, quando IA era sinônimo de grandes investimentos e equipes técnicas complexas, hoje vemos soluções acessíveis que qualquer empresa pode implementar.</p>

      <p>As principais transformações incluem:</p>
      <ul>
        <li><strong>Atendimento ao Cliente 24/7:</strong> Chatbots inteligentes que realmente entendem contexto e resolvem problemas</li>
        <li><strong>Análise Preditiva:</strong> Previsão de demanda, identificação de oportunidades de venda e redução de desperdícios</li>
        <li><strong>Automação de Processos:</strong> Tarefas repetitivas executadas com precisão absoluta</li>
        <li><strong>Tomada de Decisão:</strong> Dashboards inteligentes que destacam o que realmente importa</li>
      </ul>

      <h2>Por que agora é o momento</h2>
      <p>O custo de implementação caiu drasticamente. O que antes exigia meses de desenvolvimento, hoje pode ser configurado em semanas. E o mais importante: o ROI é mensurável desde o primeiro mês.</p>

      <blockquote>
        "Empresas que não automatizarem em 2025 vão competir com uma mão amarrada nas costas." — Tendência observada em PMEs brasileiras
      </blockquote>

      <h2>Como começar</h2>
      <p>O primeiro passo não é tecnológico, é estratégico. Identifique onde sua equipe perde mais tempo em tarefas manuais. É aí que a IA pode gerar impacto imediato.</p>

      <p>Na Pulsar.AI, começamos sempre com um diagnóstico operacional completo. Não vendemos tecnologia pela tecnologia — entregamos resultados mensuráveis.</p>
    `
  },
  "5-sinais-empresa-precisa-automatizar": {
    title: "5 sinais de que sua empresa precisa automatizar agora",
    date: "2025-01-08",
    readTime: "4 min",
    category: "Estratégia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    content: `
      <p>Muitos empresários sentem que algo está travando o crescimento, mas não conseguem identificar exatamente o quê. Aqui estão 5 sinais claros de que automação não é mais opcional.</p>

      <h2>1. Sua equipe refaz as mesmas tarefas todos os dias</h2>
      <p>Se você escuta frases como "preciso atualizar isso manualmente" ou "toda segunda eu faço esse relatório", há automação possível ali.</p>

      <h2>2. Erros humanos custam caro</h2>
      <p>Pedidos duplicados, dados incorretos, follow-ups esquecidos. Cada erro manual custa tempo e dinheiro. Sistemas automatizados eliminam esse problema na raiz.</p>

      <h2>3. Você não tem visão clara do negócio em tempo real</h2>
      <p>Se precisa esperar até o fim do mês para saber como está indo, você está voando no escuro. Automação traz visibilidade instantânea.</p>

      <h2>4. Escalar exige contratar mais pessoas</h2>
      <p>Crescimento não deveria ser proporcional à folha de pagamento. Processos automatizados escalam sem limite de capacidade.</p>

      <h2>5. Você trabalha DENTRO do negócio, não NO negócio</h2>
      <p>Se passa o dia apagando incêndios operacionais, não sobra tempo para estratégia. Automação libera você para focar no que importa.</p>

      <h2>O custo de não automatizar</h2>
      <p>Enquanto você lê isso, seu concorrente está implementando sistemas que operam 24/7, sem erro, sem custo variável. A pergunta não é "se" automatizar, mas "quando".</p>
    `
  },
  "roi-automacao-casos-reais": {
    title: "ROI de automação: casos reais de empresas que escalaram",
    date: "2025-01-01",
    readTime: "6 min",
    category: "Cases",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: `
      <p>Dados concretos valem mais que promessas. Aqui estão casos reais (com números reais) de empresas que automatizaram e escalaram.</p>

      <h2>Case 1: Distribuidora de alimentos (SP)</h2>
      <p><strong>Faturamento:</strong> R$ 2,5M/ano<br>
      <strong>Problema:</strong> Pedidos via WhatsApp geravam erros constantes e retrabalho<br>
      <strong>Solução:</strong> Sistema automatizado de captura, validação e envio de pedidos ao ERP<br>
      <strong>Resultado:</strong></p>
      <ul>
        <li>87% de redução em erros de pedido</li>
        <li>3 horas/dia de tempo liberado da equipe comercial</li>
        <li>ROI em 45 dias</li>
      </ul>

      <h2>Case 2: Escritório de contabilidade (RJ)</h2>
      <p><strong>Faturamento:</strong> R$ 1,2M/ano<br>
      <strong>Problema:</strong> Coleta de documentos de clientes era 100% manual<br>
      <strong>Solução:</strong> Automação de follow-up, organização e validação de documentos<br>
      <strong>Resultado:</strong></p>
      <ul>
        <li>60% de redução no tempo de fechamento mensal</li>
        <li>Capacidade de atender 40% mais clientes sem contratar</li>
        <li>ROI em 2 meses</li>
      </ul>

      <h2>Case 3: E-commerce de moda (Multicanal)</h2>
      <p><strong>Faturamento:</strong> R$ 800K/ano<br>
      <strong>Problema:</strong> Controle de estoque descentralizado causava vendas sem produto<br>
      <strong>Solução:</strong> Sincronização automática entre marketplaces e estoque físico<br>
      <strong>Resultado:</strong></p>
      <ul>
        <li>Fim das vendas sem estoque (zero reclamações)</li>
        <li>15% de aumento na conversão (confiança do cliente)</li>
        <li>ROI em 30 dias</li>
      </ul>

      <h2>Padrões que se repetem</h2>
      <p>Em todos os casos, três coisas foram comuns:</p>
      <ol>
        <li>O problema era conhecido, mas parecia "parte do negócio"</li>
        <li>A solução não exigiu mudanças radicais na operação</li>
        <li>O retorno financeiro veio muito mais rápido do que o esperado</li>
      </ol>

      <p>Automação não é custo. É investimento com ROI previsível.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <NotFound />;
  }

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copiado!",
      description: "O link do post foi copiado para a área de transferência.",
    });
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <Link to="/blog">
            <Button variant="ghost" className="gap-2 text-white/70 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Button>
          </Link>
          <Button variant="ghost" onClick={handleShare} className="gap-2 text-white/70 hover:text-white">
            <Share2 className="w-4 h-4" />
            Compartilhar
          </Button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="glass rounded-3xl p-8 md:p-12 -mt-32 relative z-10 animate-fade-in">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/50">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pulsar-red">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} de leitura
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                prose-h2:text-3xl prose-h2:text-pulsar-red
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-pulsar-red prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-ul:text-white/70 prose-ul:list-disc prose-ul:pl-6
                prose-ol:text-white/70 prose-ol:list-decimal prose-ol:pl-6
                prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-pulsar-red prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/60"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer automatizar sua operação?
            </h3>
            <p className="text-white/70 mb-6">
              Fale com a gente e descubra como podemos transformar seu negócio.
            </p>
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Vi%20o%20blog%20da%20Pulsar%20e%20quero%20automatizar%20meu%20neg%C3%B3cio.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg">
                Falar com especialista
              </Button>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;
