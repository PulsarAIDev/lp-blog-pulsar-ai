import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - será substituído por dados do n8n
const blogPosts = [
  {
    slug: "como-ia-transforma-operacoes",
    title: "Como a IA está transformando operações empresariais em 2025",
    excerpt: "Descubra as principais tendências de automação com IA que estão revolucionando pequenas e médias empresas.",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Automação",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
  },
  {
    slug: "5-sinais-empresa-precisa-automatizar",
    title: "5 sinais de que sua empresa precisa automatizar agora",
    excerpt: "Identifique os gargalos que estão travando seu crescimento e descubra como a automação pode resolver.",
    date: "2025-01-08",
    readTime: "4 min",
    category: "Estratégia",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
  },
  {
    slug: "roi-automacao-casos-reais",
    title: "ROI de automação: casos reais de empresas que escalaram",
    excerpt: "Exemplos práticos de como empresas tradicionais dobraram vendas com automação inteligente.",
    date: "2025-01-01",
    readTime: "6 min",
    category: "Cases",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  }
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-xl bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-white/70 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-4 h-4" />
              Voltar para home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="glass rounded-3xl p-12 md:p-16 animate-fade-in relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <div className="p-3 rounded-2xl bg-accent/10 border border-accent/20">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div className="p-3 rounded-2xl bg-success/10 border border-success/20">
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-center">
                Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Pulsar.AI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto text-center leading-relaxed">
                Insights semanais sobre automação, IA e crescimento empresarial para quem quer escalar com inteligência.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-primary mb-1">52+</div>
                  <div className="text-sm text-white/60">Artigos</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-accent mb-1">10k+</div>
                  <div className="text-sm text-white/60">Leitores</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-success mb-1">100%</div>
                  <div className="text-sm text-white/60">Prático</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-6 pb-24 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Últimos artigos</h2>
            <p className="text-white/60 text-lg">Conteúdo atualizado semanalmente sobre o futuro dos negócios</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="glass rounded-2xl overflow-hidden h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,95,86,0.3)] relative">
                  {/* Hover gradient border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/50 group-hover:via-accent/50 group-hover:to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                  
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    <div className="flex items-center gap-3 mb-4 text-sm">
                      <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-primary font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-white/50">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/50">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/60 line-clamp-2 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Ler artigo</span>
                      <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
