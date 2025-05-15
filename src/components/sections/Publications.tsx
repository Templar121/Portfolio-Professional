import React from 'react';
import { publications, academicProfiles } from '../../data/portfolioData';
import { FileText, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Publications: React.FC = () => {
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon size={20} /> : null;
  };

  return (
    <section id="publications" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Research Publications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            Contributing to the advancement of knowledge in machine learning and AI.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            {academicProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <DynamicIcon name={profile.icon} />
                <span className="ml-2 text-slate-700 dark:text-slate-300">{profile.platform}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <FileText size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {publication.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">
                    {publication.authors.join(', ')}
                  </p>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span>{publication.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{publication.year}</span>
                  </div>
                  {publication.doi && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                      DOI: {publication.doi}
                    </p>
                  )}
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <span className="font-medium">Read Publication</span>
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;