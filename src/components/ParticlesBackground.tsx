
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; color: string; speed: number }[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const createParticles = useCallback(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    setDimensions({ width: windowWidth, height: windowHeight });
    
    const particleCount = Math.min(Math.floor(windowWidth * windowHeight / 20000), 40);
    const colors = ['#E6E6FA', '#D8BFD8', '#DDA0DD', '#EE82EE', '#DA70D6'];
    
    const newParticles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.1
    }));
    
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    createParticles();
    
    const handleResize = () => {
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createParticles]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-50 dark:opacity-20">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [particle.y, particle.y + 100, particle.y],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8 / particle.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
