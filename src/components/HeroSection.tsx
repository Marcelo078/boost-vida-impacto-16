import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-health.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Transforme sua vida com nossos produtos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Ganhe <span className="bg-gradient-hero bg-clip-text text-transparent">R$ 20+</span> e 
          <br />Transforme Sua Vida
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubra produtos exclusivos que vão revolucionar sua <span className="font-semibold">saúde</span>, 
          <span className="font-semibold"> beleza</span> e <span className="font-semibold">finanças</span>!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Descobrir Produtos
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-black"
            onClick={() => window.open('https://renda-boost-hub.lovable.app', '_blank')}
          >
            Comece Agora
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};