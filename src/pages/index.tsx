import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>FLOWgenio SaaS – Para influencers y emprendedores LATAM</title>
        <meta name="description" content="Gestiona tus proyectos, clientes y finanzas en una sola plataforma" />
      </Head>
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a FLOWgenio</h1>
        <p className="mb-8">La plataforma SaaS para influencers, freelancers y emprendedores en LATAM</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Proyectos" description="Organiza y sigue el progreso de tus proyectos." />
          <Card title="Clientes" description="Gestiona tu cartera de clientes en un solo lugar." />
          <Card title="Facturación" description="Crea y envía facturas profesionales en minutos." />
        </div>
      </section>
    </>
  );
};

export default Home;
