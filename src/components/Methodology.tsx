
import { cn } from '@/lib/utils';

const steps = [
  {
    number: "01",
    title: "Diagnostic",
    description: "Analyse approfondie de votre chaîne logistique actuelle, identification des points forts et des opportunités d'amélioration.",
    color: "from-blue-500 to-indigo-600"
  },
  {
    number: "02",
    title: "Recommandations",
    description: "Élaboration d'un plan d'action détaillé avec des solutions personnalisées et adaptées à vos besoins spécifiques.",
    color: "from-indigo-500 to-purple-600"
  },
  {
    number: "03",
    title: "Implémentation",
    description: "Mise en œuvre des solutions proposées avec un accompagnement continu pour assurer une transition en douceur.",
    color: "from-purple-500 to-pink-600"
  },
  {
    number: "04",
    title: "Mesure & Optimisation",
    description: "Suivi rigoureux des performances, ajustements et améliorations continues pour maximiser les résultats à long terme.",
    color: "from-pink-500 to-red-600"
  }
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Notre Méthodologie</h2>
          <p className="section-subtitle">
            Une approche structurée en quatre étapes pour transformer efficacement votre chaîne d'approvisionnement
            et vous guider vers l'excellence opérationnelle.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col md:flex-row items-center animate-on-scroll",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "w-full md:w-1/2 p-6 md:p-12",
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                )}>
                  <div 
                    className={cn(
                      "text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4",
                      step.color
                    )}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                <div className="relative flex items-center justify-center w-12 h-12 md:w-24 md:h-24">
                  <div 
                    className={cn(
                      "absolute w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-r z-10",
                      step.color
                    )}
                  ></div>
                  <div className="absolute w-12 h-12 md:w-20 md:h-20 rounded-full bg-white"></div>
                </div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#about" 
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            En savoir plus sur notre approche
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
