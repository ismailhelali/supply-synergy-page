
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Methodology from '@/components/Methodology';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { setupScrollAnimation } from '@/utils/scrollAnimation';

const Index = () => {
  useEffect(() => {
    document.title = "SupplySync Consultants - Excellence en conseil supply chain";
    
    // Setup scroll animations
    setupScrollAnimation();
    
    // Re-apply animations on dynamic content changes
    window.addEventListener('resize', setupScrollAnimation);
    
    return () => {
      window.removeEventListener('resize', setupScrollAnimation);
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Methodology />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
