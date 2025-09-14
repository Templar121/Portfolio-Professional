import React from 'react';
import { publications, academicProfiles } from '../../data/portfolioData';
import { FileText, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Publications: React.FC = () => {
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  return (
    <section id="publications" className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Research Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-6"
          >
            Contributing to the advancement of knowledge in machine learning and AI.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {academicProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 sm:px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-blue-500/30 transition-all duration-300"
              >
                <DynamicIcon name={profile.icon} />
                <span className="ml-2 text-sm sm:text-base text-gray-300">{profile.platform}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 p-4 sm:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    <FileText size={20} className="text-blue-400" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-2 line-clamp-2">
                    {publication.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-2 line-clamp-2">
                    {publication.authors.join(', ')}
                  </p>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-400 mb-3 gap-2">
                    <span className="line-clamp-1">{publication.journal}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{publication.year}</span>
                  </div>
                  {publication.doi && (
                    <p className="text-xs sm:text-sm text-gray-400 mb-3 break-all">
                      DOI: {publication.doi}
                    </p>
                  )}
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="font-medium">Read Publication</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;