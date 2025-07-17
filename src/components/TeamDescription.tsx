import React from 'react';
import tutorDemyLogo from '../assets/tutorDemyLogo/TD_HighQuality_NameRed.png';

const burgundy = '#5a1b16';
const beige = '#b3836f';

const TeamDescription: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Team Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <img
                src={tutorDemyLogo}
                alt="TutorDemy Logo"
                className="w-48 h-auto mb-6"
                draggable={false}
              />
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: burgundy }}>
                Meet Our Team
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                We are a dedicated team of passionate educators and students who understand the challenges 
                of academic life. Our journey began when we realized that every student deserves access 
                to quality education and personalized support.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: burgundy }}>
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower students worldwide by providing expert tutoring services that not only improve 
                academic performance but also build confidence and foster a love for learning. We believe 
                that every student has unique potential waiting to be unlocked.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: burgundy }}>
                Why We're Different
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-lg" style={{ color: beige }}>✓</span>
                  <span>Student-led approach with tutors who understand current academic challenges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg" style={{ color: beige }}>✓</span>
                  <span>Personalized learning plans tailored to individual needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg" style={{ color: beige }}>✓</span>
                  <span>Comprehensive support across all major exam boards</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-lg" style={{ color: beige }}>✓</span>
                  <span>Flexible scheduling to fit busy student lifestyles</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6">
              <button
                className="px-8 py-3 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: beige }}
              >
                Learn More About Our Team
              </button>
            </div>
          </div>
          
          {/* Right: Team Image/Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div 
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center"
                style={{ backgroundColor: beige + '20' }}
              >
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: beige }}>
                    <span className="text-4xl lg:text-5xl text-white">👥</span>
                  </div>
                  <h4 className="text-xl font-semibold" style={{ color: burgundy }}>
                    Our Dedicated Team
                  </h4>
                  <p className="text-gray-600 max-w-xs">
                    Passionate educators and students working together to make learning accessible and enjoyable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDescription; 