import type { NextPage } from 'next';
import Head from 'next/head';

const Dashboard: NextPage = () => {
  return (
    <>
      <Head><title>Dashboard – FLOWgenio</title></Head>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Resumen de tu actividad y métricas claves.</p>
        {/* Aquí podrás añadir gráficos, tablas o componentes personalizados */}
      </div>
    </>
  );
};

export default Dashboard;
