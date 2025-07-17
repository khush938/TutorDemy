import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ExamBoardSection from '../components/ExamBoardSection';
import SubjectSpecialisation from '../components/SubjectSpecialisation';
import TestimonialsSection from '../components/TestimonialsSection';
import JourneySection from '../components/JourneySection';
import Header from '../components/Header';
import Footer from '../components/Footer';



const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header currentPage="home" />

      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="exam-boards">
          <ExamBoardSection />
        </section>
        
        <section id="subjects">
          <SubjectSpecialisation />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="journey">
          <JourneySection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage; 