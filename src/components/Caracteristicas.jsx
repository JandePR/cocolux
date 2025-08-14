
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Smartphone, Zap, Car, Shield, Wifi, Clock } from 'lucide-react';

const Caracteristicas = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "",
      description: "",
    });
  };

  const features = [
    {
      icon: Smartphone,
      title: 'Smart Access',
      description: 'Control inteligente de acceso desde tu dispositivo móvil'
    },
    {
      icon: Car,
      title: 'Parking Privado',
      description: 'Estacionamiento exclusivo para 34 vehículo'
    },
    {
      icon: Wifi,
      title: 'Conectividad Premium',
      description: 'Fibra óptica de alta velocidad en todas las áreas'
    }
  ];



  return (
    <section id="caracteristicas" className="section-padding bg-gradient-coco">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-kiona text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--espresso)] mb-8">
              Inspirado en la esencia del coco
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-[var(--dark-olive)] leading-relaxed space-y-6">
              <p>
                El diseño de COCOLUX HOTEL BOUTIQUE nace de la filosofía de conectar con la naturaleza a través de la esencia del coco. Cada elemento arquitectónico refleja la textura, los tonos y la sensualidad de este fruto tropical, creando una narrativa visual que envuelve a los huéspedes en una experiencia multisensorial única.
              </p>
              
              <p>
                Los materiales seleccionados - maderas nobles, fibras naturales, piedras volcánicas y textiles orgánicos - se combinan con tecnología de vanguardia para crear espacios que respiran sofisticación y confort. La paleta de colores terrosos y cremosos evoca la calidez del coco, mientras que las formas curvas y orgánicas del diseño interior recrean la sensación de estar dentro de este símbolo de placer natural.
              </p>
              
              <p>
                Esta narrativa se extiende a cada detalle: desde los acabados texturizados que recuerdan la cáscara del coco, hasta las fragancias naturales que perfuman los espacios, creando una atmósfera que despierta todos los sentidos y transporta a los huéspedes a un estado de relajación y placer absoluto.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-8 text-center">
              Características Premium
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <feature.icon className="h-12 w-12 text-[var(--terracotta)] mb-4" />
                  <h4 className="font-bold text-[var(--espresso)] text-lg mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-[var(--dark-olive)]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;
