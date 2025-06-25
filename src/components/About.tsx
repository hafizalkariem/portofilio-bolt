import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Development', desc: 'React, TypeScript, Node.js, Python' },
    { icon: Palette, title: 'Design', desc: 'Figma, Adobe Suite, UI/UX Design' },
    { icon: Zap, title: 'Performance', desc: 'Optimization, Clean Code, Best Practices' },
    { icon: Users, title: 'Collaboration', desc: 'Team Leadership, Agile, Communication' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Hi there! I'm Alex 👋
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  With over 5 years of experience in web development and design, I specialize in 
                  creating beautiful, functional, and user-centered digital experiences. My journey 
                  started with a curiosity about how things work on the web, and it has evolved 
                  into a passion for crafting solutions that truly matter.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When I'm not coding or designing, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee while 
                  sketching out ideas for my next project.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '5+', label: 'Years' },
                  { number: '30+', label: 'Clients' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h4>
                  <p className="text-gray-600">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;