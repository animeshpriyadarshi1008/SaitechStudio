'use client';
export default function Footer() {
  return (
    <footer className="text-white py-16" style={{backgroundColor: '#303030'}}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Saitech Studio</h3>
            <p className="text-gray-400 leading-relaxed">Office Gold, Building 3,<br/>Chiswick Business Park,<br/>London, United Kingdom</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="transition" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Home</a></li>
              <li><a href="#services" className="transition" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Services</a></li>
              <li><a href="#about" className="transition" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</a></li>
              <li><a href="#contact" className="transition" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Cloud Connectivity</li>
              <li>Networking Solutions</li>
              <li>Colocation</li>
              <li>Hardware Sale</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for our news and updates</p>
            <div className="flex">
              <input type="email" placeholder="Your E-Mail" className="flex-1 px-4 py-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none" onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'} onBlur={(e) => e.currentTarget.style.borderColor = '#374151'} />
              <button className="px-6 py-2 rounded-r transition" style={{backgroundColor: 'var(--accent)', color: '#0A2540'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>→</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Saitech Studio. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
