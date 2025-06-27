import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        <Services />
        <Portfolio />
        <ProcessSection />
        <ContactSection />
        <Footer />
        {/* Testimonials, etc. */}
      </div>
    </>
  );
}
