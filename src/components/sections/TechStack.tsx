import React from 'react';
import { techStacks } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const TechStack: React.FC = () => {
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    return LucideIcon ? <LucideIcon className="w-6 h-6" /> : null;
  };

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My toolkit for building intelligent systems and solving complex problems.
          </p>
        </motion.div>

        <div className="space-y-20">
          {techStacks.map((stack, stackIndex) => (
            <motion.div
              key={stackIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 text-white">
                  <DynamicIcon name={getIconForCategory(stack.category)} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {stack.category}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {stack.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="relative group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-400"
                      >
                        {getProficiencyLabel(skill.proficiency)}
                      </motion.span>
                    </div>
                    
                    <div className="relative h-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
                      />
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -right-2 -top-2 w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400 opacity-0 group-hover:opacity-100"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getProficiencyLabel(proficiency: number): string {
  switch (proficiency) {
    case 1: return 'Beginner';
    case 2: return 'Elementary';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'Intermediate';
  }
}

function getIconForCategory(category: string): string {
  switch (category) {
    case 'Machine Learning & AI':
      return 'Brain';
    case 'Programming':
      return 'Code2';
    case 'Data Engineering':
      return 'Database';
    case 'MLOps & Tools':
      return 'Settings2';
    default:
      return 'Code';
  }
}

export default TechStack;