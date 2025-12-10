'use client';
import PageLoader from '@/components/PageLoader';

export default function PartnersPage() {
  const partners = [
    {
      name: "Cisco Systems",
      logo: "/logos/CISCO.png",
      description: "Global leader in networking hardware, software, and telecommunications equipment. Cisco provides comprehensive solutions for enterprise networking, security, and collaboration.",
      partnership: "Saitech Studio is an authorized Cisco partner, providing end-to-end deployment, configuration, and support services for Cisco's enterprise networking solutions across Singapore and APAC region."
    },
    {
      name: "Juniper Networks", 
      logo: "/logos/junpiter.png",
      description: "Leading provider of high-performance network infrastructure solutions including routers, switches, and security products for service providers and enterprises.",
      partnership: "We collaborate with Juniper to deliver scalable network infrastructure solutions, specializing in their MX series routers and EX series switches for carrier-grade deployments."
    },
    {
      name: "HPE (Hewlett Packard Enterprise)",
      logo: "/logos/hpe.png", 
      description: "Enterprise technology company providing servers, storage, networking, and cloud solutions to help organizations accelerate digital transformation.",
      partnership: "Saitech partners with HPE to deliver comprehensive data center solutions, from server infrastructure to storage systems and hybrid cloud implementations."
    },
    {
      name: "EMC Dell Technologies",
      logo: "/logos/emc.png",
      description: "World's largest technology corporation providing data storage, information security, virtualization, analytics, and cloud computing solutions.",
      partnership: "Our partnership with Dell EMC enables us to provide enterprise storage solutions, backup systems, and data protection services for mission-critical applications."
    },
    {
      name: "TP-Link",
      logo: "/logos/tplink.png",
      description: "Global provider of networking products including wireless routers, switches, and access points for both consumer and business markets.",
      partnership: "Saitech leverages TP-Link's cost-effective networking solutions for SME deployments, providing reliable connectivity solutions with excellent price-performance ratio."
    },
    {
      name: "Tata Communications",
      logo: "/logos/tata.png",
      description: "Leading global digital infrastructure provider offering network services, cloud solutions, and communication services across 200+ countries.",
      partnership: "We work with Tata Communications to provide global connectivity solutions, MPLS networks, and international bandwidth services for our enterprise clients."
    },
    {
      name: "Vodafone",
      logo: "/logos/voda.png", 
      description: "One of the world's largest telecommunications companies providing mobile and fixed-line services, broadband, and digital services globally.",
      partnership: "Saitech collaborates with Vodafone to deliver mobile connectivity solutions, IoT services, and unified communications for businesses across multiple markets."
    },
    {
      name: "Airtel",
      logo: "/logos/airtel.png",
      description: "Leading telecommunications services company providing mobile, broadband, and digital services across Asia and Africa with over 500 million customers.",
      partnership: "Our partnership with Airtel enables us to provide comprehensive telecom solutions including mobile services, enterprise connectivity, and digital transformation services."
    }
  ];

  return (
    <main className="pt-16 sm:pt-20">
      <PageLoader />
      
      {/* Hero Section */}
      <section className="bg-cover bg-center bg-no-repeat relative flex items-center" style={{backgroundImage: 'url(/partner.jpg)', height: '67vh'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-6xl relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-200">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">Our Strategic Partners</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">Collaborating with industry leaders to deliver world-class networking and technology solutions</p>
          </div>
        </div>
      </section>

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