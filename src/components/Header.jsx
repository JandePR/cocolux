import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleCTA = (type) => {
    toast({
      title: "",
      description: "",
    });
  };

  const menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Presentación', id: 'presentacion' },
    { label: 'Hotel', id: 'hotel' },
    { label: 'Características', id: 'caracteristicas' },
    { label: 'Amenidades', id: 'amenidades' },
    { label: 'Desarrolladores', id: 'desarrolladores' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-kiona text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <img
              src="images/logosolosinbg.png"
              alt="Cocolux logo"
              className="h-8 w-8 object-contain"
            />
            COCOLUX
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[var(--espresso)] hover:text-[var(--terracotta)] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/brochurehotel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-[var(--sage)] text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white"
              >
                Ver Brochure
              </Button>
            </a>
            <Button
              onClick={() => handleCTA('visita')}
              className="bg-gradient-terracotta text-white hover:opacity-90"
            >
              Agendar Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[var(--espresso)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--espresso)]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-[var(--espresso)] hover:text-[var(--terracotta)] transition-colors duration-200 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-[var(--sage)]/20">
                <a
                  href="files/brochurehotel.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-[var(--sage)] text-[var(--sage)] hover:bg-[var(--sage)] hover:text-white"
                  >
                    Ver Brochure
                  </Button>
                </a>
                <Button
                  onClick={() => handleCTA('visita')}
                  className="bg-gradient-terracotta text-white hover:opacity-90"
                >
                  Agendar Visita
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
