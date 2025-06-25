import React from 'react';
import { Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content - Text */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-gray-800 mb-2">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    Alex Chen
                  </span>
                </h1>
                
                <div className="mt-6">
                  <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                    Full-Stack Developer
                  </p>
                  <p className="text-xl md:text-2xl text-purple-600 font-medium">
                    & UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Crafting beautiful digital experiences with modern technologies. 
                  Passionate about clean code, elegant design, and solving complex problems.
                </p>
                <p className="text-base md:text-lg text-gray-500 max-w-xl">
                  Specializing in React, TypeScript, Node.js, and creating user-centered 
                  applications that make a real impact.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </button>
                <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Twitter, href: '#', label: 'Twitter' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '50+', label: 'Projects Completed' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '30+', label: 'Happy Clients' }
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Profile Image Container */}
                <div className="relative w-80 h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[550px]">
                  {/* Background Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform rotate-3"></div>
                  <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform -rotate-2"></div>
                  
                  {/* Profile Image */}
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-400 via-blue-500 to-pink-500 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Placeholder for actual photo - using gradient with initials for now */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-8xl md:text-9xl font-bold text-white mb-4 opacity-90">
                          AC
                        </div>
                        <div className="text-white text-xl font-medium opacity-75">
                          Full-Stack Developer
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-lg"></div>
                    </div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-xl backdrop-blur-sm"></div>
                  </div>
                </div>

                {/* Floating Skills Tags */}
                <div className="absolute -right-4 top-16 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-purple-600">React Expert</span>
                </div>
                <div className="absolute -left-8 top-32 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-blue-600">UI/UX Design</span>
                </div>
                <div className="absolute -right-8 bottom-32 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-pink-600">TypeScript</span>
                </div>
                <div className="absolute -left-4 bottom-16 bg-white rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-green-600">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;