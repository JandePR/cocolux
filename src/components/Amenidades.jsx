
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Bed, Sparkles, Heart } from 'lucide-react';

const Amenidades = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "",
      description: "",
    });
  };

  const habitaciones = [
    {
      name: 'Coco Splash Suite',
      description: 'Suite íntima con jacuzzi privado y terraza con vista panorámica',
      features: ['45 m²', 'Jacuzzi privado', 'Terraza', 'Minibar premium']
    },
    {
      name: 'Palma de Coco Suite',
      description: 'Espaciosa suite con área de relajación y baño de inmersión',
      features: ['65 m²', 'Área de relajación', 'Baño de inmersión', 'Balcón privado']
    },
    {
      name: 'Bungalow Refugio del Coco',
      description: 'Villa privada con piscina exclusiva y jardín sensorial',
      features: ['85 m²', 'Piscina privada', 'Jardín sensorial', 'Sala de estar']
    }
  ];

  const experiencias = [
    {
      name: 'Práctica el Coco',
      description: 'Rituales sensoriales inspirados en la esencia natural del coco'
    },
    {
      name: 'Coco Adentro',
      description: 'Experiencias de conexión íntima en espacios privados'
    },
    {
      name: 'Body Painting Erótico',
      description: 'Arte corporal sensual con pigmentos naturales'
    },
    {
      name: 'Yoga Sensual',
      description: 'Práctica de yoga enfocada en la conexión y sensualidad'
    },
    {
      name: 'Área de Libanesas Expuestas',
      description: 'Espacio de relajación y contemplación al aire libre'
    },
    {
        name: 'Masaje erótico',
        description: 'Masaje relajante y sensual enfocado en despertar los sentidos y liberar tensiones'
    }
  ];

  const bienestar = [
    {
      name: 'Spa Sensual',
      description: 'Tratamientos de relajación y bienestar para parejas'
    },
    {
      name: 'Saunas Grupales',
      description: 'Espacios de relajación compartida con ambiente íntimo'
    },
    {
      name: 'Saunas Individuales',
      description: 'Saunas privadas para momentos de relajación personal'
    }
  ];

  return (
    <section id="amenidades" className="section-padding bg-white">
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
            <h2 className="font-kiona text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--espresso)] mb-6">
              Explora CocoLux
            </h2>
            <p className="text-lg md:text-xl text-[var(--dark-olive)] max-w-3xl mx-auto">
              Descubre un mundo de experiencias sensoriales diseñadas para despertar todos tus sentidos y crear momentos inolvidables.
            </p>
          </motion.div>

          {/* Habitaciones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <Bed className="h-8 w-8 text-[var(--terracotta)] mr-3" />
              <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)]">
                Habitaciones
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {habitaciones.map((habitacion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <h4 className="font-bold text-[var(--espresso)] text-lg mb-3">
                    {habitacion.name}
                  </h4>
                  <p className="text-[var(--dark-olive)] mb-4">
                    {habitacion.description}
                  </p>
                  <ul className="space-y-2">
                    {habitacion.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-[var(--sage)] flex items-center">
                        <span className="w-2 h-2 bg-[var(--terracotta)] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experiencias */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="h-8 w-8 text-[var(--terracotta)] mr-3" />
              <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)]">
                Experiencias
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiencias.map((experiencia, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <h4 className="font-bold text-[var(--espresso)] text-lg mb-3">
                    {experiencia.name}
                  </h4>
                  <p className="text-[var(--dark-olive)]">
                    {experiencia.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bienestar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-8">
              <Heart className="h-8 w-8 text-[var(--terracotta)] mr-3" />
              <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)]">
                Bienestar
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {bienestar.map((servicio, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <h4 className="font-bold text-[var(--espresso)] text-lg mb-3">
                    {servicio.name}
                  </h4>
                  <p className="text-[var(--dark-olive)]">
                    {servicio.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Días Especiales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-coco mb-12"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-6 text-center">
              Eventos Temáticos Especiales
            </h3>
            <p className="text-lg text-[var(--dark-olive)] text-center max-w-3xl mx-auto mb-8">
              COCOLUX organiza eventos temáticos exclusivos que incluyen noches de disfraces elegantes, 
              experiencias topless en áreas designadas, y pop-up stores con productos de bienestar y 
              sensualidad. Estos eventos especiales crean una comunidad única de huéspedes que valoran 
              la libertad, la elegancia y las experiencias auténticas.
            </p>
            <div className="text-center">
              <Button
                size="lg"
                onClick={handleCTA}
                className="bg-gradient-terracotta text-white hover:opacity-90 px-8 py-4 text-lg font-semibold"
              >
                Descargar Ficha Técnica Completa
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Amenidades;
