import React from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from 'framer-motion';

const ResumePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="App"
    >
      <ParticlesBackground />
      <Header />
      <div id="resume-content" className="p-10 text-red dark:text-white backdrop-blur-sm">
        <MainContent />
      </div>
      <Footer />
    </motion.div>
  );
};

export default ResumePage; 