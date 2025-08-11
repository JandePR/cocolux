
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

const LeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    interes: '',
    presupuesto: '',
    fechaObjetivo: '',
    mensaje: '',
    consentimiento: false
  });
  const { toast } = useToast();

  const totalSteps = 4;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (!formData.consentimiento) {
      toast({
        title: "Consentimiento requerido",
        description: "Debes aceptar el tratamiento de datos para continuar.",
      });
      return;
    }

    // Simular envío
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje 🚀",
    });
    
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      interes: '',
      presupuesto: '',
      fechaObjetivo: '',
      mensaje: '',
      consentimiento: false
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="font-kiona text-xl font-bold text-[var(--espresso)] mb-4">
              Información Personal
            </h3>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                value={formData.nombre}
                onChange={(e) => handleInputChange('nombre', e.target.value)}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                value={formData.telefono}
                onChange={(e) => handleInputChange('telefono', e.target.value)}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
                placeholder="+1 (809) 000-0000"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-kiona text-xl font-bold text-[var(--espresso)] mb-4">
              Interés de Inversión
            </h3>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                ¿Qué te interesa más? *
              </label>
              <select
                value={formData.interes}
                onChange={(e) => handleInputChange('interes', e.target.value)}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
              >
                <option value="">Selecciona una opción</option>
                <option value="inversion">Inversión condo-hotel</option>
                <option value="uso-personal">Uso personal/vacacional</option>
                <option value="ambos">Ambos (inversión + uso personal)</option>
                <option value="informacion">Solo información general</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                Rango de presupuesto
              </label>
              <select
                value={formData.presupuesto}
                onChange={(e) => handleInputChange('presupuesto', e.target.value)}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
              >
                <option value="">Selecciona un rango</option>
                <option value="150-200k">$150,000 - $200,000</option>
                <option value="200-250k">$200,000 - $250,000</option>
                <option value="250-300k">$250,000 - $300,000</option>
                <option value="300k+">$300,000+</option>
                <option value="consultar">Prefiero consultar</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-kiona text-xl font-bold text-[var(--espresso)] mb-4">
              Cronograma
            </h3>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                ¿Cuándo te gustaría tomar una decisión?
              </label>
              <select
                value={formData.fechaObjetivo}
                onChange={(e) => handleInputChange('fechaObjetivo', e.target.value)}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
              >
                <option value="">Selecciona un plazo</option>
                <option value="inmediato">Inmediatamente</option>
                <option value="1-mes">En el próximo mes</option>
                <option value="3-meses">En los próximos 3 meses</option>
                <option value="6-meses">En los próximos 6 meses</option>
                <option value="sin-prisa">Sin prisa, solo explorando</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--dark-olive)] mb-2">
                Mensaje adicional
              </label>
              <textarea
                value={formData.mensaje}
                onChange={(e) => handleInputChange('mensaje', e.target.value)}
                rows={4}
                className="w-full p-3 border border-[var(--sage)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--terracotta)]"
                placeholder="Cuéntanos más sobre tus intereses o preguntas específicas..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="font-kiona text-xl font-bold text-[var(--espresso)] mb-4">
              Confirmación
            </h3>
            <div className="bg-[var(--cream)] p-4 rounded-lg space-y-2 text-sm">
              <p><strong>Nombre:</strong> {formData.nombre}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Teléfono:</strong> {formData.telefono}</p>
              <p><strong>Interés:</strong> {formData.interes}</p>
              {formData.presupuesto && <p><strong>Presupuesto:</strong> {formData.presupuesto}</p>}
              {formData.fechaObjetivo && <p><strong>Cronograma:</strong> {formData.fechaObjetivo}</p>}
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consentimiento"
                checked={formData.consentimiento}
                onChange={(e) => handleInputChange('consentimiento', e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consentimiento" className="text-sm text-[var(--dark-olive)]">
                Acepto el tratamiento de mis datos personales para recibir información sobre 
                COCOLUX HOTEL BOUTIQUE y acepto ser contactado por el equipo de ventas. 
                Puedo retirar mi consentimiento en cualquier momento.
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Auto-open modal after 10 seconds (for demo purposes)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-kiona text-2xl font-bold text-[var(--espresso)]">
                  Información Exclusiva
                </h2>
                <p className="text-sm text-[var(--dark-olive)]">
                  Paso {currentStep} de {totalSteps}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-gradient-terracotta h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              {renderStep()}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-terracotta text-white flex items-center"
                >
                  Siguiente
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-terracotta text-white"
                >
                  Enviar Solicitud
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadModal;
