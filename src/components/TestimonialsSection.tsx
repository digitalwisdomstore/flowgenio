import React from 'react';

const testimonials = [
  {
    name: 'María López',
    role: 'CMO',
    company: 'Agencia Creativa MX',
    photo: '/images/testimonial-maria.jpg',
    quote:
      '“Con FLOWgenio aumentamos nuestro MRR un 60 % en tres meses. La gestión de clientes y proyectos nunca fue tan sencilla.”',
  },
  {
    name: 'Carlos Pérez',
    role: 'Freelancer',
    company: 'Desarrollo Web AR',
    photo: '/images/testimonial-carlos.jpg',
    quote:
      '“La automatización de facturas me ahorra dos horas diarias. Ahora dedico ese tiempo a crecer mi portfolio.”',
  },
  {
    name: 'Ana Silva',
    role: 'Influencer',
    company: 'BeautyBR',
    photo: '/images/testimonial-ana.jpg',
    quote:
      '“Gracias a la analítica en tiempo real, optimicé mis campañas de patrocinio y mis ingresos subieron un 45 %.”',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl font-semibold">Lo que dicen nuestros usuarios</h2>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-center text-center"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <p className="text-gray-800 italic mb-4">{t.quote}</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-600 mb-2">
              {t.role} en {t.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
