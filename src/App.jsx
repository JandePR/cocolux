
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Presentacion from '@/components/Presentacion';
import Hotel from '@/components/Hotel';
import Caracteristicas from '@/components/Caracteristicas';
import Amenidades from '@/components/Amenidades';
import Desarrolladores from '@/components/Desarrolladores';
import Mapa from '@/components/Mapa';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>COCOLUX HOTEL BOUTIQUE - Placer Natural | Hotel Solo Adultos</title>
        <meta name="description" content="Descubre COCOLUX HOTEL BOUTIQUE, un refugio de placer y sofisticación solo para adultos. Experiencias sensoriales únicas en un ambiente de elegancia natural." />
        <meta property="og:title" content="COCOLUX HOTEL BOUTIQUE - Placer Natural" />
        <meta property="og:description" content="Hotel boutique solo para adultos con experiencias sensoriales únicas y diseño inspirado en la esencia del coco." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="keywords" content="hotel boutique, solo adultos, experiencias sensoriales, coco, placer natural, sofisticación" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-coco">
        <Header />
        <main>
          <Hero />
          <Presentacion />
          <Hotel />
          <Caracteristicas />
          <Amenidades />
          <Desarrolladores />
          <Mapa />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
