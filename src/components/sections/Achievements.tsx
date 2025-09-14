import React from 'react';
import { achievements } from '../../data/portfolioData';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.1) 50%, transparent 60%)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognition and milestones in my professional journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {achievements.map((achievement, index) => (
              <motion.div 
                key={achievement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row md:items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg border-2 border-gray-800"
                >
                  <Trophy size={20} className="text-white" />
                </motion.div>

                <div className={`md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {achievement.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <span className="font-medium text-blue-400">
                            {achievement.issuer}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{achievement.date}</span>
                        </div>
                        <p className="text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;