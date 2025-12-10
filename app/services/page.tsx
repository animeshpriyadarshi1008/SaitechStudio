'use client';
import PageLoader from '@/components/PageLoader';
import HeroSection from '@/components/sections/HeroSection';
import { getPageContent } from '@/lib/content';

export default function ServicesPage() {
  return (
    <main>
      <PageLoader />

      <HeroSection 
        title={getPageContent('services').hero.title}
        description={getPageContent('services').hero.description}
        backgroundImage={getPageContent('services').hero.backgroundImage}
      />

      {/* Why Saitech */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">{getPageContent('services').whySaitech.title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">{getPageContent('services').whySaitech.description}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPageContent('services').whySaitech.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">{getPageContent('services').approach.title}</h2>
          <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
            {getPageContent('services').approach.steps.flatMap((step, index) => {
              const elements = [
                <div key={`step-${index}`} className="flex flex-col items-center text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#E0F7FF', color: 'var(--accent)'}}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed px-2 max-w-xs">{step.description}</p>
                </div>
              ];
              
              if (index < getPageContent('services').approach.steps.length - 1) {
                elements.push(
                  <div key={`arrow-${index}`} className="hidden md:flex items-center mx-4">
                    <svg className="w-8 h-8" fill="var(--accent)" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                );
              }
              
              return elements;
            })}
          </div>
        </div>
      </section>

      {/* Legacy Network */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Legacy Network</h2>
          <h3 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 leading-relaxed">Enhance the life of your legacy network and build a sustainable spares management.</h3>
          <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed">
            <p className="text-xs sm:text-sm md:text-base">Networks are built over a period of time, it take lot of effort in planning, budgeting, sourcing and later deployment, testing and finally provisioning traffic. Getting rid of old technology and removing your network in exchange of new equipment and technology is sometimes not cost effective in the short run.</p>
            <p className="text-sm sm:text-base">Sourcing hardware and support is the biggest challenge in maintaining legacy network. Often manufacturers are reluctant to support and provide hardware for legacy networks.</p>
            <p className="text-sm sm:text-base">Whether you support your legacy network in house or outsource, Saitech Studio is here to help keep your end of life equipment up and running.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-8">
            <div className="space-y-3">
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Spares Management</span></div>
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Asset Valuation</span></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Repair & Test</span></div>
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Investment Recovery</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Datacentre & Colocation */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Datacentre & Colocation</h2>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800 leading-relaxed">Increasing levels of regulation are making significant demands on how organisations store and manage their growing volumes of data.</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base">In the face of economic, regulatory and technological change, companies need to find flexible and scalable ways to manage their IT infrastructure, without compromising on security and reliability.</p>
                <p className="text-sm sm:text-base">For many organisations, outsourcing their need for Data Centre is the best solution. You retain full control of IT infrastructure while taking advantage of the state-of-the-art technology, security, connectivity and availability.</p>
              </div>
            </div>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg bg-white shadow-sm">
                <summary className="p-4 cursor-pointer font-semibold hover:bg-gray-50 text-sm sm:text-base">Global Footprint</summary>
                <div className="p-4 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">Our well-established partnerships with well-known data centre operators enable us to offer highly flexible colocation solutions that can be designed to meet your specific needs.</div>
              </details>
              <details className="border border-gray-200 rounded-lg bg-white shadow-sm">
                <summary className="p-4 cursor-pointer font-semibold hover:bg-gray-50 text-sm sm:text-base">Virtual - POP</summary>
                <div className="p-4 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">Whether it's rack space in our highly connected Global Carrier Centre, a partial rack or full suite anywhere on-net or a virtual PoP you need, we've got it covered.</div>
              </details>
              <details className="border border-gray-200 rounded-lg bg-white shadow-sm">
                <summary className="p-4 cursor-pointer font-semibold hover:bg-gray-50 text-sm sm:text-base">Connect & Colocate</summary>
                <div className="p-4 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">We provide direct connectivity to all major carriers available in our colocations. Once you colocate you have options to use multiple local & international carriers.</div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Saitech Service Offerings */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">Comprehensive Service Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Network Design & Consulting</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Saitech's certified network architects design scalable, secure, and high-performance networks tailored to your business objectives. We assess your current infrastructure, identify bottlenecks, and propose future-ready solutions.</p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-cyan-600">•</span><span>Network topology design and optimization</span></li>
                <li className="flex items-start"><span className="mr-2 text-cyan-600">•</span><span>Capacity planning and traffic engineering</span></li>
                <li className="flex items-start"><span className="mr-2 text-cyan-600">•</span><span>Security architecture and compliance</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Equipment Procurement</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Access to new, refurbished, and pre-owned networking equipment from all major vendors. Saitech's global supply chain ensures competitive pricing and rapid delivery for both standard and hard-to-find components.</p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-blue-600">•</span><span>New and certified pre-owned hardware</span></li>
                <li className="flex items-start"><span className="mr-2 text-blue-600">•</span><span>Emergency spares and critical components</span></li>
                <li className="flex items-start"><span className="mr-2 text-blue-600">•</span><span>Vendor-neutral sourcing strategies</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Managed Services</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">24/7 network monitoring, management, and support services. Saitech's NOC team proactively monitors your infrastructure, resolves issues, and ensures optimal performance with guaranteed SLAs.</p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-indigo-600">•</span><span>24/7 network operations center (NOC)</span></li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">•</span><span>Proactive monitoring and alerting</span></li>
                <li className="flex items-start"><span className="mr-2 text-indigo-600">•</span><span>Incident management and resolution</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Migration & Upgrades</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">Seamless network migrations and technology upgrades with minimal downtime. Saitech manages the entire process from planning to cutover, ensuring business continuity throughout the transition.</p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start"><span className="mr-2 text-purple-600">•</span><span>Zero-downtime migration strategies</span></li>
                <li className="flex items-start"><span className="mr-2 text-purple-600">•</span><span>Technology refresh and modernization</span></li>
                <li className="flex items-start"><span className="mr-2 text-purple-600">•</span><span>Rollback planning and risk mitigation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Surplus Asset Management */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Surplus Asset Management - IT & Telecoms</h2>
          <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed mb-8">
            <p className="text-sm sm:text-base">There are several factors which leads to surplus IT & telecoms assets and any organisation such as: technological changes, latest products, higher capacity needs, mergers & acquisitions.</p>
            <p className="text-sm sm:text-base">In some cases, if equipment is handled with care, there is a significant value in these assets. we help our customers by providing services around surplus asset management to ensure maximum return on investment.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-3">
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Removal & De-Install</span></div>
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Inventory Listing</span></div>
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Transportations & Storage</span></div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Resale</span></div>
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">ROI</span></div>
              <div className="flex items-center"><span className="mr-3 text-lg sm:text-xl" style={{color: 'var(--accent)'}}>✓</span><span className="text-sm sm:text-base">Recycling</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 text-white text-center" style={{background: 'linear-gradient(to right, #0A2540, #1a3a5a)'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">Engage with us to reduce fixed network cost – Start Today!</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">We aim to identify the areas of cost saving in global connectivity procurement, legacy network hardware procurement, disposal of surplus assets, spare management and enhance your productivity and profitability.</p>
          <a href="/contact" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Say Hello</a>
        </div>
      </section>
    </main>
  );
}
