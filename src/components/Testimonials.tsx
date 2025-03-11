
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    content: "Grâce à leur expertise, nous avons pu réduire nos délais de livraison de 40% et améliorer considérablement notre satisfaction client. Leur approche méthodique et personnalisée a fait toute la différence.",
    author: "Marie Dupont",
    position: "Directrice Supply Chain, Groupe Industrie",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    content: "L'équipe a su identifier rapidement les points faibles de notre chaîne logistique et nous proposer des solutions adaptées à notre contexte spécifique. Un véritable partenaire stratégique qui a transformé notre manière de travailler.",
    author: "Jean Martin",
    position: "PDG, Distribution Intl",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    content: "L'approche pragmatique et les recommandations claires nous ont permis d'économiser plus de 2 millions d'euros sur nos coûts logistiques. Au-delà des conseils, c'est l'accompagnement dans la mise en œuvre qui a été déterminant.",
    author: "Sophie Leroy",
    position: "Directrice des Opérations, E-Commerce Leader",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Témoignages Clients</h2>
          <p className="section-subtitle">
            Découvrez ce que nos clients disent de notre approche et des résultats que nous avons 
            obtenus ensemble dans la transformation de leur chaîne d'approvisionnement.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Quote size={80} />
          </div>
          
          <div className="relative overflow-hidden rounded-2xl glass-card p-6 md:p-12 shadow-xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0 flex flex-col justify-between p-6 md:p-12",
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <p className="text-lg md:text-xl font-serif italic mb-8">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover mr-5"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-medium text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-6 right-6 flex space-x-2 z-20">
              <button 
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  activeIndex === index 
                    ? "bg-primary scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
