import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript', percentage: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', percentage: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'React', percentage: 88, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', percentage: 82, color: 'from-green-400 to-green-600' },
    { name: 'Python', percentage: 75, color: 'from-indigo-400 to-indigo-600' },
    { name: 'HTML/CSS', percentage: 95, color: 'from-orange-400 to-orange-600' },
    { name: 'MongoDB', percentage: 78, color: 'from-emerald-400 to-emerald-600' },
    { name: 'PostgreSQL', percentage: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Docker', percentage: 70, color: 'from-sky-400 to-sky-600' },
    { name: 'AWS', percentage: 65, color: 'from-amber-400 to-amber-600' },
    { name: 'Git', percentage: 85, color: 'from-red-400 to-red-600' },
    { name: 'Figma', percentage: 80, color: 'from-pink-400 to-pink-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My expertise across various technologies and programming languages
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Header */}
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    {/* Progress Bar */}
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                    </div>
                  </div>

                  {/* Percentage Label Inside Bar */}
                  <div
                    className="absolute right-2 top-0 h-full flex items-center"
                    style={{
                      opacity: isVisible && skill.percentage > 15 ? 1 : 0,
                      transition: 'opacity 0.5s ease-out',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  >
                    <span className="text-xs font-bold text-white drop-shadow-sm">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Skill Level Description */}
                <div className="mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    skill.percentage >= 85 
                      ? 'bg-green-100 text-green-700' 
                      : skill.percentage >= 70 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {skill.percentage >= 85 ? 'Expert' : skill.percentage >= 70 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Always Learning</h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
                <span className="font-semibold text-purple-600"> AI/ML integration</span>, 
                <span className="font-semibold text-purple-600"> Web3 technologies</span>, and 
                <span className="font-semibold text-purple-600"> advanced cloud architectures</span> 
                to stay at the forefront of modern development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;