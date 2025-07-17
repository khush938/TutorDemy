import React from 'react';

const burgundy = '#5a1b16';
// const beige = '#b3836f';

const JourneySection: React.FC = () => {
  const journeySteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'We begin with a comprehensive assessment of your current knowledge, learning style, and goals. Our expert tutors create a personalized learning plan tailored to your specific needs.',
      icon: '📋',
      features: ['Initial Assessment', 'Learning Style Analysis', 'Goal Setting', 'Personalized Plan']
    },
    {
      step: '02',
      title: 'Expert Tutoring',
      description: 'Work with qualified tutors who specialize in your subject and exam board. Enjoy flexible scheduling with sessions that fit your lifestyle and learning pace.',
      icon: '👨‍🏫',
      features: ['Qualified Tutors', 'Flexible Scheduling', 'Interactive Sessions', 'Real-time Feedback']
    },
    {
      step: '03',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with detailed progress reports, practice tests, and regular assessments. See your improvement in real-time with our advanced analytics.',
      icon: '📊',
      features: ['Progress Reports', 'Practice Tests', 'Performance Analytics', 'Regular Assessments']
    },
    {
      step: '04',
      title: 'Exam Preparation',
      description: 'Build confidence for your exams with targeted revision sessions, past paper practice, and exam technique coaching. Our tutors ensure you\'re fully prepared for success.',
      icon: '🎯',
      features: ['Exam Techniques', 'Past Papers', 'Revision Strategies', 'Confidence Building']
    },
    {
      step: '05',
      title: 'Achievement & Beyond',
      description: 'Celebrate your success and continue your learning journey. Many students choose to advance to higher levels or explore new subjects with TutorDemy.',
      icon: '🏆',
      features: ['Goal Achievement', 'Advanced Learning', 'New Subjects', 'Lifelong Learning']
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Your Journey at TutorDemy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to learning that ensures your success from start to finish
          </p>
        </div>
        
        <div className="space-y-16">
          {journeySteps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{step.icon}</div>
                  <div>
                    <span className="text-sm font-bold text-gray-500">{step.step}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: burgundy }}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 rounded-full flex items-center justify-center text-8xl bg-gray-50 border-4 border-gray-100">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            className="px-8 py-4 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: burgundy }}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection; 