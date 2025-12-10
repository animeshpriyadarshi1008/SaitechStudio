'use client';
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fadeInUp' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!mounted) return 'opacity-100';
    
    const baseClass = 'transition-all duration-1000 ease-out delay-200';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'fadeInLeft':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'fadeInRight':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'fadeIn':
          return `${baseClass} opacity-0`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`} suppressHydrationWarning>
      {children}
    </div>
  );
}