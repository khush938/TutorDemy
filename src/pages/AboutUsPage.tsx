import React from 'react';
// import TeamDescription from '../components/TeamDescription';
// import WelcomeVideo from '../components/WelcomeVideo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const burgundy = '#5a1b16';
const beige = '#b3836f';
const ivory = '#F8F5F0';

const AboutUsPage: React.FC = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById('team-video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const gradient = document.getElementById('moving-gradient');
    if (gradient) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      gradient.style.background = `
        radial-gradient(circle at ${x}% ${y}%, ${burgundy} 0%, transparent 50%), 
        radial-gradient(circle at ${100 - x}% ${100 - y}%, ${burgundy}40 0%, transparent 50%),
        radial-gradient(circle at ${50 + (x - 50) * 0.5}% ${50 + (y - 50) * 0.5}%, ${burgundy}20 0%, transparent 70%)
      `;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1a1a' }}>
      <Header currentPage="about" />

      <main className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
          onMouseMove={handleMouseMove}
        >
          {/* Moving Gradient Background */}
          <div 
            className="fixed inset-0 w-full h-screen"
            style={{ zIndex: 1 }}
          >
            <div 
              id="moving-gradient"
              className="absolute inset-0 w-full h-full"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${burgundy} 0%, transparent 40%), 
                           radial-gradient(circle at 50% 50%, ${burgundy}40 0%, transparent 40%),
                           radial-gradient(circle at 50% 50%, ${burgundy}20 0%, transparent 60%)`,
                filter: 'blur(30px)',
                backgroundSize: '110% 110%',
                backgroundPosition: 'center'
              }}
            />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-tight" style={{ color: ivory }}>
              About Us
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
              We play to win. Period. TutorDemy is built by passionate educators and students 
              who understand the challenges of academic life.
            </p>
            
            {/* Explore Button */}
            <div className="flex flex-col items-center space-y-4">
              <button 
                onClick={scrollToVideo}
                className="w-16 h-16 rounded-full border-2 border-[#5a1b16] flex items-center justify-center hover:bg-[#5a1b16] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <span className="text-sm text-gray-200">Explore Now</span>
            </div>
          </div>
        </section>

        {/* Team Video Section */}
        <section id="team-video-section" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-16">
              <div className="w-full h-full relative">
                {/* Video Player */}
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster=""
                >
                  <source src="/AboutUs.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Video Overlay for better UX */}
                <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div>
              </div>
            </div>
            {/* Mission Statement */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                We play to win. Period. TutorDemy is built by former students turned educators, 
                developers, and academic professionals. We run our tutoring like we studied—focused, 
                relentless, and always pushing the edge of what's possible in education.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5a1b16] text-center mb-16">
              Meet the Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Team Member Cards */}
              {[
                { name: "Sarah Johnson", title: "Co-Founder & Lead Educator", emoji: "👩‍🏫" },
                { name: "Michael Chen", title: "Co-Founder & Tech Lead", emoji: "👨‍💻" },
                { name: "Emma Rodriguez", title: "Head of Curriculum", emoji: "📚" },
                { name: "David Thompson", title: "Student Success Manager", emoji: "🎯" },
              ].map((member, index) => (
                <div key={index} className="text-center space-y-4">
                  <div 
                    className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${beige}30` }}
                  >
                    {member.emoji}
                  </div>
                  <div>
                    <h3 className="text-[#5a1b16] font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-300 text-sm">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#5a1b16] text-center mb-16">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "How long does a tutoring session take?",
                  answer: "Session duration varies by subject and student needs. Typically 1-2 hours, but we're flexible to accommodate your schedule."
                },
                {
                  question: "Do you only work with high school students?",
                  answer: "No, we work with students of all ages - from primary school through university level."
                },
                {
                  question: "Do you offer post-session support?",
                  answer: "Yes, we provide ongoing support including homework help, exam preparation, and progress tracking."
                },
                {
                  question: "What subjects do you specialize in?",
                  answer: "We cover all major subjects including Mathematics, Sciences, English, History, and exam board specific content."
                },
                {
                  question: "Can I get help with just one specific topic?",
                  answer: "Absolutely! We offer targeted sessions for specific topics, exam preparation, or homework help."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="border border-[#e2d6c2] bg-white bg-opacity-60 rounded-lg p-6 hover:border-[#b3836f] transition-colors"
                >
                  <h3 className="text-[#5a1b16] font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-7xl font-bold text-[#5a1b16] mb-8">
              Learn. Grow. Succeed.
            </h2>
            <p className="text-xl text-gray-200 mb-12">
              Join thousands of students who have transformed their academic journey with TutorDemy
            </p>
            <button 
              className="px-12 py-6 rounded-full text-white font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              style={{ backgroundColor: beige }}
            >
              Start Your Journey
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage; 