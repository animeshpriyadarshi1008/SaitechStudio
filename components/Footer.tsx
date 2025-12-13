'use client';
export default function Footer() {
  return (
    <footer className="text-white py-16" style={{backgroundColor: '#303030'}}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Saitech Studio</h3>
            <p className="text-gray-400 leading-relaxed">150 ORCHARD ROAD #08-01<br/>ORCHARD PLAZA<br/>SINGAPORE, 238841</p>
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

        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Saitech Studio. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
