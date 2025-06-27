import React from 'react';
import Link from 'next/link';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/" className="text-2xl font-bold">
            FLOWgenio
          </Link>
          <div className="space-x-8 text-gray-700">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Precios</Link>
            <Link href="/login" className="font-medium">
              Login
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto text-center py-6 text-gray-600 text-sm">
          © {new Date().getFullYear()} FLOWgenio. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
