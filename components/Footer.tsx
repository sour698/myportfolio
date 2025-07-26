
'use client';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 ${ 
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sourav Das</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack & Backend Developer passionate about building scalable solutions and exploring AI/ML technologies. 
              Currently pursuing B.Tech in AI & ML, focused on creating innovative applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sourav-das-20032a2a7"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a
                href="mailto:souravdas5670@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-mail-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <i className="ri-mail-line mr-2"></i>
                <span>souravdas5670@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-phone-line mr-2"></i>
                <span>+91 98315 60836</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-map-pin-line mr-2"></i>
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {currentYear} Sourav Das. All rights reserved. Built with Next.js, Tailwind CSS & GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
