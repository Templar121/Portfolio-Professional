import React from 'react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 text-center md:text-left relative z-10"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                <span className="block text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-2">Hello, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
                  {personalInfo.name}
                </span>
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl md:text-2xl font-medium text-gray-300 border-l-4 border-blue-400 pl-4"
              >
                {personalInfo.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed"
              >
                {personalInfo.tagline}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center md:justify-start space-x-4 pt-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-blue-400 hover:bg-blue-600/20 hover:border-blue-400 shadow-lg transition-all duration-300"
                    aria-label={link.platform}
                  >
                    <DynamicIcon name={link.icon} />
                  </motion.a>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold shadow-xl transition-all duration-300 border border-blue-500/20"
                >
                  View My Projects
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-blue-400 hover:bg-gray-800/70 hover:border-blue-400 rounded-lg font-semibold shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <DynamicIcon name="FileDown" />
                  <span className="ml-2">Download Resume</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-blue-400 hover:bg-gray-800/70 hover:border-blue-400 rounded-lg font-semibold shadow-xl transition-all duration-300"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 flex justify-center relative z-10"
          >
            <div className="relative group">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              >
                {/* Inner border with gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black">
                    <img
                      src={personalInfo.image}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover filter brightness-110 contrast-110"
                      loading="eager"
                    />
                  </div>
                </div>
                
                {/* Overlay gradient for professional look */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl border border-blue-400/30 backdrop-blur-sm"
              >
                <p className="font-semibold text-sm sm:text-base">ML Engineer</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow-xl border border-purple-400/30 backdrop-blur-sm"
              >
                <p className="font-medium text-xs sm:text-sm">AI Researcher</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2"
            ></motion.div>
          </motion.div>
          <p className="text-gray-500 text-xs mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <p className="font-medium text-sm sm:text-base">ML Engineer</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;