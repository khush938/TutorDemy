import React from 'react';
import aqaLogo from '../assets/ExamBoards/AQA-logo.svg';
import edexcelLogo from '../assets/ExamBoards/Edexel.svg';
import ocrLogo from '../assets/ExamBoards/OCR.png';
import wjecLogo from '../assets/ExamBoards/wjec.svg';

// const burgundy = '#5a1b16';
// const beige = '#b3836f';

const ExamBoardSection: React.FC = () => {
  const examBoards = [
    {
      name: 'AQA',
      description: 'Comprehensive support for AQA specifications across all subjects.',
      logo: aqaLogo
    },
    {
      name: 'Edexcel',
      description: 'Expert guidance for Edexcel qualifications and assessments.',
      logo: edexcelLogo
    },
    {
      name: 'OCR',
      description: 'Specialized tutoring for OCR curriculum and exam preparation.',
      logo: ocrLogo
    },
    {
      name: 'WJEC',
      description: 'Welsh Joint Education Committee support for Welsh curriculum.',
      logo: wjecLogo
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Exam Board Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert tutoring aligned with major UK exam boards to ensure your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {examBoards.map((board, index) => (
            <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">
              <div className="text-center flex items-center justify-center h-full">
                <div className="group-hover:scale-110 transition-transform duration-300 w-full h-full flex items-center justify-center">
                  <img 
                    src={board.logo} 
                    alt={`${board.name} logo`}
                    className="min-w-[60%] min-h-[60%] max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamBoardSection; 