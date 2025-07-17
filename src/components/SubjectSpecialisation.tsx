import React from 'react';

const burgundy = '#5a1b16';
// const beige = '#b3836f';

const SubjectSpecialisation: React.FC = () => {
  const subjects = [
    {
      category: 'Mathematics',
      subjects: [
        { name: 'Core Pure', icon: '📐', description: 'GCSE & A-Level Core Pure Mathematics' },
        { name: 'Mechanics', icon: '⚙️', description: 'GCSE & A-Level Mechanics and applied mathematics' },
        { name: 'Statistics', icon: '📊', description: 'GCSE & A-Level Statistics and data analysis' }
      ]
    },
    {
      category: 'Sciences',
      subjects: [
        { name: 'Physics', icon: '⚡', description: 'GCSE & A-Level Physics: Understanding the laws of nature' },
        { name: 'Chemistry', icon: '🧪', description: 'GCSE & A-Level Chemistry: Exploring chemical reactions' },
        { name: 'Biology', icon: '🧬', description: 'GCSE & A-Level Biology: Study of living organisms' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">GCSE & A-Level Specialisation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tutors specialized in GCSE and A-Level Mathematics and Science to ensure your exam success
          </p>
        </div>
        
        <div className="space-y-16">
          {subjects.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold text-center" style={{ color: burgundy }}>{category.category}</h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.subjects.map((subject, subjectIndex) => (
                    <div key={subjectIndex} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full max-w-sm">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{subject.icon}</div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{subject.name}</h4>
                        <p className="text-sm text-gray-600">{subject.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectSpecialisation; 