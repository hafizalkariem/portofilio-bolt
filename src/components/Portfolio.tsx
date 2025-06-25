import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and customizable widgets for weather tracking.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, responsive design, and optimized performance for showcasing creative work.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Angular', 'D3.js', 'Firebase', 'Material UI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, student tracking, video streaming, and interactive assessments for online education.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'Prisma', 'AWS', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full hover:scale-110 transition-transform duration-200"
                    >
                      <Github className="w-4 h-4 text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;