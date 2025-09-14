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
    <section id="tech-stack" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                  <DynamicIcon name={getIconForCategory(stack.category)} />
                </div>
                <h3 className="text-2xl font-bold text-white">
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
                    className="relative group bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30"
                      >
                        {getProficiencyLabel(skill.proficiency)}
                      </motion.span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(skill.proficiency / 5) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
                      />
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -right-2 -top-2 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 shadow-lg"
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