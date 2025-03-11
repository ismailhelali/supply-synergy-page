
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 z-0"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,#4f46e5,transparent_50%)]"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="text-xs font-medium text-primary">Excellence en conseil supply chain</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
              Optimisez votre <span className="text-primary">chaîne logistique</span> pour une croissance durable
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8">
              Des solutions sur mesure pour transformer votre gestion opérationnelle et 
              votre chaîne d'approvisionnement. Nous vous accompagnons vers l'excellence opérationnelle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center button-hover-effect bg-primary text-white px-8 py-3 rounded-lg text-sm font-medium shadow-lg shadow-primary/20"
              >
                Consultation Gratuite
                <ArrowRight size={16} className="ml-2 animate-pulse" />
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center justify-center button-hover-effect bg-white border border-gray-200 text-gray-800 px-8 py-3 rounded-lg text-sm font-medium"
              >
                Découvrir Nos Services
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-blue-50 rounded-2xl"></div>
            
            <div className="glass-card rounded-2xl p-6 relative z-10 animate-scale-in animate-float shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format" 
                alt="Supply Chain Management" 
                className="w-full h-auto rounded-lg mb-4 shadow-md"
                loading="lazy"
              />
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary">Gain d'efficacité moyen</span>
                  <span className="text-2xl font-semibold">+27%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary">Réduction des coûts</span>
                  <span className="text-2xl font-semibold">-32%</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 z-20 animate-fade-in delay-300 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-primary font-bold">A</div>
                  <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-green-600 font-bold">B</div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-purple-600 font-bold">C</div>
                </div>
                <div>
                  <p className="text-sm font-medium">+150 clients satisfaits</p>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-xs mb-2">Découvrir</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0V23H9V0H7Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
