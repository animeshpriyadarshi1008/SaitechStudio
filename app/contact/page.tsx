'use client';
import { useState } from 'react';
import PageLoader from '@/components/PageLoader';
import HeroSection from '@/components/sections/HeroSection';
import { getPageContent } from '@/lib/content';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [loading, setLoading] = useState(false);
  const contactContent = getPageContent('contact') as any;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert(contactContent.form.successMessage);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        alert(contactContent.form.errorMessage);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-16 sm:pt-20">
      <PageLoader />
      <HeroSection 
        title={contactContent.hero.title}
        description={contactContent.hero.description}
        backgroundImage={contactContent.hero.backgroundImage}
        height="60vh"
      />
      
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">{contactContent.form.title}</h2>
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
                <button type="submit" disabled={loading} className="w-full text-white py-2.5 sm:py-3 rounded-lg transition font-medium text-sm sm:text-base disabled:opacity-50" style={{backgroundColor: 'var(--accent)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">{contactContent.info.title}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Address</h3>
                  <a href="https://maps.google.com/?q=150+ORCHARD+ROAD+08-01+ORCHARD+PLAZA+SINGAPORE+238841" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 leading-relaxed hover:text-cyan-600 transition-colors inline-block">
                    150 ORCHARD ROAD #08-01<br/>ORCHARD PLAZA, SINGAPORE, 238841
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Custom Support & Sale</h3>
                  <a href="tel:+6586478952" className="text-base text-gray-600 hover:text-cyan-600 transition-colors block">+65 8647 8952</a>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">Working Time</h3>
                  <p className="text-base text-gray-600 leading-relaxed">Mon-Sat: 9 AM – 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
