'use client';

export default function About() {
  const partners = [
    { name: 'Cisco', logo: '/logos/CISCO.png' },
    { name: 'Vodafone', logo: '/logos/voda.png' },
    { name: 'Airtel', logo: '/logos/airtel.png' },
    { name: 'HPE', logo: '/logos/hpe.png' },
    { name: 'Juniper', logo: '/logos/junpiter.png' },
    { name: 'Tata', logo: '/logos/tata.png' },
    { name: 'Lycamobile', logo: '/logos/lyc.png' },
    { name: 'TCS', logo: '/logos/tcs.png' },
    { name: 'TP-Link', logo: '/logos/tplink.png' },
    { name: 'Dell EMC', logo: '/logos/emc.png' }
  ];
  
  return (
    <section id="about" className="py-12 sm:py-20" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-gray-900">Our Customers & Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {partners.map((p, i) => (
            <div key={i} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 flex items-center justify-center min-h-[100px] sm:min-h-[120px]">
              <img src={p.logo} alt={p.name} className="max-w-full h-12 sm:h-14 md:h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
