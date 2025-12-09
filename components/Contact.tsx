'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px var(--accent)'}
                onBlur={(e) => e.currentTarget.style.boxShadow = 'none'}
              />
            </div>
            <button type="submit" className="w-full py-3 rounded-lg transition font-medium" style={{backgroundColor: 'var(--accent)', color: '#0A2540'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
