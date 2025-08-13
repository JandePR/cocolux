
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const legales = [
    'Términos y Condiciones',
    'Política de Privacidad',
    'Aviso Legal',
    'Política de Cookies'
  ];

  return (
    <footer className="bg-[var(--dark-espresso)] text-[var(--cream)] section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="font-kiona text-3xl font-bold text-gradient mb-4">
                COCOLUX HOTEL BOUTIQUE
              </div>
              <p className="text-[var(--cream)]/80 mb-6 max-w-md">
                Un refugio de placer y sofisticación donde cada detalle está diseñado 
                para despertar tus sentidos y crear experiencias inolvidables.
              </p>
              <div className="adults-only-badge">
                Solo Adultos 18+
              </div>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <div className="space-y-3">
                <a 
                  href="https://instagram.com/cocoluxhotel"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[var(--cream)]/80 hover:text-[var(--cream)] transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-3" />
                  Contáctanos por Instagram
                </a>
                <div className="flex items-center text-[var(--cream)]/80">
                  <Phone className="h-5 w-5 mr-3" />
                  +1 (809) 000-0000
                </div>
                <div className="flex items-center text-[var(--cream)]/80">
                  <Phone className="h-5 w-5 mr-3" />
                  +1 (809) 000-0001
                </div>
                <div className="flex items-center text-[var(--cream)]/80">
                  <Mail className="h-5 w-5 mr-3" />
                  contacto@aureumstudio.com
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <div className="space-y-2">
                {legales.map((legal, index) => (
                  <div key={index} className="text-[var(--cream)]/80 hover:text-[var(--cream)] transition-colors cursor-pointer">
                    {legal}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-[var(--cream)]/20 pt-8 text-center"
          >
            <p className="text-[var(--cream)]/60">
              © 2024 COCOLUX HOTEL BOUTIQUE. Todos los derechos reservados. 
              Desarrollado por Aureum Studio.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
