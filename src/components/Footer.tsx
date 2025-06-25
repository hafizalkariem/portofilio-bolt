import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Alex Chen
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Developer & UI/UX Designer passionate about creating 
                beautiful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Portfolio', 'Testimonials', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-400">
                <div>Web Development</div>
                <div>UI/UX Design</div>
                <div>Mobile Development</div>
                <div>Consulting</div>
                <div>Code Review</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Alex Chen. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and lots of coffee
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;