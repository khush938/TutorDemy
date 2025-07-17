import React from 'react';

const burgundy = '#5a1b16';
// const beige = '#b3836f';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'A-Level Student',
      subject: 'Mathematics',
      rating: 5,
      testimonial: 'TutorDemy helped me improve my grades from a C to an A* in just 6 months. My tutor was incredibly patient and explained complex concepts in a way that finally made sense to me.',
      avatar: '👩‍🎓'
    },
    {
      name: 'Michael Chen',
      role: 'GCSE Student',
      subject: 'Physics',
      rating: 5,
      testimonial: 'The online tutoring sessions were so convenient and effective. My physics tutor used real-world examples that made the subject come alive. Highly recommended!',
      avatar: '👨‍🎓'
    },
    {
      name: 'Emma Rodriguez',
      role: 'University Student',
      subject: 'Spanish',
      rating: 5,
      testimonial: 'Learning Spanish with a native speaker through TutorDemy was amazing. I went from basic phrases to conversational fluency in just one semester.',
      avatar: '👩‍🎓'
    },
    {
      name: 'David Thompson',
      role: 'Parent',
      subject: 'Multiple Subjects',
      rating: 5,
      testimonial: 'As a parent, I was worried about online tutoring, but TutorDemy exceeded my expectations. My daughter\'s confidence and grades have improved dramatically.',
      avatar: '👨‍👩‍👧‍👦'
    },
    {
      name: 'Lisa Park',
      role: 'Adult Learner',
      subject: 'Computer Science',
      rating: 5,
      testimonial: 'Returning to education as an adult was daunting, but my TutorDemy tutor made it so accessible. I\'m now confident in my programming skills.',
      avatar: '👩‍💻'
    },
    {
      name: 'James Wilson',
      role: 'IB Student',
      subject: 'Economics',
      rating: 5,
      testimonial: 'The personalized approach at TutorDemy is what sets it apart. My tutor tailored every session to my learning style and exam board requirements.',
      avatar: '👨‍🎓'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students who have transformed their learning journey with TutorDemy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.subject}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            className="px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: burgundy }}
          >
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 