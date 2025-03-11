
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">SupplySync</h3>
            <p className="text-gray-400 mb-6">
              Excellence en conseil supply chain et gestion des opérations pour les entreprises qui visent l'excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Optimisation Logistique</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Analyse de Performance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gestion des Achats</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Prévision et Planification</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Liens Rapides</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Méthodologie</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>123 Boulevard Haussmann</li>
              <li>75008 Paris, France</li>
              <li>+33 (0)1 23 45 67 89</li>
              <li>contact@supplysyncconsultants.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SupplySync Consultants. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-400 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
