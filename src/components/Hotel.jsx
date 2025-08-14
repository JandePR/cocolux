
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, MapPin, Shield, Building } from 'lucide-react';

const Hotel = () => {
  const { toast } = useToast();

  const handleCTA = (type) => {
    toast({
      title: "",
      description: "",
    });
  };

  const specs = [
    { icon: Building, label: 'Altura', value: '2 niveles' },
    { icon: MapPin, label: 'Ubicación', value: 'Zona turística premium' },
    { icon: Shield, label: 'Certificación', value: 'Construcción organica' },
    { icon: Calendar, label: 'Inicio', value: 'Q4 2025' }
  ];

  const cronograma = [
    { fase: 'Diseño Arquitectónico', status: 'Completado', fecha: 'Q4 2024' },
    { fase: 'Permisos y Licencias', status: 'En proceso', fecha: 'Q1 2025' },
    { fase: 'Inicio de Construcción', status: 'Programado', fecha: 'Q4 2025' },
    { fase: 'Entrega Final', status: 'Programado', fecha: 'Q4 2028' }
  ];

  const riesgos = [
    'Permisos municipales pre-aprobados',
    'Financiamiento garantizado',
    'Equipo constructor con 15+ años experiencia',
    'Póliza de cumplimiento del 100%'
  ];

  return (
    <section id="hotel" className="section-padding bg-white">
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
              Especificaciones del Proyecto
            </h2>
            <p className="text-lg md:text-xl text-[var(--dark-olive)] max-w-3xl mx-auto">
              Un desarrollo arquitectónico de vanguardia con los más altos estándares de calidad.
            </p>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl text-center hover-lift"
              >
                <spec.icon className="h-8 w-8 text-[var(--terracotta)] mx-auto mb-4" />
                <div className="text-lg font-bold text-[var(--espresso)] mb-2">
                  {spec.value}
                </div>
                <div className="text-[var(--dark-olive)] text-sm">
                  {spec.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cronograma */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-8 text-center">
              Cronograma de Desarrollo
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cronograma.map((fase, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 ${
                    fase.status === 'Completado' 
                      ? 'bg-green-50 border-green-200' 
                      : fase.status === 'En proceso'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-sm font-semibold text-[var(--terracotta)] mb-2">
                    {fase.fecha}
                  </div>
                  <div className="font-bold text-[var(--espresso)] mb-2">
                    {fase.fase}
                  </div>
                  <div className={`text-sm font-medium ${
                    fase.status === 'Completado' 
                      ? 'text-green-600' 
                      : fase.status === 'En proceso'
                      ? 'text-yellow-600'
                      : 'text-gray-600'
                  }`}>
                    {fase.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Galería de Renders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-8 text-center">
              Galería de Renders y Planos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-coco hover-lift">
                <img  
                  className="w-full h-full object-cover" 
                  alt="Render exterior del hotel COCOLUX"
                 src="https://images.unsplash.com/photo-1695984182409-e281ee9fb45a" />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-coco hover-lift">
                <img  
                  className="w-full h-full object-cover" 
                  alt="Render de la piscina infinity"
                 src="https://images.unsplash.com/photo-1673004765673-1ad06d495d79" />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-coco hover-lift">
                <img  
                  className="w-full h-full object-cover" 
                  alt="Planos arquitectónicos del proyecto"
                 src="https://images.unsplash.com/photo-1679511202153-0d4dc8ac0ff9" />
              </div>
            </div>
          </motion.div>

          {/* Riesgos Mitigados */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-sage rounded-2xl p-8 md:p-12 text-white mb-12"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold mb-6 text-center">
              Riesgos Mitigados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {riesgos.map((riesgo, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">{riesgo}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => handleCTA('planos')}
                className="bg-gradient-terracotta text-white hover:opacity-90 px-8 py-4 text-lg font-semibold"
              >
                Solicitar Planos Completos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleCTA('visita-tecnica')}
                className="border-2 border-[var(--terracotta)] text-[var(--terracotta)] hover:bg-[var(--terracotta)] hover:text-white px-8 py-4 text-lg font-semibold"
              >
                Agendar Visita Técnica
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
