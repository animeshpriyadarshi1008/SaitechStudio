'use client';

export default function WhatWeDo() {
  const services = [
    {
      title: "IT & Telecom Solutions",
      description: "Comprehensive telecom equipment sourcing, deployment, and maintenance services for enterprise networks.",
      image: "/telecomequipments.jpg",
      features: ["Equipment Procurement", "Network Deployment", "24/7 Support"]
    },
    {
      title: "Cloud Connectivity", 
      description: "Seamless cloud integration and connectivity solutions to accelerate your digital transformation.",
      image: "/cloudconnectivity.jpg",
      features: ["Multi-Cloud Setup", "Hybrid Networks", "Secure Connections"]
    },
    {
      title: "Networking Solutions",
      description: "End-to-end network infrastructure design, implementation, and optimization for maximum performance.",
      image: "/network-infa.jpg", 
      features: ["Network Design", "Infrastructure Setup", "Performance Optimization"]
    },
    {
      title: "Data Center Services",
      description: "Complete data center solutions including colocation, managed services, and infrastructure support.",
      image: "/AdobeStock_87909563.jpg",
      features: ["Colocation Services", "Managed Infrastructure", "24/7 Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Do For Our Customers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering comprehensive IT and telecom solutions that drive business growth and operational excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: 'var(--accent)'}}></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}