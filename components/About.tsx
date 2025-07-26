
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(imageRef.current, 
        { 
          opacity: 0, 
          x: -100,
          rotationY: -15 
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { 
          opacity: 0, 
          x: 100 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3D hover effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current) return;
        
        const rect = imageRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        gsap.to(imageRef.current, {
          rotationX: y * 15,
          rotationY: x * 15,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000
        });
      };

      const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      };

      imageRef.current?.addEventListener('mousemove', handleMouseMove);
      imageRef.current?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        imageRef.current?.removeEventListener('mousemove', handleMouseMove);
        imageRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className={`py-20 ${ 
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=Advanced%20robotics%20laboratory%20with%20humanoid%20robots%2C%20robotic%20arms%2C%20AI%20research%20equipment%2C%20futuristic%20technology%2C%20modern%20clean%20lab%20environment%2C%20blue%20LED%20lighting%2C%20circuit%20boards%2C%20sensors%2C%20mechanical%20engineering%2C%20artificial%20intelligence%20development%2C%20high-tech%20workspace%2C%20innovative%20robotics%20design%2C%20automated%20systems&width=500&height=600&seq=about-robotics&orientation=portrait"
                alt="Advanced Robotics Laboratory"
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <div>
              <h2 className={`text-4xl font-bold mb-4 ${ 
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            <p className={`text-lg leading-relaxed ${ 
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm Sourav Das, an aspiring Full Stack & Backend Developer with a strong foundation in Java, Spring Boot, Node.js, and a deep interest in building scalable and efficient web applications. Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning, I'm focused on strengthening my real-world development skills by working on personal projects and learning from open-source communities.
            </p>

            <p className={`text-lg leading-relaxed ${ 
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My core strengths lie in backend logic, RESTful API design, and handling data with relational databases like MySQL. I'm also expanding my frontend capabilities with JavaScript and frameworks like React. Apart from full stack development, I'm fascinated by AI/ML and actively exploring how to integrate intelligent features into applications.
            </p>

            <p className={`text-lg leading-relaxed ${ 
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I enjoy solving problems, learning new technologies, and continuously improving my code structure and efficiency. I'm open to internships, collaborative projects, and opportunities where I can grow as a developer, contribute meaningfully to real-world systems, and learn from experienced mentors in the field.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className={`text-center p-4 rounded-lg ${ 
                isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
              }`}>
                <div className="text-3xl font-bold text-blue-600">B.Tech</div>
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>AI & ML Student</div>
              </div>
              <div className={`text-center p-4 rounded-lg ${ 
                isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'
              }`}>
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects Built</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg"
              >
                Let's Work Together
              </a>
              <a
                href="/resume.pdf"
                className={`border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer ${ 
                  isDarkMode 
                    ? 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                    : 'text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
