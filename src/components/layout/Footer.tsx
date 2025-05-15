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
    <footer className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 py-12 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)]"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Contact</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">{personalInfo.about}</p>
            <div className="flex flex-col space-y-2">
              <p className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Location:</span> {personalInfo.location}
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
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
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>
                <a
                  href="#home"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 shadow-sm transition-all duration-300"
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
          className="border-t border-slate-200 dark:border-slate-700/50 mt-10 pt-6 text-center"
        >
          <p className="text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;