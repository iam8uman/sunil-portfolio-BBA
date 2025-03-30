
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  darkMode?: boolean;
}

const Logo = ({ darkMode }: LogoProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if darkMode prop is provided, otherwise check for system preference
    if (darkMode !== undefined) {
      setIsDarkMode(darkMode);
    } else {
      const isDark = 
        document.documentElement.classList.contains('dark') || 
        localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      setIsDarkMode(isDark);
    }
  }, [darkMode]);

  return (
    <motion.div
      className="relative h-10 w-10 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <motion.span 
        className={`text-xl font-playfair font-extrabold ${isDarkMode ? 'text-white' : 'text-primary'}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        SS
      </motion.span>
      <motion.div 
        className={`absolute inset-0 rounded-full border-2 ${isDarkMode ? 'border-white/20' : 'border-primary/20'}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      />
      <motion.div 
        className={`absolute -inset-1 rounded-full border border-dashed ${isDarkMode ? 'border-white/10' : 'border-primary/10'}`}
        initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 45 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default Logo;
