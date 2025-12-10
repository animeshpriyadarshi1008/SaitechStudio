'use client';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import PageLoader from '@/components/PageLoader';
import WhyChooseUs from '@/components/WhyChooseUs';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <main>
      <PageLoader />
      <Hero />
      <ScrollAnimation animation="fadeInUp">
        <Services />
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInLeft">
        <About />
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInRight">
        <WhyChooseUs />
      </ScrollAnimation>
      <ScrollAnimation animation="fadeInUp">
        <Stats />
      </ScrollAnimation>
      <ScrollAnimation animation="fadeIn">
        <Testimonials />
      </ScrollAnimation>
    </main>
  );
}
