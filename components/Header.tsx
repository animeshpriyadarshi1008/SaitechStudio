'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50" style={{backgroundColor: 'rgba(0, 0, 0, 1)'}}>
      <nav className="container mx-auto px-6 py-0.5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/4_.png" alt="Saitech Studio" style={{height: '80px', width: '100%', objectFit: 'contain'}} />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white transition-all duration-300 font-bold hover:scale-110" style={{}} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Home</Link>
            <Link href="/services" className="text-white transition-all duration-300 font-bold hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Services</Link>
            <Link href="/partners" className="text-white transition-all duration-300 font-bold hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Partners</Link>
            <Link href="/about" className="text-white transition-all duration-300 font-bold hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>About</Link>
            <Link href="/contact" className="text-white transition-all duration-300 font-bold hover:scale-110" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Contact</Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 bg-black/90 p-4 rounded">
            <Link href="/" className="text-white transition-all duration-300 font-bold" onClick={() => setIsOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Home</Link>
            <Link href="/services" className="text-white transition-all duration-300 font-bold" onClick={() => setIsOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Services</Link>
            <Link href="/partners" className="text-white transition-all duration-300 font-bold" onClick={() => setIsOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Partners</Link>
            <Link href="/about" className="text-white transition-all duration-300 font-bold" onClick={() => setIsOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>About</Link>
            <Link href="/contact" className="text-white transition-all duration-300 font-bold" onClick={() => setIsOpen(false)} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
