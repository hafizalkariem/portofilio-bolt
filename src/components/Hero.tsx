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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-white">
                AC
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Alex Chen
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Full-Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern technologies. 
            Passionate about clean code, elegant design, and solving complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Get In Touch
            </button>
            <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              <Download className="inline-block w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-600 group-hover:text-purple-600" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;