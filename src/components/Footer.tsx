import React from 'react';
import { Link } from 'react-router-dom';
import tutorDemyLogo from '../assets/tutorDemyLogo/TD_HighQuality_NameWhite.png';

const burgundy = '#5a1b16';
const beige = '#b3836f';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-16 px-4" style={{ backgroundColor: burgundy }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div>
              <img
                src={tutorDemyLogo}
                alt="TutorDemy Logo"
                className="h-8 w-auto"
                draggable={false}
              />
            </div>
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
              <li><Link to="/about" className="text-gray-200 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#exam-boards" className="text-gray-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#subjects" className="text-gray-200 hover:text-white transition-colors">Contact Us</a></li>
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
  );
};

export default Footer; 