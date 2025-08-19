import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, MapPin, Shield, Building, X, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Galería
  const images = [
    { src: '/images/4.jpg', alt: '.' },
    { src: '/images/6.jpg', alt: '.' },
    { src: '/images/7.jpg', alt: '.' },
    { src: '/images/8.jpg', alt: '.' },
    { src: '/images/9.jpg', alt: '.' },
    { src: '/images/10.jpg', alt: '.' },
    { src: '/images/11.jpg', alt: '.' },
    { src: '/images/16.jpg', alt: '.' },
    { src: '/images/19.jpg', alt: '.' },
    { src: '/images/20.jpg', alt: '.' },
    { src: '/images/21.jpg', alt: '.' },
    { src: '/images/22.jpg', alt: '.' },
    { src: '/images/23.jpg', alt: '.' },
    { src: '/images/26.jpg', alt: '.' },
    { src: '/images/27.jpg', alt: '.' },
    { src: '/images/28.jpg', alt: '.' },
    { src: '/images/32.jpg', alt: '.' },
    { src: '/images/33.jpg', alt: '.' },
    { src: '/images/36.jpg', alt: '.' },
    { src: '/images/38.jpg', alt: '.' },
    { src: '/images/42.jpg', alt: '.' },
    { src: '/images/43.jpg', alt: '.' },
    { src: '/images/44.jpg', alt: '.' },
    { src: '/images/46.jpg', alt: '.' },
    { src: '/images/47.jpg', alt: '.' },
    { src: '/images/48.jpg', alt: '.' },
    { src: '/images/49.jpg', alt: '.' },
    { src: '/images/51.jpg', alt: '.' },
    { src: '/images/54.jpg', alt: '.' },
    { src: '/images/58.jpg', alt: '.' },
    { src: '/images/60.jpg', alt: '.' },
    { src: '/images/Render nuevo 7.png', alt: '.' },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  // Teclado: Esc para cerrar, flechas para navegar
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  // --- Countdown lock for Gallery (Dominican Republic time UTC-4: 2025-08-21 10:00) ---
  // Convert to equivalent UTC moment: 2025-08-21T14:00:00Z
  const releaseAtUTC = new Date('2025-08-21T14:00:00Z').getTime();
  const [nowTs, setNowTs] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNowTs(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const remainingMs = Math.max(0, releaseAtUTC - nowTs);
  const isLocked = remainingMs > 0;

  const formatRemaining = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n) => n.toString().padStart(2, '0');
    if (days > 0) {
      return `${days}d ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };
  // --- End countdown lock ---

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
                  <div
                    className={`text-sm font-medium ${
                      fase.status === 'Completado'
                        ? 'text-green-600'
                        : fase.status === 'En proceso'
                        ? 'text-yellow-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {fase.status}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Galería de Renders con Lightbox */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            <h3 className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)] mb-8 text-center">
              Galería de Renders y Planos
            </h3>

            {/* Lock overlay and blurred content wrapper */}
            <div className="relative">
              {/* Content that gets blurred while locked */}
              <div
                className={`transition filter ${isLocked ? 'blur-xl' : 'blur-0'}`}
                aria-hidden={isLocked ? 'true' : 'false'}
                >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((img, idx) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => !isLocked && openLightbox(idx)}
                      className={`aspect-video rounded-xl overflow-hidden shadow-coco hover-lift focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)] ${
                        isLocked ? 'cursor-not-allowed' : ''
                      }`}
                      aria-label={`Abrir imagen: ${img.alt}`}
                      aria-disabled={isLocked ? 'true' : 'false'}
                      tabIndex={isLocked ? -1 : 0}
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={img.src}
                        alt={img.alt}
                        draggable={false}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Countdown Overlay (only while locked) */}
              <AnimatePresence>
                {isLocked && (
                  <motion.div
                    key="gallery-lock"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex items-center justify-center"
                    aria-live="polite"
                  >
                    <div className="backdrop-blur-md bg-white/60 border border-white/40 shadow-xl rounded-2xl px-6 py-5 text-center">
                      <div className="text-sm uppercase tracking-wide text-[var(--terracotta)] font-semibold mb-1">
                        Disponible en
                      </div>
                      <div className="font-kiona text-2xl md:text-3xl font-bold text-[var(--espresso)]">
                        {formatRemaining(remainingMs)}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
              {lightboxOpen && (
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeLightbox}
                  className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center"
                  aria-modal="true"
                  role="dialog"
                >
                  <motion.div
                    key="content"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-5xl mx-4"
                  >
                    {/* Close button */}
                    <button
                      onClick={closeLightbox}
                      className="absolute -top-12 right-0 text-white/80 hover:text-white transition rounded-full p-2"
                      aria-label="Cerrar lightbox"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Image container */}
                    <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="w-full h-[70vh] object-contain bg-black"
                        draggable={false}
                      />

                      {/* Caption */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm md:text-base">
                          {images[currentIndex].alt}
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
                        <button
                          onClick={prevImage}
                          aria-label="Imagen anterior"
                          className="p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
                        </button>
                        <button
                          onClick={nextImage}
                          aria-label="Siguiente imagen"
                          className="p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition focus:outline-none focus:ring-2 focus:ring-white"
                        >
                          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
                        </button>
                      </div>

                      {/* Counter */}
                      <div className="absolute top-3 left-3 text-white/80 text-xs md:text-sm bg-black/40 px-2 py-1 rounded">
                        {currentIndex + 1} / {images.length}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
                Ver Planos Completos
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
