'use client';
import { useState } from 'react';
import PageLoader from '@/components/PageLoader';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <main className="pt-16 sm:pt-20">
      <PageLoader />
      <section className="bg-cover bg-center bg-no-repeat relative flex items-center" style={{backgroundImage: 'url(/office.jpg)', height: '60vh'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-5xl relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-6 text-white">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white">Get in touch with our team - We're here to help you build better networks</p>
        </div>
      </section>
      
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-700 mb-2 font-medium">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none text-sm sm:text-base"
                    onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
                  />
                </div>
                <button type="submit" className="w-full text-white py-2.5 sm:py-3 rounded-lg transition font-medium text-sm sm:text-base" style={{backgroundColor: 'var(--accent)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Address</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">123 Business Street<br/>Tech City, TC 12345</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Email</h3>
                  <p className="text-sm sm:text-base text-gray-600">info@saitechstudio.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Phone</h3>
                  <p className="text-sm sm:text-base text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900">Business Hours</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
