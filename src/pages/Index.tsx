import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import weightLossProduct from "@/assets/weight-loss-product.jpg";
import hairCare from "@/assets/hair-care.jpg";
import financialServices from "@/assets/financial-services.jpg";

const Index = () => {
  const products = [
    {
      title: "Slim Gota Black - Revolucionário",
      description: "Descubra o poder em cada gota do nosso tratamento revolucionário! Adeus, gordura teimosa!",
      benefits: [
        "Resultados visíveis em poucos dias",
        "Fórmula 100% natural",
        "Acelera o metabolismo",
        "Queima gordura localizada",
        "Sem efeitos colaterais"
      ],
      ctaText: "Transformar Meu Corpo Agora",
      ctaUrl: "https://app.monetizze.com.br/r/AUZ21258214",
      image: weightLossProduct,
      featured: true
    },
    {
      title: "Kit S.O.S Crescimento Capilar",
      description: "Descubra o kit Nº 1 mais potente em crescimento e no combate à queda capilar!",
      benefits: [
        "Crescimento acelerado dos fios",
        "Combate queda capilar",
        "Fortalece da raiz às pontas",
        "Cabelos mais volumosos",
        "Resultados em 30 dias"
      ],
      ctaText: "Recuperar Meus Cabelos",
      ctaUrl: "https://app.monetizze.com.br/r/ACS21486499",
      image: hairCare
    },
    {
      title: "PagBank + PicPay + Neon",
      description: "Ganhe R$ 20 e Mais Benefícios com Nossos Parceiros Financeiros",
      benefits: [
        "Ganhe R$ 20+ na abertura",
        "Cupons exclusivos",
        "Conta digital gratuita",
        "Cashback em compras",
        "Sem taxas escondidas"
      ],
      ctaText: "Ganhar R$ 20 Agora",
      ctaUrl: "https://renda-boost.lovable.app",
      image: financialServices
    },
    {
      title: "Nutra Vida - Fertilidade",
      description: "2 CÁPSULAS AO DIA PARA ENGRAVIDAR! Testado & Aprovado",
      benefits: [
        "Indicado para laqueaduras",
        "Trata ovários policísticos",
        "Combate endometriose",
        "Regulariza menstruação",
        "Equilibra hormônios"
      ],
      ctaText: "Realizar Meu Sonho",
      ctaUrl: "https://app.monetizze.com.br/r/AXC25503421"
    },
    {
      title: "Hidraliso - Alisante de Chuveiro",
      description: "Liso em minutos. Simples e Prático! Sem formol, sem ardência e sem cheiro",
      benefits: [
        "Cabelos lisos na primeira aplicação",
        "Sem formol ou químicas agressivas",
        "Não desbo ta ou amarela",
        "Compatible com qualquer química",
        "Efeito prolongado"
      ],
      ctaText: "Alisar Meus Cabelos",
      ctaUrl: "https://app.monetizze.com.br/r/AWW11504208"
    },
    {
      title: "Fignar - Saúde do Fígado",
      description: "Melhore a saúde do seu fígado com apenas 20 gotas!",
      benefits: [
        "Detox natural do fígado",
        "Melhora digestão",
        "Apenas 20 gotas por dia",
        "Ingredientes naturais",
        "Resultados em 30 dias"
      ],
      ctaText: "Cuidar do Meu Fígado",
      ctaUrl: "https://app.monetizze.com.br/r/APP25503419"
    },
    {
      title: "Lovable IA - Criação de Sites",
      description: "Crie seus códigos de SaaS em segundos com inteligência artificial",
      benefits: [
        "Criação automática de código",
        "Interface intuitiva",
        "Resultados profissionais",
        "Economia de tempo",
        "Sem conhecimento técnico"
      ],
      ctaText: "Criar Meu Site",
      ctaUrl: "https://lovable.dev/invite/04d3a1d5-ac6c-4590-be24-e12e5e711a61"
    },
    {
      title: "Fórmula Negócio Online",
      description: "Todos Eles Começaram do Zero... Hoje Mudaram de Vida com FNO Alex Vargas",
      benefits: [
        "Método testado e aprovado",
        "Suporte completo",
        "Resultados comprovados",
        "Comunidade ativa",
        "Múltiplas fontes de renda"
      ],
      ctaText: "Mudar Minha Vida",
      ctaUrl: "https://go.hotmart.com/E11195793E?ap=305a"
    },
    {
      title: "Carteira Nacional do Estudante",
      description: "Esqueça os ingressos caros! Compre todos os ingressos pela metade do preço",
      benefits: [
        "50% de desconto em ingressos",
        "Válida em todo território nacional",
        "Física e digital",
        "Aprovação garantida",
        "Entrega rápida"
      ],
      ctaText: "Garantir Desconto",
      ctaUrl: "https://app.monetizze.com.br/r/AEG25503067"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Perdi 12kg em 2 meses com o Slim Gota Black. Incrível!"
    },
    {
      name: "João Santos",
      text: "Meus cabelos voltaram a crescer depois de anos de calvície!"
    },
    {
      name: "Ana Costa",
      text: "Ganhei R$ 25 só por abrir a conta. Recomendo!"
    },
    {
      name: "Carlos Lima",
      text: "O negócio online mudou minha vida financeira completamente."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Article Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-large">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold mb-4">
                  O Segredo Por Trás da Transformação de Milhares de Pessoas
                </CardTitle>
                <p className="text-xl text-muted-foreground">
                  Descoberta revolucionária que está mudando vidas em todo o Brasil
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src={weightLossProduct} 
                      alt="Produto revolucionário" 
                      className="w-full rounded-lg shadow-medium"
                    />
                  </div>
                  <div className="md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-semibold">Por que milhares escolhem nossos produtos?</h3>
                    <p className="text-muted-foreground">
                      Nossa fórmula exclusiva combina os melhores ingredientes naturais, 
                      cientificamente comprovados, para entregar resultados reais e duradouros.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Ingredientes 100% naturais</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Testado por milhares de pessoas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Resultados em tempo recorde</span>
                      </li>
                    </ul>
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.open('https://app.monetizze.com.br/r/AUZ21258214', '_blank')}
                    >
                      Quero Transformar Minha Vida
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Produtos que <span className="bg-gradient-primary bg-clip-text text-transparent">Transformam Vidas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa seleção exclusiva de produtos que já ajudaram milhares de pessoas a alcançar seus objetivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-muted-foreground">
              Milhares de pessoas já transformaram suas vidas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não Deixe Essa Oportunidade Passar!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas. 
            Comece sua transformação hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://renda-boost-hub.lovable.app', '_blank')}
            >
              Começar Transformação
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://renda-boost.lovable.app', '_blank')}
            >
              Ganhar R$ 20 Agora
            </Button>
          </div>
          
          <div className="mt-12 text-sm opacity-75">
            <p>✓ Sem compromisso • ✓ Resultados garantidos • ✓ Suporte completo</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Vida e Impacto. Transformando vidas através de produtos de qualidade.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;