
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Plane, Building } from 'lucide-react';

const Mapa = () => {
  const pois = [
    { icon: Plane, label: 'Aeropuerto Internacional', distance: '15 min' },
    { icon: Building, label: 'Centro Comercial Premium', distance: '5 min' },
    { icon: Car, label: 'Marina Turística', distance: '8 min' },
    { icon: MapPin, label: 'Zona Hotelera Principal', distance: '3 min' }
  ];

  return (
    <section className="section-padding bg-white">
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
            <h2 className="font-kiona text-4xl md:text-5xl font-bold text-[var(--espresso)] mb-6">
              Ubicación Privilegiada
            </h2>
            <p className="text-lg md:text-xl text-[var(--dark-olive)] max-w-3xl mx-auto">
              Estratégicamente ubicado en el corazón de la zona turística premium, 
              con acceso inmediato a las mejores atracciones y servicios.
            </p>
          </motion.div>

          {/* POIs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {pois.map((poi, index) => (
              <div key={index} className="glass-card p-4 rounded-xl text-center">
                <poi.icon className="h-8 w-8 text-[var(--terracotta)] mx-auto mb-3" />
                <div className="font-medium text-[var(--espresso)] text-sm mb-1">
                  {poi.label}
                </div>
                <div className="text-[var(--sage)] text-sm font-bold">
                  {poi.distance}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-coco"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-70.7000,-18.5000,-70.6000,-18.4000&layer=mapnik&marker=-18.45,-70.65"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación COCOLUX HOTEL BOUTIQUE"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;
