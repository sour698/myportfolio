
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      category: "Backend Development",
      skills: [
        { name: "Java", level: 90, icon: "ri-code-s-slash-line" },
        { name: "Spring Boot", level: 85, icon: "ri-leaf-line" },
        { name: "Node.js", level: 88, icon: "ri-nodejs-line" },
        { name: "Python", level: 80, icon: "ri-code-line" },
        { name: "MySQL", level: 85, icon: "ri-database-2-line" },
        { name: "MongoDB", level: 75, icon: "ri-database-line" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 85, icon: "ri-javascript-line" },
        { name: "React", level: 80, icon: "ri-reactjs-line" },
        { name: "HTML/CSS", level: 88, icon: "ri-html5-line" },
        { name: "TypeScript", level: 75, icon: "ri-code-s-slash-line" },
        { name: "Tailwind CSS", level: 85, icon: "ri-css3-line" }
      ]
    },
    {
      category: "AI/ML & Tools",
      skills: [
        { name: "Machine Learning", level: 70, icon: "ri-brain-line" },
        { name: "TensorFlow", level: 65, icon: "ri-cpu-line" },
        { name: "Git", level: 90, icon: "ri-git-branch-line" },
        { name: "Docker", level: 70, icon: "ri-container-line" },
        { name: "AWS", level: 60, icon: "ri-cloud-line" },
        { name: "Linux", level: 80, icon: "ri-terminal-line" }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill categories
      gsap.fromTo('.skill-category', 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
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

      // Animate progress bars
      gsap.fromTo('.progress-bar', 
        { 
          width: 0 
        },
        {
          width: (index, target) => {
            const level = target.getAttribute('data-level');
            return `${level}%`;
          },
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate skill items
      gsap.fromTo('.skill-item', 
        { 
          opacity: 0, 
          x: -30 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My technical expertise spans across backend development, frontend technologies, and AI/ML implementations.
          </p>
        </div>

        <div ref={skillsRef} className="grid lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-category p-6 rounded-2xl shadow-lg ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} w-5 h-5 flex items-center justify-center mr-3 ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}></i>
                        <span className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                        className="progress-bar h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-8 rounded-2xl shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'REST APIs', 'Microservices', 'System Design', 'Data Structures', 
                'Algorithms', 'Software Architecture', 'Agile Development', 'Testing'
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDarkMode 
                      ? 'bg-blue-900/30 text-blue-300' 
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
