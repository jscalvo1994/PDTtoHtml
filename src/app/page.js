import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Aquí seguirán los componentes: <Services />, <Portfolio />, etc. */}
      </main>
    </>
  );
}
