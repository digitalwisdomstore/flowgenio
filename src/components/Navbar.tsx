import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          FLOWgenio
        </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>
            <Link
              href="/features"
              className="hover:text-blue-600 transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-blue-600 transition-colors"
            >
              Precios
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              Nosotros
            </Link>
          </li>
        </ul>

        {/* Botón móvil */}
        <div className="md:hidden">
          <button aria-label="Abrir menú" className="text-gray-700 focus:outline-none">
            ☰
          </button>
        </div>

        {/* CTA */}
        <Link
          href="/signup"
          className="ml-4 inline-block bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors"
        >
          Regístrate
        </Link>
      </nav>
    </header>
  );
}
