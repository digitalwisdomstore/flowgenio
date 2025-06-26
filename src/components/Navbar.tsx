// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          FLOWgenio SaaS
        </Link>
        <div className="space-x-4">
          <Link href="/auth/login" className="hover:underline">
            Login
          </Link>
          <Link
            href="/auth/register"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
