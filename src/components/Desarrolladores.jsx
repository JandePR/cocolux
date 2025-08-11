
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Award, Users, Building2 } from 'lucide-react';

const Desarrolladores = () => {
  const { toast } = useToast();

  const handleCTA = (type) => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
  };

  const proyectistas = [
    {
      nombre: 'Arq. José Alberto de la Cruz',
      cargo: 'Proyectista General',
      especialidad: 'Arquitectura Hotelera y Diseño Sostenible'
    },
    {
      nombre: 'Arq. Sonia María Rodríguez',
      cargo: 'Proyectista de Interiores',
      especialidad: 'Diseño Sensorial y Espacios Íntimos'
    },
    {
      nombre: 'Arq. María Isabel Grullón',
      cargo: 'Proyectista de Paisajismo',
      especialidad: 'Jardines Sensoriales y Espacios Naturales'
    }
  ];

  const credenciales = [
    'Certificación LEED Gold',
    '15+ Proyectos Hoteleros',
    'Premios de Diseño Internacional',
    'Especialización en Arquitectura Sensorial'
  ];

  return (
    <section id="desarrolladores" className="section-padding bg-gradient-coco">
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
              Arquitectas al frente, excelencia garantizada
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-[var(--dark-olive)] leading-relaxed space-y-6">
              <p>
                COCOLUX HOTEL BOUTIQUE es desarrollado por un equipo de arquitectas visionarias que han establecido nuevos estándares en el diseño hotelero contemporáneo. Su enfoque innovador combina la sensibilidad femenina con la precisión técnica, creando espacios que no solo cumplen con los más altos estándares de calidad, sino que también evocan emociones y despiertan los sentidos.
              </p>
              
              <p>
                Este proyecto representa un símbolo de progreso en la industria, donde el liderazgo femenino en arquitectura se traduce en espacios más humanos, sostenibles y emocionalmente conectados. Cada decisión de diseño refleja una comprensión profunda de las necesidades humanas y la importancia de crear ambientes que nutran tanto el cuerpo como el alma.
              </p>
            </div>
          </motion.div>

          {/* Proyectistas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-8 text-center">
              Equipo de Proyectistas
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {proyectistas.map((proyectista, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl hover-lift text-center"
                >
                  <div className="w-20 h-20 bg-gradient-sage rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="font-bold text-[var(--espresso)] text-lg mb-2">
                    {proyectista.nombre}
                  </h4>
                  <p className="text-[var(--terracotta)] font-medium mb-3">
                    {proyectista.cargo}
                  </p>
                  <p className="text-[var(--dark-olive)] text-sm">
                    {proyectista.especialidad}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Aureum Studio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-coco mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Building2 className="h-12 w-12 text-[var(--terracotta)] mr-4" />
                  <div>
                    <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)]">
                      Aureum Studio
                    </h3>
                    <p className="text-[var(--sage)] font-medium">Arquitectura de Vanguardia</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-[var(--dark-olive)]">
                  <p>
                    Aureum Studio es un estudio de arquitectura reconocido internacionalmente por su 
                    enfoque innovador en el diseño de espacios hoteleros y residenciales de lujo. 
                    Fundado por un equipo de arquitectas visionarias, el estudio se especializa en 
                    crear experiencias arquitectónicas que trascienden lo convencional.
                  </p>
                  
                  <p>
                    Su filosofía de diseño se basa en la integración armoniosa entre la funcionalidad, 
                    la sostenibilidad y la experiencia sensorial, creando espacios que no solo son 
                    visualmente impactantes, sino que también generan conexiones emocionales profundas 
                    con sus usuarios.
                  </p>
                  
                  <p>
                    Con más de una década de experiencia en proyectos de hospitalidad premium, 
                    Aureum Studio ha establecido un nuevo paradigma en el diseño arquitectónico 
                    contemporáneo, donde cada proyecto es una obra de arte habitable.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-terracotta rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="font-kiona text-2xl font-bold text-white">AUREUM</span>
                </div>
                
                {/* Credenciales */}
                <div className="space-y-3">
                  {credenciales.map((credencial, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Award className="h-5 w-5 text-[var(--terracotta)] mr-2" />
                      <span className="text-[var(--dark-olive)] font-medium">{credencial}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleCTA('reunion')}
                className="bg-gradient-terracotta text-white hover:opacity-90 px-8 py-4 text-lg font-semibold"
              >
                Solicitar Reunión con Arquitectas
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleCTA('brochure')}
                className="border-2 border-[var(--terracotta)] text-[var(--terracotta)] hover:bg-[var(--terracotta)] hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Descargar Brochure Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Desarrolladores;
