import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, QrCode, Target } from 'lucide-react';

const PortfolioSection = ({ theme, onProjectClick }: { theme: string; onProjectClick: (id: string) => void }) => {
  const projects = [
    {
      id: 'sugarless-api',
      name: 'Sugarless OpenAPI',
      description: 'Clean API documentation generator',
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'qr-generator',
      name: 'QR Code Generator',
      description: 'Generate custom QR codes instantly',
      icon: <QrCode className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'roadmap-tracker',
      name: 'Roadmap-Goal Tracker',
      description: 'Track your learning journey',
      icon: <Target className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-4xl mx-auto px-4 mb-8"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-lg font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple"
      >
        Featured Projects
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ 
              y: -5, 
              transition: { duration: 0.2 } 
            }}
            className={`
              relative group cursor-pointer p-4 rounded-lg border transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/70' 
                : 'bg-white/80 border-gray-200 hover:border-gray-300 hover:bg-white/90'
              }
              backdrop-blur-sm
            `}
            onClick={() => onProjectClick(project.id)}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                {project.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{project.name}</h4>
              </div>
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {project.description}
            </p>
            
            {/* Hover effect gradient border */}
            <div className={`
              absolute inset-0 rounded-lg bg-gradient-to-r ${project.color} opacity-0 
              group-hover:opacity-20 transition-opacity duration-300 pointer-events-none
            `} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PortfolioSection;
