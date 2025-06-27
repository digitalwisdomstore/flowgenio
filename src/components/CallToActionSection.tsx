import React from 'react';
import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-semibold mb-4">
        ¿Listo para llevar tu negocio al siguiente nivel?
      </h2>
      <p className="mb-8 max-w-xl mx-auto">
        Únete a cientos de emprendedores e influencers en LATAM que ya están
        creciendo con FLOWgenio. Empieza tu prueba gratuita de 14 días sin
        tarjeta de crédito.
      </p>
      <Link
        href="/signup"
        className="inline-block bg-white text-blue-600 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
      >
        Empieza tu prueba gratuita
      </Link>
    </section>
  );
}
