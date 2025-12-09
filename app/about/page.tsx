'use client';
import PageLoader from '@/components/PageLoader';

export default function AboutPage() {
  return (
    <main className="pt-16 sm:pt-20">
      <PageLoader />
      {/* Who We Are Section */}
      <section className="py-20 sm:py-32 bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/whoweare.jpg)'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-5xl relative z-10">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold mb-6 sm:mb-8 text-white">Who we are</h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
              We are an experienced and highly professional team who loves to design complex networks and solve critical cloud deployment challenges. We are a specialist provider of end-to-end cloud connectivity, storage, compute and capacity management.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">About Saitech</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Saitech is a leading provider of IT and telecom infrastructure solutions, specializing in network design, deployment, and management services. With years of industry experience, we have established ourselves as a trusted partner for enterprises and telecom operators worldwide.
                </p>
                <p className="text-base sm:text-lg">
                  Our expertise spans across multiple domains including cloud connectivity, data center solutions, network security, and infrastructure optimization. We work with industry-leading vendors and maintain strategic partnerships to deliver cutting-edge solutions that drive business growth.
                </p>
                <p className="text-base sm:text-lg">
                  At Saitech, we believe in building long-term relationships with our clients by understanding their unique challenges and delivering customized solutions that exceed expectations. Our team of certified professionals brings deep technical knowledge and practical experience to every project.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower businesses with innovative network solutions that enhance operational efficiency, reduce costs, and enable digital transformation through sustainable and scalable infrastructure.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted and preferred partner for enterprises seeking world-class network infrastructure solutions, recognized for our technical excellence, innovation, and commitment to customer success.
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Values</h3>
                <p className="text-gray-700 leading-relaxed">
                  Integrity, innovation, excellence, and customer-centricity form the foundation of everything we do. We are committed to delivering value through ethical practices and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-12 sm:py-20" style={{background: 'linear-gradient(135deg, #f7f7f7 0%, #ffffff 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900">Sustainability</h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-700 px-4">
              We help telecom companies to bring sustainability in every aspect of business such as managing resources, deploying technology, managing assets and network expansions to meet future growth.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🌐</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Network Utilisation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Understanding your network unitization and making sure that your entire network has uniform and well-distributed traffic help you to reduce the need of unplanned upgrades
              </p>
            </div>
            
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">⚡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Optimisation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Optimum use of bandwidth, infrastructure, hardware around your network is key to achieve sustainable growth
              </p>
            </div>
            
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🔧</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Network Hardware</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Encouraging the use of pre-owned hardware where possible is another step towards sustainability. Reduce the unnecessary manufacturing of old technology and promote new green manufacturing initiatives
              </p>
            </div>
            
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">♻️</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Green IT</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Practicing recycling for all your disposable or zero residual assets helps in recovering some of scarce resources like copper, silver, aluminium and gold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Objectives Section */}
      <section className="py-12 sm:py-20" style={{background: 'linear-gradient(135deg, #0A2540 0%, #00D4FF 100%)'}}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-white">Corporate Objectives</h2>
            <p className="text-base sm:text-lg max-w-4xl mx-auto text-gray-100 px-4">
              We work in a dynamic environment, our customers innovate and compete to achieve their goals. We pride ourself in maintaining trust, integrity and ethics.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Loyalty</h3>
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                To earn loyalty and trust from our customers by providing the highest level of quality and value.
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
                Drive customer success and growth in terms of overall profitability and return for shareholders.
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
              Customer success is our key business driver, everything we do is fully customised and designed for our their needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center group cursor-pointer bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl" style={{backgroundColor: 'rgba(0, 212, 255, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.2)'}>
                <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover:scale-110">💯</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">100% Dedication</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We are focused and a dedicated team, we qualify every single project and ensure delivery and customer satisfaction.
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
