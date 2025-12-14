'use client';
import { PARTNERS } from '@/constants/data';

export default function About() {
  
  return (
    <section id="about" className="py-12 sm:py-20" style={{backgroundColor: '#f7f7f7'}}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 text-gray-900">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {PARTNERS.map((p, i) => (
            <div key={i} className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 flex items-center justify-center min-h-[100px] sm:min-h-[120px] cursor-pointer" onClick={() => window.location.href = '/partners'}>
              <img src={p.logo} alt={p.name} className="max-w-full h-12 sm:h-14 md:h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
