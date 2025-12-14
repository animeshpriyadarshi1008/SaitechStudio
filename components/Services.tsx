import { SERVICES } from '@/constants/data';

export default function Services() {

  return (
    <section id="services" className="bg-white">
      <div className="text-center py-16" style={{backgroundColor: '#f7f7f7'}}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <h2 className="text-4xl font-bold text-gray-900">What we do</h2>
        </div>
      </div>
      {SERVICES.map((s, i) => (
        <div key={i} style={{backgroundColor: i % 2 ? '#ffffff' : '#f7f7f7'}}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className={`flex flex-col md:flex-row items-stretch gap-0 ${i % 2 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:flex-[1.5] flex items-center justify-center p-6 md:p-12">
                <img src={s.image} alt={s.title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="md:flex-[0.5] flex items-center p-6 md:p-12">
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
          </div>
        </div>
      ))}
    </section>
  );
}
