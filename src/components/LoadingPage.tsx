import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import ScrollFloat from './ScrollFloat';
import ProfileCard from './ProfileCardBits';
import './ProfileCardBits.css';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../assets/avatar/3.png';
import ParticlesBackground from "./ParticlesBackground";

interface CubeProps {
  delay: number;
  theme: string;
  index: number;
}

const Cube: React.FC<CubeProps> = ({ delay, theme, index }) => {
  const colors = theme === 'dark' 
    ? ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444']
    : ['#5067EB', '#291D89', '#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'];

  return (
    <motion.div
      className={`w-4 h-4 rounded-sm`}
      style={{ backgroundColor: colors[index % colors.length] }}
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
        scale: [1, 1.3, 1],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.5,
        rotateZ: 180,
        transition: { duration: 0.3 }
      }}
    />
  );
};

const LoadingPage: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();

  const welcomeText = "Hello! This is my resume website";
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  const getRandomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const scrambleText = (targetText: string, iteration: number, maxIterations: number) => {
    return targetText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (char === '!') return '!';
        if (char === '.') return '.';
        return iteration < maxIterations ? getRandomChar() : char;
      })
      .join('');
  };

  useEffect(() => {
    setIsDecrypting(true);
    let iteration = 0;
    const maxIterations = 15;
    const decryptInterval = setInterval(() => {
      const scrambled = scrambleText(welcomeText, iteration, maxIterations);
      setCurrentText(scrambled);
      iteration++;
      if (iteration >= maxIterations) {
        setCurrentText(welcomeText);
        setIsDecrypting(false);
        clearInterval(decryptInterval);
        setTimeout(() => setShowCard(true), 600);
      }
    }, 60);
    return () => clearInterval(decryptInterval);
  }, []);

  return (
    <div className={`min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-customBlueWhite text-gray-900'}`}> 
      <div className={`w-full h-full min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${showCard ? 'pt-12 pb-12' : ''}`}> 
        {!showCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-center flex items-center justify-center w-full"
            style={{ 
              minHeight: 60, 
              height: '40vh', 
              alignItems: 'center', 
              justifyContent: 'center', 
              display: 'flex'
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">
              {currentText}
            </span>
            {isDecrypting && (
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            )}
          </motion.div>
        )}
        
        <AnimatePresence>
          {/* <ParticlesBackground /> */}
          {showCard && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full flex justify-center mb-8"
              >
                <ProfileCard
                  name="Saldjanov Bakhodir"
                  title="Backend Engineer"
                  handle="froas"
                  contactText="Contact Me"
                  avatarUrl={avatarImg}
                  showUserInfo={true}
                  enableTilt={true}
                  onCardClick={() => navigate('/resume')}
                  email="bakhodir.saldjanov@gmail.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                className="text-xl md:text-2xl font-bold text-center"
                style={{ pointerEvents: 'none' }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customPurple">
                  {welcomeText}
                </span>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoadingPage;
