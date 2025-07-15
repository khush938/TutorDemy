import React from 'react';

const burgundy = '#5a1b16';
// const beige = '#b3836f';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Expert Tutors',
      description: 'Learn from qualified professionals with years of teaching experience in their respective fields.'
    },
    {
      icon: '⏰',
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule. Available 24/7 with tutors across different time zones.'
    },
    {
      icon: '💻',
      title: 'Online Learning',
      description: 'Connect with tutors from anywhere in the world through our advanced video conferencing platform.'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Monitor your learning progress with detailed analytics and personalized feedback reports.'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Quality education doesn\'t have to be expensive. Choose from various pricing plans to suit your budget.'
    },
    {
      icon: '🎯',
      title: 'Personalized Learning',
      description: 'Get customized learning plans tailored to your specific goals and learning style.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Why Choose TutorDemy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make us the leading platform for online tutoring
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            className="px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: burgundy }}
          >
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 