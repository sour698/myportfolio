
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Gradelytics - Student Performance Tracker',
      description: 'Comprehensive desktop application for educators to analyze and predict student academic performance with intelligent forecasting using regression algorithms.',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'JFreeChart'],
      image: 'https://readdy.ai/api/search-image?query=Educational%20analytics%20dashboard%20with%20charts%20graphs%20student%20performance%20tracking%20interface%20modern%20desktop%20application%20clean%20professional%20design%20blue%20color%20scheme%20data%20visualization%20academic%20metrics&width=600&height=400&seq=gradelytics-1&orientation=landscape',
      category: 'Backend',
      features: [
        'Student performance analysis',
        'Predictive forecasting with regression',
        'Data visualization with charts',
        'Database integration for student data'
      ],
      githubUrl: "https://github.com/sour698/gradelytics.git",
      liveUrl: "https://demo.com"
    },
    {
      id: 2,
      title: 'Finotex-Bank Management System',
      description: 'Desktop banking software for managing personal accounts, transactions, and banking operations with secure data handling and interactive form-based UI.',
      technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
      image: 'https://readdy.ai/api/search-image?query=Bank%20management%20system%20desktop%20application%20interface%20modern%20banking%20software%20clean%20professional%20design%20secure%20transaction%20handling%20account%20management%20dark%20blue%20green%20color%20scheme%20financial%20dashboard&width=600&height=400&seq=finotex-bank-1&orientation=landscape',
      category: 'Backend',
      features: [
        'Personal account management',
        'Secure transaction processing',
        'Interactive form-based UI',
        'Real-world banking simulation'
      ],
      githubUrl: "https://github.com/sour698/finotex.git",
      liveUrl: "https://demo.com"
    },
    {
      id: 3,
      title: 'SkyTalk - AI-Powered Weather App',
      description: 'Dynamic web application combining real-time weather updates with interactive AI chatbot for engaging user experience and conversational weather assistance.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'Gemini AI API'],
      image: 'https://readdy.ai/api/search-image?query=Weather%20application%20interface%20with%20AI%20chatbot%20modern%20web%20design%20clean%20blue%20sky%20theme%20real-time%20weather%20dashboard%20interactive%20chat%20interface%20responsive%20design%20weather%20forecast&width=600&height=400&seq=skytalk-1&orientation=landscape',
      category: 'AI/ML',
      features: [
        'Real-time weather dashboard',
        'Interactive AI chatbot',
        'Clean responsive UI',
        'Conversational weather assistance'
      ],
      githubUrl: "https://github.com/sour698/Skytalk_weather.git",
      liveUrl: "https://demo.com"
    },
    {
      id: 4,
      title: 'Arix - AI PDF Chatbot',
      description: 'Smart chatbot allowing users to upload PDFs and interact with content via natural language using Google Gemini API for contextual document analysis.',
      technologies: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://readdy.ai/api/search-image?query=AI%20PDF%20chatbot%20interface%20modern%20React%20application%20document%20analysis%20smart%20conversation%20TypeScript%20clean%20design%20purple%20blue%20gradient%20PDF%20upload%20interactive%20chat%20natural%20language%20processing&width=600&height=400&seq=arix-1&orientation=landscape',
      category: 'AI/ML',
      features: [
        'PDF document upload',
        'Natural language interaction',
        'Contextual AI responses',
        'Smart document analysis'
      ],
      githubUrl: "https://github.com/sour698/arix.git",
      liveUrl: "https://demo.com"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'backend', name: 'Backend' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section id="projects" ref={sectionRef} className={`py-20 ${ 
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${ 
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${ 
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of my recent projects showcasing my skills in backend development, desktop applications, and AI/ML implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${ 
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${ 
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <i className="ri-github-fill text-white text-xl"></i>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line text-white text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${ 
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${ 
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${ 
                        isDarkMode 
                          ? 'bg-blue-900/30 text-blue-300' 
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${ 
                        isDarkMode 
                          ? 'bg-green-900/30 text-green-300' 
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
