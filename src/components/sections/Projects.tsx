import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = activeTab
    ? projects.filter(project => project.tags.includes(activeTab))
    : projects;

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Exploring the intersection of machine learning and real-world applications.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8 px-2"
        >
          <button
            onClick={() => setActiveTab(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === null
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
            }`}
          >
            All
          </button>
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
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

export default Projects;