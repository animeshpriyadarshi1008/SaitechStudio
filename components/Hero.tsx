'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const texts = [
    ' source and supply networks ',
    ' design and deploy networks ',
    ' manage and maintain networks'
  ];
  const images = ['/banner/chart.jpg', '/banner/chip.jpg', '/banner/server.jpg', '/banner/sever2.jpg', '/banner/telecom.jpg', '/banner/wire.jpg'];

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentText.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, textIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {images.map((img, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{opacity: currentImage === i ? 1 : 0}}>
          <img src={img} alt="Banner" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center" style={{background: 'rgba(0,0,0,0.4)'}}>
        <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-white font-bold mb-4 sm:mb-6 leading-tight" style={{fontSize: 'clamp(24px, 5vw, 60px)'}}>
            We deliver customer success every day we <span style={{color: 'var(--accent)'}}>{text}</span>
          </h1>
          <p className="text-white mb-6 sm:mb-8 leading-relaxed mx-auto" style={{fontSize: 'clamp(14px, 2vw, 20px)', maxWidth: '800px'}}>
            We passionately adopt new technology to build sustainable networks whilst reducing fixed network cost and increasing profitability.
          </p>
          <a href="#services" className="inline-block text-white px-6 sm:px-8 py-2.5 sm:py-3 font-medium transition-colors" style={{backgroundColor: 'var(--accent)', borderRadius: '4px', color: '#0A2540'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}>
            Quick Intro
          </a>
        </div>
      </div>
    </div>
  );
}
