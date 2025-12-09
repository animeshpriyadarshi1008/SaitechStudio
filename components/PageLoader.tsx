'use client';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSpinner(false), 1500);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${showSpinner ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{background: 'linear-gradient(135deg, #0A2540 0%, #00D4FF 100%)'}}>
      <div className="relative">
        <div className="w-24 h-24 border-4 border-t-transparent rounded-full animate-spin" style={{borderColor: 'var(--accent) transparent transparent transparent'}}></div>
        <div className="absolute top-2 left-2 w-20 h-20 border-4 border-b-transparent rounded-full animate-spin" style={{borderColor: 'transparent transparent #ffffff transparent', animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
        <div className="absolute top-4 left-4 w-16 h-16 border-4 border-l-transparent rounded-full animate-spin" style={{borderColor: 'transparent transparent transparent var(--accent)', animationDuration: '1.2s'}}></div>
      </div>
    </div>
  );
}
