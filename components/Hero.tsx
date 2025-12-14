'use client';
import { useState, useEffect, useRef } from 'react';
import { getHeroContent } from '@/lib/content';
import { Slide } from '@/types';
import styles from './Hero.module.css';
import TypingEffect from './TypingEffect';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');

  
  const heroContent = getHeroContent();
  const slides: Slide[] = heroContent.slides || [
    {
      id: 1,
      title: "STREAMLINING YOUR DIGITAL INFRASTRUCTURE",
      subtitle: "SAFE",
      description: "Ensuring Complete\nProtection for Your\nCritical Data",
      detailedDescription: "Our comprehensive security framework protects your digital assets with military-grade encryption and continuous threat monitoring.",
      image: "/banner/server.jpg",
      subtitles: ["Fortified Network Security", "Advanced Threat Protection", "Multi-Layer Defense Systems"],
      themeColor: "#3B82F6"
    },
    {
      id: 2,
      title: "Protecting Possibilities, Empowering Innovation",
      subtitle: "SECURE",
      description: "Confidence in\nEvery Connection",
      detailedDescription: "Experience unparalleled security with zero-trust architecture and end-to-end encryption protocols.",
      image: "/banner/chip.jpg",
      icon: "🔒",
      subtitles: ["Zero-Trust Architecture", "End-to-End Encryption", "Cybersecurity Excellence"],
      themeColor: "#EF4444"
    },
    {
      id: 3,
      title: "Reliable Pathways to Your Digital Success",
      subtitle: "RELIABLE",
      description: "Seamless Connections\nfor Business Growth",
      detailedDescription: "Build your business on unwavering reliability with 99.9% uptime guarantee and redundant infrastructure systems.",
      image: "/banner/telecom.jpg",
      subtitles: ["99.9% Uptime Guarantee", "Redundant Infrastructure", "High-Availability Networks"],
      themeColor: "#10B981"
    },
    {
      id: 4,
      title: "Powering a Greener Digital Future",
      subtitle: "SUSTAINABLE",
      description: "Efficiency, Innovation,\nand Environmental Care",
      detailedDescription: "Lead digital transformation while minimizing environmental impact through sustainable technology solutions.",
      image: "/banner/chart.jpg",
      icon: "🌱",
      subtitles: ["Energy-Efficient Solutions", "Carbon-Neutral Operations", "Green Technology Adoption"],
      themeColor: "#8B5CF6"
    }
  ];

  useEffect(() => {
    if (!isAutoplay) return;
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 6000);
    
    return () => clearInterval(slideInterval);
  }, [isAutoplay, slides.length]);

  useEffect(() => {
    if (!isAutoplay) {
      setProgress(0);
      return;
    }
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + (100 / 60));
    }, 100);
    
    return () => clearInterval(progressInterval);
  }, [isAutoplay, currentSlide]);

  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (!currentSlideData?.subtitles?.length) return;

    const interval = setInterval(() => {
      setCurrentSubtitleIndex((prev) => (prev + 1) % currentSlideData.subtitles!.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  useEffect(() => {
    // Only auto-scroll on mobile devices
    if (window.innerWidth >= 768) return;
    
    const scrollContainer = document.querySelector('.thumbnail-scroll');
    if (scrollContainer) {
      if (currentSlide === 0) {
        // When going back to first slide, scroll to the beginning
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const activeButton = scrollContainer.children[currentSlide] as HTMLElement;
        if (activeButton) {
          activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    }
  }, [currentSlide]);



  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div className={styles.slideshow}>
      <div className={styles.slideContainer} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={styles.slideItem}
          >
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="w-full h-full object-cover md:object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className={styles.slideContent}>
        <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className={`${styles.slideTitle} text-white font-bold mb-4 sm:mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`}>
            <TypingEffect
              text={slides[currentSlide].title}
              speed={50}
              style={{
                textShadow: '0 0 20px #00D4FF60, 2px 2px 4px rgba(0,0,0,0.8)',
                color: '#00D4FF'
              }}
            />
          </h1>
          {slides[currentSlide].subtitles && slides[currentSlide].subtitles!.length > 0 && (
            <div className="mb-4">
              <span 
                className="inline-block backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-lg transition-all duration-500"
                style={{
                  backgroundColor: slides[currentSlide].themeColor ? `${slides[currentSlide].themeColor}40` : 'rgba(255,255,255,0.2)',
                  border: slides[currentSlide].themeColor ? `2px solid ${slides[currentSlide].themeColor}80` : '2px solid rgba(255,255,255,0.3)'
                }}
              >
                {slides[currentSlide].subtitles![currentSubtitleIndex]}
              </span>
            </div>
          )}
          <p className={`${styles.slideDescription} text-white/90 mb-4 leading-relaxed mx-auto text-base sm:text-lg md:text-xl max-w-3xl`}>
            {slides[currentSlide].description}
          </p>
        </div>
      </div>





      {/* Enhanced Autoplay Control */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleAutoplay}
          className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg border border-white/20 hover:scale-110 group"
          aria-label={isAutoplay ? 'Pause autoplay' : 'Play autoplay'}
        >
          <div className="relative">
            {isAutoplay ? (
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                <path d="M4 2v12h3V2H4zm5 0v12h3V2H9z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                <path d="M11.58 7.03L5.302 2.165C5.165 2.057 5.016 2 4.857 2 4.384 2 4 2.504 4 3.125v9.75c0 .62.384 1.125.857 1.125.16 0 .308-.057.436-.156L11.58 8.97c.25-.198.42-.558.42-.97 0-.412-.17-.773-.42-.97z" />
              </svg>
            )}
          </div>
        </button>
      </div>

    </div>
  );
}