import React from 'react';
import { socialLinks, personalInfo } from '../../data/portfolioData';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black py-12 relative overflow-hidden border-t border-gray-800" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">{personalInfo.about}</p>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-300 text-sm sm:text-base">
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
              <p className="text-gray-300 text-sm sm:text-base break-words">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base"
                >
                  Certifications
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
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
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-10 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;