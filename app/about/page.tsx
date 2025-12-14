'use client';
import PageLoader from '@/components/PageLoader';
import HeroSection from '@/components/sections/HeroSection';
import { getPageContent } from '@/lib/content';

export default function AboutPage() {
  const aboutContent = getPageContent('about') as any;
  
  return (
    <main className="pt-16 sm:pt-20">
      <PageLoader />
      <HeroSection 
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
        backgroundImage={aboutContent.hero.backgroundImage}
        height="67vh"
      />

      {/* Company Overview */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">{aboutContent.company.title}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {aboutContent.company.paragraphs.map((paragraph: string, index: number) => (
                  <p key={index} className="text-base sm:text-lg">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {aboutContent.company.values.map((value: any, index: number) => (
                <div key={index} className={`bg-gradient-to-br from-${value.color}-50 to-${value.color === 'cyan' ? 'blue' : value.color === 'blue' ? 'indigo' : 'purple'}-50 p-6 rounded-lg border-l-4 border-${value.color}-500`}>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-12 sm:py-20" style={{background: 'linear-gradient(135deg, #f7f7f7 0%, #ffffff 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900">{aboutContent.sustainability.title}</h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 px-4">
              {aboutContent.sustainability.description}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {aboutContent.sustainability.features.map((feature: any, index: number) => (
              <div key={index} className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                  <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">{feature.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Objectives Section */}
      <section className="py-12 sm:py-20" style={{background: 'linear-gradient(135deg, #0A2540 0%, #00D4FF 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-white">Corporate Objectives</h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-100 px-4">
              We work in a dynamic environment where innovation and competition drive success. We pride ourself in maintaining trust, integrity and ethics.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Loyalty</h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                To earn loyalty and trust by providing the highest level of quality and value.
              </p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🔍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Transparency</h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                To be direct, open and transparent in all our dealings without any compromise on integrity.
              </p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🚀</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Agility</h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                To be agile, adaptable and resourceful to deliver faster on a consistent basis.
              </p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">📈</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Growth</h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                Drive success and growth in terms of overall profitability and return for shareholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20" style={{background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900">Why Choose Us</h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 px-4">
              Success is our key business driver, everything we do is fully customised and designed for specific needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">💯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">100% Dedication</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We are focused and a dedicated team, we qualify every single project and ensure delivery and satisfaction.
              </p>
            </div>
            
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🎯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Experience</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We have relevant experience working with largest telecom companies in the world. We understand the challenges find opportunities.
              </p>
            </div>
            
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">⚙️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Technical Expertise</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We deal with complex networks, hardware and solutions. Technology is an integral part of our propositions and solution offerings.
              </p>
            </div>
            
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🎯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Target Driven</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We are a result oriented organisation, we believe time is money and assure you to achieve desired goals with in the committed timelines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
