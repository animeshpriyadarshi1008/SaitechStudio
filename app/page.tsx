'use client';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import PageLoader from '@/components/PageLoader';

export default function Home() {
  return (
    <main>
      <PageLoader />
      <Hero />
      <Services />
      <About />
    </main>
  );
}
