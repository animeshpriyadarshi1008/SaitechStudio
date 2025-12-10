'use client';
import PageLoader from '@/components/PageLoader';
import HeroSection from '@/components/sections/HeroSection';
import { getPageContent, getPartners } from '@/lib/content';

export default function PartnersPage() {
  const partners = getPartners().map(partner => ({
    ...partner
  }));

  return (
    <main className="pt-16 sm:pt-20">
      <PageLoader />
      
      <HeroSection 
        title={getPageContent('partners').hero.title}
        description={getPageContent('partners').hero.description}
        backgroundImage={getPageContent('partners').hero.backgroundImage}
      />

      {/* Partners Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3 text-center">
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-20 mx-auto object-contain"
                    />
                    <h3 className="text-2xl font-bold mt-4 text-gray-900">{partner.name}</h3>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="space-y-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-gray-900">About {partner.name}</h4>
                      <p className="text-gray-700 leading-relaxed">{partner.description}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-gray-900">How Saitech Studio Helps</h4>
                      <p className="text-gray-700 leading-relaxed">{partner.partnership}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Leverage Our Partnerships?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get access to best-in-class technology solutions through our strategic partnerships
          </p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
}