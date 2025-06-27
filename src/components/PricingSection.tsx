import React from 'react';
import Card from './Card';

const tiers = [
  {
    name: 'Básico',
    price: '0',
    features: [
      'Hasta 3 proyectos',
      'Gestión de 10 clientes',
      'Facturas ilimitadas',
      'Soporte por email',
    ],
    cta: { href: '/signup?plan=basico', label: 'Empieza Gratis' },
  },
  {
    name: 'Pro',
    price: '29',
    features: [
      'Proyectos ilimitados',
      'Clientes ilimitados',
      'Automatizaciones avanzadas',
      'Soporte prioritario',
    ],
    cta: { href: '/signup?plan=pro', label: 'Comienza 14d Free' },
  },
  {
    name: 'Enterprise',
    price: '99',
    features: [
      'Todo en Pro',
      'Onboarding personalizado',
      'Acceso a API',
      'SLA 24/7',
    ],
    cta: { href: '/contact', label: 'Contactar Ventas' },
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl font-semibold">Planes y Precios</h2>
        <p className="text-gray-600 mt-2">
          Elige el plan que mejor se adapte a tu crecimiento en LATAM.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
            <div className="text-4xl font-bold mb-4">
              ${tier.price}
              <span className="text-lg font-normal text-gray-600">/mes</span>
            </div>
            <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
              {tier.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <a
              href={tier.cta.href}
              className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              {tier.cta.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
