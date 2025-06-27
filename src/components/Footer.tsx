import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto py-8 px-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} FLOWgenio. Todos los derechos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="/terms" className="hover:underline">Términos</a>
          <a href="/privacy" className="hover:underline">Privacidad</a>
          <a href="/contact" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
