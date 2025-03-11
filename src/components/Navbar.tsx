
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Méthodologie', href: '#methodology' },
    { name: 'À Propos', href: '#about' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ease-in-out",
        isScrolled ? "navbar-scrolled" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-serif font-semibold tracking-tight">
              SupplySync
            </span>
            <span className="ml-1 text-xs font-medium tracking-widest text-primary/80 hidden sm:block">
              CONSULTANTS
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="hidden md:inline-flex button-hover-effect bg-primary text-white px-5 py-2 rounded-md text-sm font-medium"
          >
            Consultation Gratuite
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 hover:bg-secondary"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-serif font-semibold">SupplySync</span>
            <button 
              className="rounded-md p-2 hover:bg-secondary"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto">
            <a 
              href="#contact" 
              className="w-full inline-flex justify-center button-hover-effect bg-primary text-white px-5 py-3 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              Consultation Gratuite
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
