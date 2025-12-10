'use client';
import { useState } from 'react';
import { getTestimonials } from '@/lib/content';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = getTestimonials();
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by leading companies across Singapore
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
              {Array.from({length: Math.ceil(testimonials.length / 3)}).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                        <div>
                          <div className="font-bold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-500">{testimonial.company}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-2xl text-gray-600">‹</span>
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
            <span className="text-2xl text-gray-600">›</span>
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({length: Math.ceil(testimonials.length / 3)}).map((_, index) => (
              <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-cyan-500' : 'bg-gray-300'
              }`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}