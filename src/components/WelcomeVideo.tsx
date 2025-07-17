import React from 'react';

const burgundy = '#5a1b16';
const beige = '#b3836f';

const WelcomeVideo: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: burgundy }}>
            Welcome to TutorDemy
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Get to know our team and discover how we're revolutionizing online tutoring. 
            Watch our welcome video to learn more about our mission, values, and commitment to student success.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative">
            {/* Video Placeholder */}
            <div 
              className="w-full aspect-video rounded-2xl shadow-2xl overflow-hidden"
              style={{ backgroundColor: beige + '20' }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  {/* Play Button */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300" style={{ backgroundColor: beige }}>
                    <svg 
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-semibold" style={{ color: burgundy }}>
                      Welcome Video
                    </h3>
                    <p className="text-gray-600">
                      Click to watch our team introduction
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Controls Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between bg-black bg-opacity-50 rounded-lg p-3 text-white">
                <div className="flex items-center space-x-3">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="text-sm">0:00 / 0:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="mt-8 text-center space-y-4">
            <h3 className="text-xl lg:text-2xl font-semibold" style={{ color: burgundy }}>
              What You'll Learn
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: beige }}>
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h4 className="font-semibold" style={{ color: burgundy }}>Our Mission</h4>
                <p className="text-sm text-gray-600">Discover our commitment to student success</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: beige }}>
                  <span className="text-2xl text-white">👥</span>
                </div>
                <h4 className="font-semibold" style={{ color: burgundy }}>Meet the Team</h4>
                <p className="text-sm text-gray-600">Get to know our passionate educators</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: beige }}>
                  <span className="text-2xl text-white">🚀</span>
                </div>
                <h4 className="font-semibold" style={{ color: burgundy }}>Our Approach</h4>
                <p className="text-sm text-gray-600">Learn about our unique teaching methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeVideo; 