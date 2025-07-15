import React from 'react';

const burgundy = '#5a1b16';
const beige = '#b3836f';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">About TutorDemy</h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                TutorDemy was founded with a simple mission: to make quality education accessible to everyone, 
                everywhere. We believe that learning should be personalized, engaging, and effective.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform connects students with expert tutors who are passionate about teaching and 
                committed to helping learners achieve their goals. Whether you're struggling with a specific 
                subject, preparing for exams, or want to learn a new skill, we're here to support your journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="text-center">
                <span className="block text-3xl font-bold" style={{ color: burgundy }}>5+</span>
                <span className="text-sm text-gray-500 font-medium">Years of Excellence</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold" style={{ color: burgundy }}>50+</span>
                <span className="text-sm text-gray-500 font-medium">Subjects Covered</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold" style={{ color: burgundy }}>100+</span>
                <span className="text-sm text-gray-500 font-medium">Countries Served</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎯</span>
                  <span className="font-medium text-gray-700">Excellence in Education</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🤝</span>
                  <span className="font-medium text-gray-700">Student Success</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">💡</span>
                  <span className="font-medium text-gray-700">Innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌍</span>
                  <span className="font-medium text-gray-700">Global Accessibility</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl p-8 h-96 flex items-center justify-center" style={{ backgroundColor: burgundy }}>
              <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm">
                <div className="italic text-gray-600 mb-6 leading-relaxed">
                  "TutorDemy helped me improve my grades significantly. The tutors are amazing!"
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">👤</div>
                  <div>
                    <div className="font-semibold text-gray-800">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 