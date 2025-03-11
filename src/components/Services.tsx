
import { Truck, BarChart3, LineChart, ShoppingCart, Package, Users } from 'lucide-react';

const serviceItems = [
  {
    icon: <Truck size={36} className="text-primary" />,
    title: "Optimisation Logistique",
    description: "Optimisez l'ensemble de votre chaîne logistique pour réduire les délais, minimiser les coûts et améliorer la fiabilité des livraisons."
  },
  {
    icon: <BarChart3 size={36} className="text-primary" />,
    title: "Analyse de Performance",
    description: "Évaluez les performances de votre chaîne d'approvisionnement à l'aide d'indicateurs clés et identifiez les opportunités d'amélioration."
  },
  {
    icon: <ShoppingCart size={36} className="text-primary" />,
    title: "Gestion des Achats",
    description: "Améliorez vos processus d'achat, optimisez vos relations fournisseurs et réduisez vos coûts d'approvisionnement."
  },
  {
    icon: <LineChart size={36} className="text-primary" />,
    title: "Prévision et Planification",
    description: "Développez des modèles prévisionnels fiables et mettez en place des processus de planification efficaces pour anticiper la demande."
  },
  {
    icon: <Package size={36} className="text-primary" />,
    title: "Gestion des Stocks",
    description: "Optimisez vos niveaux de stock pour réduire les coûts de possession tout en maintenant un excellent taux de service client."
  },
  {
    icon: <Users size={36} className="text-primary" />,
    title: "Formation et Accompagnement",
    description: "Formez vos équipes aux meilleures pratiques de la supply chain et accompagnez-les dans la mise en œuvre des changements."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Des solutions personnalisées pour optimiser chaque aspect de votre chaîne d'approvisionnement
            et améliorer votre performance globale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="feature-card group animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Vous avez un besoin spécifique qui ne figure pas dans cette liste ?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center button-hover-effect bg-white border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
