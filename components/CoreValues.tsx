'use client';
import { Shield, Lock, Zap, Leaf } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safe',
      description: 'Comprehensive safety protocols and risk management ensure your operations run smoothly without interruption.',
      color: 'text-blue-600'
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Advanced security measures and encryption protect your data with enterprise-grade cybersecurity solutions.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Reliable',
      description: '99.9% uptime guarantee with redundant systems and 24/7 monitoring for consistent performance.',
      color: 'text-orange-600'
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-friendly practices and energy-efficient solutions that reduce environmental impact while maximizing efficiency.',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built on the foundation of trust, innovation, and excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${value.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-lg font-semibold text-gray-700">
            <span className="text-blue-600">Safe</span>
            <span className="text-green-600">Secure</span>
            <span className="text-orange-600">Reliable</span>
            <span className="text-emerald-600">Sustainable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;