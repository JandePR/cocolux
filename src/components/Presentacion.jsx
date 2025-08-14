
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Presentacion = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "",
      description: "",
    });
  };

  const highlights = [
    { label: 'Superficie', value: '39,663 m²' },
    { label: 'Unidades', value: '30 Suites' },
    { label: 'Entrega', value: 'Q1 2028' },
    { label: 'Zona', value: 'Las Terrenas' }
  ];

  return (
    <section id="presentacion" className="section-padding bg-gradient-coco">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-kiona text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--espresso)] mb-8">
              Un refugio de placer y sofisticación
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-[var(--dark-olive)] leading-relaxed space-y-6">
              <p>
                COCOLUX HOTEL BOUTIQUE representa la perfecta fusión entre elegancia contemporánea y experiencias sensoriales únicas. Diseñado exclusivamente para adultos, nuestro refugio ofrece un ambiente de sofisticación donde cada detalle ha sido cuidadosamente pensado para despertar los sentidos y crear momentos inolvidables.
              </p>
              
              <p>
                Inspirado en la esencia natural del coco, el hotel combina materiales orgánicos con tecnología de vanguardia, creando espacios que invitan a la relajación y al placer. Cada suite es un santuario privado donde la intimidad y el lujo se encuentran en perfecta armonía.
              </p>
              
              <p>
                Nuestras experiencias van más allá del hospedaje tradicional, ofreciendo actividades sensoriales, bienestar integral y momentos de conexión auténtica en un entorno exclusivo para huéspedes mayores de 18 años.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <div className="text-2xl md:text-3xl font-bold text-[var(--terracotta)] mb-2">
                  {highlight.value}
                </div>
                <div className="text-[var(--dark-olive)] font-medium">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Band */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-sage rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold mb-4">
              Descubre tu nuevo refugio de placer
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Únete a una experiencia exclusiva donde la sofisticación y el placer natural se encuentran. 
              Agenda tu visita privada y conoce todos los detalles de este proyecto único.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleCTA}
                className="bg-white text-[var(--sage)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Agendar Visita Privada
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCTA}
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--sage)] px-8 py-4 text-lg font-semibold"
              >
                Descargar Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
