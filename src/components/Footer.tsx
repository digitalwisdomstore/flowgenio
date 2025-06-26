export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FLOWgenio SaaS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
