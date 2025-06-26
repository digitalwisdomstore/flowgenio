import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../../components/Button';

const Register: NextPage = () => {
  return (
    <>
      <Head><title>Registro – FLOWgenio</title></Head>
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-6">Crear cuenta</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm">Nombre</label>
            <input type="text" className="w-full mt-1 p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="w-full mt-1 p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm">Contraseña</label>
            <input type="password" className="w-full mt-1 p-2 border rounded" />
          </div>
          <Button type="submit" className="w-full bg-green-500 text-white">
            Registrarse
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
