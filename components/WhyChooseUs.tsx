'use client';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Team",
      description: "Certified network engineers with 10+ years experience in enterprise solutions",
      icon: "👥"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for your critical network infrastructure",
      icon: "🛡️"
    },
    {
      title: "Proven Solutions",
      description: "Successfully deployed 500+ network projects across Singapore and APAC region",
      icon: "✅"
    },
    {
      title: "Latest Technology",
      description: "Cutting-edge networking equipment from Cisco, Juniper, and other leading vendors",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Saitech Studio?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver enterprise-grade networking solutions that power Singapore's digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}