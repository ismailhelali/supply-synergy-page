
import { Award, Briefcase, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">À Propos de Nous</h2>
          <p className="section-subtitle">
            Un cabinet de conseil spécialisé en gestion et optimisation de la chaîne d'approvisionnement, 
            avec une vision centrée sur l'excellence et l'innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl transform rotate-3"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format" 
                alt="Notre équipe" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-5 z-20 animate-float shadow-lg">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Confiance client</span>
                <div className="flex items-center">
                  <span className="text-3xl font-serif font-bold mr-1">98%</span>
                  <span className="text-green-500 text-sm">de satisfaction</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-medium mb-4">Notre Vision</h3>
              <p className="text-muted-foreground">
                Nous croyons en une approche holistique de la supply chain, où l'innovation technologique, 
                l'excellence opérationnelle et la durabilité se combinent pour créer une valeur exceptionnelle. 
                Notre vision est de transformer les chaînes d'approvisionnement en véritables avantages compétitifs 
                pour nos clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-5 bg-secondary/30 rounded-xl">
                <Briefcase size={32} className="text-primary mb-3" />
                <span className="text-2xl font-bold mb-1">15+</span>
                <span className="text-sm text-muted-foreground text-center">Années d'expérience</span>
              </div>
              <div className="flex flex-col items-center p-5 bg-secondary/30 rounded-xl">
                <Users size={32} className="text-primary mb-3" />
                <span className="text-2xl font-bold mb-1">150+</span>
                <span className="text-sm text-muted-foreground text-center">Clients satisfaits</span>
              </div>
              <div className="flex flex-col items-center p-5 bg-secondary/30 rounded-xl">
                <Award size={32} className="text-primary mb-3" />
                <span className="text-2xl font-bold mb-1">97%</span>
                <span className="text-sm text-muted-foreground text-center">Taux de réussite</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4">Notre Expertise</h3>
              <p className="text-muted-foreground mb-4">
                Notre équipe est composée d'experts chevronnés issus de divers secteurs industriels, 
                apportant une richesse d'expérience et une perspective unique à chaque projet. 
                Nous combinons cette expertise avec les dernières innovations technologiques pour 
                concevoir des solutions véritablement transformatrices.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">Industrie manufacturière</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">Grande distribution</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">E-commerce</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">Agroalimentaire</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">Industrie pharmaceutique</span>
                <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">Luxe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
