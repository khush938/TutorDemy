import React from 'react';
import heroIllustration from '../assets/Hero/hero-illustration.svg';
import tutorDemyLogo from '../assets/tutorDemyLogo/TD_HighQuality_NameWhite.png';
// import heroBg from '../assets/Hero/hero-bg-2.svg';

// const burgundy = '#5a1b16';
const beige = '#b3836f';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Background */}
      <div 
        className="absolute bg-hero"
        style={{
          width: '100vw',
          height: '100vh',
        }}
      />


      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center w-full mx-auto w-full relative z-10 pt-12 lg:pt-0">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start px-4 lg:px-8 xl:px-12 pt-8 lg:pt-0 ml-[12.5vw]">
          <div>
            <img
              src={tutorDemyLogo}
              alt="TutorDemy Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72 h-auto"
              draggable={false}
            />
          </div>
          <p className="text-white text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-4 sm:mt-6 max-w-md lg:max-w-lg xl:max-w-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          </p>
          <button
            className="mt-4 sm:mt-6 lg:mt-8 px-6 sm:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 lg:py-4 xl:py-5 rounded-full text-white font-semibold text-sm sm:text-base lg:text-lg xl:text-xl shadow-md"
            style={{ backgroundColor: beige }}
          >
            Book Now
          </button>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-end w-full h-full mt-24 lg:mt-12 pr-12 lg:pr-8 xl:pr-12 mr-[2vw]">
          <img
            src={heroIllustration}
            alt="Hero Illustration"
            className="w-[280px] sm:w-[320px] md:w-[370px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] h-auto"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;