'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-16" style={{backgroundColor: '#303030'}}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Saitech Studio</h3>
            <p className="text-gray-400 leading-relaxed mb-4">150 ORCHARD ROAD #08-01<br/>ORCHARD PLAZA<br/>SINGAPORE, 238841</p>
            <Link href="/contact#regional-offices" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
              Regional Offices →
            </Link>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="transition hover:text-cyan-400">Home</Link></li>
              <li><Link href="/services" className="transition hover:text-cyan-400">Services</Link></li>
              <li><Link href="/partners" className="transition hover:text-cyan-400">Partners</Link></li>
              <li><Link href="/about" className="transition hover:text-cyan-400">About</Link></li>
              <li><Link href="/contact" className="transition hover:text-cyan-400">Contact</Link></li>
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
