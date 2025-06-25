import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart',
      avatar: 'SJ',
      rating: 5,
      text: 'Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.'
    },
    {
      name: 'Michael Chen',
      position: 'Product Manager, InnovCorp',
      avatar: 'MC',
      rating: 5,
      text: 'Working with Alex was a game-changer for our product. His UI/UX skills combined with solid development knowledge resulted in a beautiful and functional application that our users love.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, DesignStudio',
      avatar: 'ER',
      rating: 5,
      text: 'Alex is a rare find - a developer who truly understands design. He brought our vision to life with pixel-perfect precision and added thoughtful improvements that enhanced the user experience.'
    },
    {
      name: 'David Kim',
      position: 'CTO, DataFlow',
      avatar: 'DK',
      rating: 5,
      text: 'The quality of Alex\'s code is outstanding. Clean, well-documented, and scalable. He also provided excellent technical guidance throughout the project and was always available for questions.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take my word for it - here's what others have to say
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].position}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6 text-purple-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6 text-purple-600" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-purple-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;