
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleCTA = (type) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const trustLogos = [
    'Certificación Turística',
    'Arquitectura Sostenible',
    'Calidad Premium',
    'Inversión Segura'
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img  
          className="w-full h-full object-cover" 
          alt="Render 3D del hotel COCOLUX con diseño moderno y elegante"
         src="https://images.unsplash.com/photo-1568229988520-4bc288da81f7" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Adults Only Badge */}
      <div className="absolute top-8 right-4 md:top-28 md:right-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="adults-only-badge"
        >
          Solo Adultos 18+
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Brand */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-kiona text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            COCOLUX
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">HOTEL BOUTIQUE</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-[var(--cream)]"
          >
            Placer Natural
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200"
          >
            Un refugio de sofisticación donde cada detalle está diseñado para despertar tus sentidos y crear experiencias inolvidables.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => handleCTA('visita')}
              className="bg-gradient-terracotta text-white hover:opacity-90 px-8 py-4 text-lg font-semibold"
            >
              Agendar Visita
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleCTA('reserva')}
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--espresso)] px-8 py-4 text-lg font-semibold"
            >
              Reserva tu Experiencia
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-lg text-center"
              >
                <div className="text-sm font-medium text-[var(--espresso)]">
                  {logo}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
