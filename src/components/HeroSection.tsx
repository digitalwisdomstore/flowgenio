import React from 'react';

export function HeroSection() {
  return (
    <section className="hero text-center py-16 px-4">
      <h1 className="text-5xl mb-4">
        Triplica tu adopción en LATAM sin aumentar tu CAC
      </h1>
      <p className="subheadline text-lg text-gray-600 mb-8">
        La solución SaaS diseñada para mercados latinoamericanos: automatiza tu adquisición, retención y escalabilidad con un click.
      </p>
      <ul className="hero-benefits grid gap-6 mb-8 auto-fit min-w-[220px]">
        <li>🚀 <strong>Go-to-Market express:</strong> despliega estrategias localizadas en minutos con nuestro setup guiado.</li>
        <li>🌎 <strong>Adaptación regional:</strong> flujos de onboarding y contenido en español, portugués y español latino neutro.</li>
        <li>📈 <strong>Growth hacking inteligente:</strong> A/B tests automáticos con machine learning ajustado a tu audiencia.</li>
        <li>🔒 <strong>Seguridad y cumplimiento:</strong> GDPR latam-ready y encriptación end-to-end para tus datos.</li>
      </ul>
      <blockquote className="hero-testimonial italic mx-auto max-w-lg mb-8">
        “Implementamos la plataforma en 2 semanas y logramos un 3× en trial conversions en solo 30 días.”
        <footer className="mt-2">— Diego Ramírez, CEO en <cite>EduTechBR</cite></footer>
      </blockquote>
      <a href="/signup" className="btn btn-primary text-lg px-6 py-3 rounded">
        Comienza tu evaluación gratuita ahora
      </a>
    </section>
  );
}

