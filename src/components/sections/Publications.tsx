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
    <section id="publications" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Research Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6"
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
                className="inline-flex items-center px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <DynamicIcon name={profile.icon} />
                <span className="ml-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">{profile.platform}</span>
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
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {publication.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-2 line-clamp-2">
                    {publication.authors.join(', ')}
                  </p>
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 gap-2">
                    <span className="line-clamp-1">{publication.journal}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{publication.year}</span>
                  </div>
                  {publication.doi && (
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3 break-all">
                      DOI: {publication.doi}
                    </p>
                  )}
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
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