
'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Fixed particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 15.5, top: 25.3 },
    { left: 45.2, top: 68.1 },
    { left: 72.8, top: 12.5 },
    { left: 25.6, top: 85.2 },
    { left: 88.3, top: 45.7 },
    { left: 52.1, top: 32.4 },
    { left: 33.7, top: 76.8 },
    { left: 67.9, top: 58.6 },
    { left: 12.4, top: 42.3 },
    { left: 85.6, top: 18.9 },
    { left: 41.2, top: 64.5 },
    { left: 76.3, top: 38.7 },
    { left: 28.9, top: 72.1 },
    { left: 59.4, top: 15.8 },
    { left: 81.7, top: 91.2 }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current, taglineRef.current, buttonRef.current], {
        opacity: 0,
        y: 100
      });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7");

      // Floating animation
      gsap.to(floatingRef.current, {
        y: -30,
        rotation: 360,
        duration: 4,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Particle animation
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          gsap.to(particle, {
            y: -100,
            x: (index % 2 === 0 ? 1 : -1) * (50 + index * 10),
            rotation: index * 24,
            duration: 3 + (index % 3),
            ease: "power2.out",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2
          });
        });
      }

      // 3D rotation effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        if (!heroRef.current) return;
        
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        gsap.to(floatingRef.current, {
          rotationX: y * 30,
          rotationY: x * 30,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000
        });
      };

      heroRef.current?.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        heroRef.current?.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return (
      <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50'
      }`}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 opacity-0 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sourav Das</span>
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" ref={heroRef} className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse ${
          isDarkMode ? 'bg-blue-600' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000 ${
          isDarkMode ? 'bg-purple-600' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000 ${
          isDarkMode ? 'bg-cyan-600' : 'bg-cyan-300'
        }`}></div>
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {particlePositions.map((position, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-60 ${
              isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 
            ref={titleRef}
            className={`text-6xl md:text-8xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Hi, I'm <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sourav Das</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className={`text-2xl md:text-3xl font-semibold mb-4 ${
              isDarkMode ? 'text-blue-300' : 'text-blue-600'
            }`}
          >
            Full Stack & Backend Developer
          </p>

          <p 
            ref={taglineRef}
            className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Proficient in Java & Node.js | AI/ML Enthusiast | Engineering Student | Focused on Building Scalable Solutions
          </p>

          <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className={`border-2 border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer ${
                isDarkMode 
                  ? 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900' 
                  : 'text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* 3D Floating Elements */}
        <div 
          ref={floatingRef}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block"
        >
          <div className="relative">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-12 opacity-80"></div>
            <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-xl transform -rotate-6 opacity-70"></div>
            <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-lg transform rotate-12 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-12 border-2 rounded-full flex justify-center ${
          isDarkMode ? 'border-gray-400' : 'border-gray-600'
        }`}>
          <div className={`w-1 h-4 rounded-full mt-2 animate-bounce ${
            isDarkMode ? 'bg-gray-400' : 'bg-gray-600'
          }`}></div>
        </div>
        <p className={`text-sm mt-2 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>Scroll Down</p>
      </div>
    </section>
  );
}
