'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600); // Allow fade out animation
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-cyan-500/30 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Monogram - initials "PY" */}
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            duration: 0.8,
          }}
          className="flex items-center justify-center w-32 h-32 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #00d9ff, #0099ff)',
            boxShadow: '0 0 60px rgba(0, 217, 255, 0.5)',
          }}
        >
          <span className="text-5xl font-bold text-dark">PY</span>
        </motion.div>

        {/* Rotating border ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            backgroundImage:
              'linear-gradient(#0a0e27, #0a0e27), linear-gradient(135deg, #00d9ff, #0099ff, #ff00ff)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-20  sm:left-[32%] md:left-[38%] lg:left-[41%] xl:left-[43%] -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />
        </div>
        <p className="text-center text-sm text-gray-400 mt-4 tracking-widest">
          LOADING
        </p>
      </motion.div>
    </motion.div>
  );
}
