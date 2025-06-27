import type { NextPage } from 'next';
import SEO from '../components/SEO';

import { ClipboardList, Users, DollarSign } from 'lucide-react';

import { HeroSection } from '../components/HeroSection';
import Card from '../components/Card';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title="FLOWgenio SaaS – Para influencers y emprendedores LATAM"
        description="Gestiona tus proyectos, clientes y finanzas en una sola plataforma"
        url="https://flowgenio.com"
        image="https://flowgenio.com/og-image.png"
      />

      {/* Hero */}
      <HeroSection />

      {/* Características clave */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Características clave</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <Card
            icon={<ClipboardList />}
            title="Proyectos"
            description="Organiza y sigue el progreso de tus proyectos."
            href="/proyectos"
          />
          <Card
            icon={<Users />}
            title="Clientes"
            description="Gestiona tu cartera de clientes en un solo lugar."
            href="/clientes"
          />
          <Card
            icon={<DollarSign />}
            title="Facturación"
            description="Crea y envía facturas profesionales en minutos."
            href="/facturacion"
          />
        </div>
      </section>

      {/* Planes y Precios */}
      <PricingSection />

      {/* Testimonios */}
      <TestimonialsSection />

      {/* Llamada a la acción final */}
      <CallToActionSection />
    </>
  );
};

export default Home;
