export default function Services() {
  const services = [
    { 
      title: 'IT & Telecom Equipment', 
      desc: 'We supply networking equipment for core, edge and wireless network. We enable our customers for SDN and NFV.',
      image: '/IT.jpg',
      details: [
        'Enterprise-grade routers, switches, and firewalls',
        'Wireless access points and controllers',
        'Optical transport and DWDM systems',
        'SDN and NFV infrastructure solutions',
        'Network security appliances',
        'Load balancers and application delivery controllers'
      ]
    },
    { 
      title: 'Cloud Connectivity', 
      desc: 'Low latency solution for your point to point, MPLS, SDWAN, Subsea, or cloud connectivity.',
      image: '/cloudconnectivity.jpg',
      details: [
        'Direct cloud connections to AWS, Azure, and GCP',
        'MPLS and SD-WAN deployment and management',
        'Point-to-point fiber and dark fiber solutions',
        'Subsea cable connectivity for global reach',
        'Multi-cloud networking and hybrid solutions',
        'Low-latency trading and financial networks'
      ]
    },
    { 
      title: 'Networking Solutions', 
      desc: 'We cover network upgrade, migration, deployment and management solutions.',
      image: '/network-infa.jpg',
      details: [
        'Network design and architecture consulting',
        'Infrastructure migration and modernization',
        'Network deployment and commissioning',
        '24/7 network monitoring and management',
        'Performance optimization and troubleshooting',
        'Network security assessment and hardening'
      ]
    },
    { 
      title: 'Data Centre', 
      desc: 'We offer storage and compute along with scalable disaster recovery solutions.',
      image: '/AdobeStock_87909563.jpg',
      details: [
        'High-performance compute and storage systems',
        'Virtualization and hyperconverged infrastructure',
        'Disaster recovery and business continuity planning',
        'Backup and replication solutions',
        'Colocation and managed hosting services',
        'Data center migration and consolidation'
      ]
    }
  ];

  return (
    <section id="services" className="bg-white">
      <div className="text-center py-16" style={{backgroundColor: '#f7f7f7'}}>
        <h2 className="text-4xl font-bold text-gray-900">What we do for our customers</h2>
      </div>
      {services.map((s, i) => (
        <div key={i} className={`flex flex-col md:flex-row items-stretch gap-0 ${i % 2 ? 'md:flex-row-reverse' : ''}`} style={{backgroundColor: i % 2 ? '#ffffff' : '#f7f7f7'}}>
          <div className="flex-1 flex items-center justify-center p-6 md:p-12">
            <img src={s.image} alt={s.title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
          </div>
          <div className="flex-1 flex items-center p-6 md:p-12">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{s.title}</h2>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 flex-shrink-0" style={{color: 'var(--accent)'}}>✓</span>
                    <span className="text-gray-700 text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
