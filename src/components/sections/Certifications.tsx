import React from 'react';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional credentials and certifications from NPTEL demonstrating expertise in various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="relative h-36 w-full overflow-hidden">
                {certification.image ? (
                  <img
                    src={certification.image}
                    alt={certification.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-medium">{certification.issuer}</p>
                    <p className="text-sm opacity-80">{certification.date}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <Award size={18} className="text-blue-400" />
                  </div>
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {certification.title}
                    </h3>
                    {certification.score && (
                      <p className="text-sm text-green-400 font-medium mb-2">
                        Score: {certification.score}
                      </p>
                    )}
                    {certification.credentialId && (
                      <p className="text-xs text-gray-400 mb-2">
                        Credential ID: {certification.credentialId}
                      </p>
                    )}
                    {certification.credentialLink && (
                      <a
                        href={certification.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span className="font-medium">Verify</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;