import React from 'react';
import { Link } from 'react-router-dom';
import tutorDemyLogo from '../assets/tutorDemyLogo/TD_HighQuality_NameWhite.png';

// const burgundy = '#5a1b16';
const beige = '#b3836f';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <img
              src={tutorDemyLogo}
              alt="TutorDemy Logo"
              className="h-8 w-auto"
              draggable={false}
            />
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className={`font-semibold transition-colors text-xl inter ${
                  currentPage === 'home' 
                    ? 'text-white' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-semibold transition-colors text-xl inter ${
                  currentPage === 'about' 
                    ? 'text-white' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <a 
                href="#exam-boards" 
                className="text-white hover:text-gray-300 font-semibold transition-colors text-xl inter"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#subjects" 
                className="text-white hover:text-gray-300 font-semibold transition-colors text-xl inter"
              >
                Contact Us
              </a>
            </li>
            <li>
              <button 
                className="px-6 py-2 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300" 
                style={{ backgroundColor: beige }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 