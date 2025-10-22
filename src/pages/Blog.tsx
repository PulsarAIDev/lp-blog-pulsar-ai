import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-white/70 hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              Voltar para home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass rounded-3xl p-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Blog Pulsar.AI
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Insights semanais sobre automação, IA e crescimento empresarial para quem quer escalar com inteligência.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="glass rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-glow">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-white/50">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pulsar-red">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pulsar-red transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/60 line-clamp-2">
                      {post.excerpt}
                    </p>
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
