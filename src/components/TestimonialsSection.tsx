import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: '01',
      quote: 'Homeschooling with you gave my children their childhood back.',
      color: '#ef4444' // red
    },
    {
      id: '02',
      quote: 'Three hours with a tutor is like a week in school - I learnt so much, so quickly.',
      color: '#f97316' // orange
    },
    {
      id: '03',
      quote: '96% of our pupils improve overall exam performance after time spent with our tutors.',
      color: '#8b5cf6' // purple
    },
    {
      id: '04',
      quote: 'Homeschooling has made my child calmer, more engaged, and happier. I cannot thank you enough.',
      color: '#475569' // slate
    },
    {
      id: '05',
      quote: 'I don\'t know what kind of magic you do, but it worked! Thank you!',
      color: '#ef4444' // red
    },
    {
      id: '06',
      quote: 'Not only are we delighted with our son\'s results, but we are hugely impressed with how much he has grown, how much he has learned about himself.',
      color: '#f97316' // orange
    },
    {
      id: '07',
      quote: 'From start to finish, everyone has been outstanding and we are extremely grateful for your expertise and really positive approach.',
      color: '#8b5cf6' // purple
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get the 4 cards to display (current index + next 3)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % testimonials.length;
      cards.push(testimonials[index]);
    }
    return cards;
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 overflow-hidden" style={{ backgroundColor: '#f0f9f0' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Testimonials</h2>
        </div>
        
        <div className="relative">
          <div 
            ref={cardsRef}
            className={`flex gap-0 mb-12 transition-transform duration-1000 ease-out ${
              isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ width: '85vw', height: '70vh' }}
          >
            {getVisibleCards().map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${currentIndex}-${index}`}
                className="p-8 rounded-2xl text-white relative flex flex-col justify-center items-center text-center flex-1"
                style={{ backgroundColor: testimonial.color }}
              >
                <div className="flex justify-between items-start mb-4 w-full">
                  <span className="text-2xl font-bold">{testimonial.id}</span>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <p className="text-2xl leading-relaxed flex-grow flex items-center justify-center font-normal" style={{ transform: 'translateY(-10%)' }}>
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex items-center justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-gray-800 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-gray-800">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div className="w-16 h-1 bg-gray-300 rounded-full">
              <div 
                className="h-1 bg-gray-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 