import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const burgundy = '#5a1b16';
const beige = '#b3836f';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: burgundy }}>
                TutorDemy
              </h1>
            </div>
            <ul className="hidden md:flex items-center space-x-24">
              <li><a href="#home" className="text-white hover:text-gray-300 font-semibold transition-colors text-xl inter">Home</a></li>
              <li><a href="#features" className="text-white hover:text-gray-300 font-semibold transition-colors text-xl inter">About Us</a></li>
              <li><a href="#about" className="text-white hover:text-gray-300 font-semibold transition-colors text-xl inter">Services</a></li>
              <li><a href="#contact" className="text-white hover:text-gray-300 font-semibold transition-colors text-xl inter">Contact Us</a></li>
              <li><button className="px-6 py-2 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300" style={{ backgroundColor: beige }}>Sign Up</button></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <footer className="text-white py-16 px-4" style={{ backgroundColor: burgundy }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                TutorDemy
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Empowering students worldwide with quality education through expert tutoring.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" style={{ backgroundColor: beige }}>📘</a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" style={{ backgroundColor: beige }}>🐦</a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" style={{ backgroundColor: beige }}>📷</a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" style={{ backgroundColor: beige }}>💼</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="text-gray-200 hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="text-gray-200 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Online Tutoring</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Test Preparation</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Homework Help</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Skill Development</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-200 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-600">
            <p className="text-gray-300">&copy; 2024 TutorDemy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 