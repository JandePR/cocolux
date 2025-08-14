
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
      description: 'Control inteligente de acceso y climatización desde tu dispositivo móvil'
    },
    {
      icon: Car,
      title: 'Parking Privado',
      description: 'Estacionamiento exclusivo para cada suite con carga eléctrica'
    },
    {
      icon: Wifi,
      title: 'Conectividad Premium',
      description: 'Fibra óptica de alta velocidad en todas las áreas'
    }
  ];

  const faqs = [
    {
      question: '¿Qué incluye el modelo condo-hotel?',
      answer: 'Propiedad + gestión hotelera + ingresos por alquiler cuando no uses tu suite.'
    },
    {
      question: '¿Cuál es el ROI esperado?',
      answer: 'Proyección de 8-12% anual basado en ocupación del 70% y ADR premium.'
    },
    {
      question: '¿Hay opciones de financiamiento?',
      answer: 'Sí, ofrecemos planes desde 20% de enganche con financiamiento directo.'
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

          {/* Modelo de Operación */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-coco mb-16"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-6 text-center">
              Modelo de Operación Condo-Hotel
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--terracotta)] mb-2">1</div>
                <h4 className="font-bold text-[var(--espresso)] mb-3">Compra tu Suite</h4>
                <p className="text-[var(--dark-olive)]">Adquiere tu propiedad con todos los beneficios de ownership</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--terracotta)] mb-2">2</div>
                <h4 className="font-bold text-[var(--espresso)] mb-3">Gestión Hotelera</h4>
                <p className="text-[var(--dark-olive)]">Nosotros manejamos la operación cuando no la uses</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--terracotta)] mb-2">3</div>
                <h4 className="font-bold text-[var(--espresso)] mb-3">Genera Ingresos</h4>
                <p className="text-[var(--dark-olive)]">Recibe ingresos pasivos por alquiler hotelero</p>
              </div>
            </div>
          </motion.div>

          {/* Precios Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-sage rounded-2xl p-8 md:p-12 text-white mb-16"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold mb-8 text-center">
              Inversión y Financiamiento
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Desde $180,000</div>
                <div className="text-lg opacity-90">Coco Splash Suite</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Desde $220,000</div>
                <div className="text-lg opacity-90">Palma de Coco Suite</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Desde $280,000</div>
                <div className="text-lg opacity-90">Bungalow Refugio</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-lg opacity-90 mb-4">Financiamiento disponible desde 20% de enganche</p>
              <Button
                size="lg"
                onClick={handleCTA}
                className="bg-white text-[var(--sage)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Consultar Opciones de Pago
              </Button>
            </div>
          </motion.div>

          {/* Micro FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-8 text-center">
              Preguntas Frecuentes
            </h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-[var(--espresso)] text-lg mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-[var(--dark-olive)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Caracteristicas;
