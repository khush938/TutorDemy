import React from 'react';

// const burgundy = '#5a1b16';
// const beige = '#b3836f';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '👨‍🏫',
      title: 'Personalized Learning',
      description: 'Get one-on-one attention tailored to your learning style and pace. Our adaptive system ensures you\'re always challenged but never overwhelmed.',
      image: '📚'
    },
    {
      icon: '🎓',
      title: 'Expert Teachers',
      description: 'Learn from certified educators with proven track records. Our rigorous selection process ensures you get the best guidance for your academic journey.',
      image: '👩‍🏫'
    },
    {
      icon: '💻',
      title: 'Flexible Learning',
      description: 'Study when and where it suits you best. Our platform adapts to your schedule, making it easy to balance academics with other activities.',
      image: '🖥️'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Why Choose TutorDemy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of technology and expert teaching to unlock your full academic potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-end">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                index === 1 
                  ? 'p-10 h-96 -mt-8' 
                  : 'p-8 h-88 -mt-16'
              }`}
            >
              <div className="text-center mb-6">
                <div className={`mb-4 ${index === 1 ? 'text-7xl' : 'text-7xl'}`}>{feature.image}</div>
              </div>
              <h3 className={`font-semibold text-gray-800 mb-4 text-center text-2xl`}>{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center text-xl">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 